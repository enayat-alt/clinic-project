const jwt = require("jsonwebtoken");
const User = require("../models/User");

const {
  generateAccessToken,
  generateRefreshToken,
} = require("../utils/generateTokens");
  
// Register
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (role === "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin registration is not allowed",
      });
    }

    const existingUser = await User.findOne({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
      role: role || "patient",
    });

    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    user.refreshToken = refreshToken;
    await user.save();

    res.status(201).json({
      success: true,
      message: "Registration successful",
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.scope("withPassword").findOne({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    user.refreshToken = refreshToken;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Refresh Token
exports.refresh = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token required",
      });
    }

    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findByPk(decoded.id);

    if (!user || user.refreshToken !== refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Invalid refresh token",
      });
    }

    const accessToken = generateAccessToken(user.id);

    res.status(200).json({
      success: true,
      accessToken,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid refresh token",
    });
  }
};

// Get Current User
exports.getMe = async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};
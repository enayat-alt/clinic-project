const jwt = require("jsonwebtoken");
const User = require("../../models/auth/User");
const Session = require("../../models/auth/Session");

const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../utils/generateTokens");


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

    await User.create({
      name,
      email,
      password,
      role: role || "patient",
    });

    return res.status(201).json({
      success: true,
      message: "Registration successful. Please login.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
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

    await Session.create({
      userId: user.id,
      refreshToken,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken,
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
    const refreshToken = req.cookies.refreshToken;
       if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token required",
      });
    }

    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    const session = await Session.findOne({
      where: {
        refreshToken,
        isRevoked: false,
      },
    });
   

    if (!session) {
      return res.status(401).json({
        success: false,
        message: "Invalid refresh token",
      });
    }

    if (session.expiresAt < new Date()) {
      return res.status(401).json({
        success: false,
        message: "Session expired",
      });
    }

    const user = await User.findByPk(session.userId);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
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



exports.logout = async (req, res) => {
  try {
   

    const refreshToken = req.cookies.refreshToken;

  

    if (refreshToken) {
      const session = await Session.findOne({
        where: {
          refreshToken,
          isRevoked: false,
        },
      });

      if (session) {
        session.isRevoked = true;

        await session.save();

        await session.reload();

      }
    }

    res.clearCookie("refreshToken");

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
   

    res.status(500).json({
      success: false,
      message: "Logout failed",
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

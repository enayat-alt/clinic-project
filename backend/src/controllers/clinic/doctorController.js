const Doctor = require("../../models/clinic/Doctor");
const User = require("../../models/auth/User");

exports.getAll = async (req, res) => {
  try {
    const doctors = await Doctor.findAll({
      where: {
        isVerified: true,
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["name", "email", "avatar"],
        },
      ],
    });

    res.json(doctors);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "user",
          attributes: ["name", "email", "avatar"],
        },
      ],
    });

    if (!doctor) {
      return res.status(404).json({
        message: "Doctor not found",
      });
    }

    res.json(doctor);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({
      where: {
        userId: req.user.id,
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["name", "email", "avatar"],
        },
      ],
    });

    if (!doctor) {
      return res.status(404).json({
        message: "Doctor profile not found",
      });
    }

    res.json(doctor);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const [updatedRows] = await Doctor.update(req.body, {
      where: {
        userId: req.user.id,
      },
    });

    if (!updatedRows) {
      const doctor = await Doctor.create({
        userId: req.user.id,
        ...req.body,
      });

      return res.json(doctor);
    }

    const updatedDoctor = await Doctor.findOne({
      where: {
        userId: req.user.id,
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["name", "email", "avatar"],
        },
      ],
    });

    res.json(updatedDoctor);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
};
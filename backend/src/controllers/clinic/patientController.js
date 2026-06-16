// patientController.js

const Patient = require("../../models/clinic/Patient");
const User = require("../../models/auth/User");

exports.getProfile = async (req, res) => {
  try {
    const profile = await Patient.findOne({
      where: {
        userId: req.user.id,
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["name", "email"],
        },
      ],
    });

    if (!profile) {
      return res.status(404).json({
        message: "Patient profile not found",
      });
    }

    res.json(profile);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const [updatedRows] = await Patient.update(req.body, {
      where: {
        userId: req.user.id,
      },
    });

    // Equivalent of Mongoose upsert
    if (!updatedRows) {
      const profile = await Patient.create({
        userId: req.user.id,
        ...req.body,
      });

      return res.json(profile);
    }

    const profile = await Patient.findOne({
      where: {
        userId: req.user.id,
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["name", "email"],
        },
      ],
    });

    res.json(profile);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
};
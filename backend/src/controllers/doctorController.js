const Doctor = require("../models/Doctor");
const User = require("../models/User");

exports.getAll = async (req, res) => {
  try {
    const doctors = await Doctor.find({ isVerified: true }).populate("user", "name email avatar");
    res.json(doctors);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate("user", "name email avatar");
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json(doctor);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getProfile = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ user: req.user._id }).populate("user", "name email avatar");
    res.json(doctor);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.updateProfile = async (req, res) => {
  try {
    const doctor = await Doctor.findOneAndUpdate(
      { user: req.user._id },
      req.body,
      { new: true, upsert: true }
    );
    res.json(doctor);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

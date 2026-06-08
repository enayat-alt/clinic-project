// patientController.js
const Patient = require("../../models/clinic/Patient");

exports.getProfile = async (req, res) => {
  try {
    const profile = await Patient.findOne({ user: req.user._id }).populate("user", "name email");
    res.json(profile);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.updateProfile = async (req, res) => {
  try {
    const profile = await Patient.findOneAndUpdate({ user: req.user._id }, req.body, { new: true, upsert: true });
    res.json(profile);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

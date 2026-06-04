const Appointment = require("../models/Appointment");

exports.getAll = async (req, res) => {
  try {
    const filter = req.user.role === "patient" ? { patient: req.user._id }
                 : req.user.role === "doctor"  ? { doctor: req.user._id }
                 : {};
    const appointments = await Appointment.find(filter)
      .populate("patient", "name email")
      .populate("doctor", "name email")
      .sort("-date");
    res.json(appointments);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.book = async (req, res) => {
  try {
    const appointment = await Appointment.create({ ...req.body, patient: req.user._id });
    res.status(201).json(appointment);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.update = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!appointment) return res.status(404).json({ message: "Not found" });
    res.json(appointment);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.cancel = async (req, res) => {
  try {
    await Appointment.findByIdAndUpdate(req.params.id, { status: "cancelled" });
    res.json({ message: "Cancelled" });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.accept = async (req, res) => {
  try {
    const a = await Appointment.findByIdAndUpdate(req.params.id, { status: "confirmed" }, { new: true });
    res.json(a);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.reject = async (req, res) => {
  try {
    const a = await Appointment.findByIdAndUpdate(req.params.id, { status: "cancelled" }, { new: true });
    res.json(a);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

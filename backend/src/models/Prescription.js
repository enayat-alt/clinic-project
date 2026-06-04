const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema({
  patient:     { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  doctor:      { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  appointment: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
  medicines: [{
    name:     String,
    dosage:   String,
    duration: String,
    timing:   String,
  }],
  instructions: { type: String, default: "" },
  diagnosis:    { type: String, default: "" },
}, { timestamps: true });

module.exports = mongoose.model("Prescription", prescriptionSchema);

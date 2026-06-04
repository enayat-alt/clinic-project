const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  user:        { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  dateOfBirth: { type: Date },
  gender:      { type: String, enum: ["male", "female", "other"] },
  bloodGroup:  { type: String },
  phone:       { type: String },
  address:     { type: String },
  medicalHistory: [{ condition: String, diagnosedAt: Date, notes: String }],
  allergies:   [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model("Patient", patientSchema);

const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  user:           { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  specialization: { type: String, required: true },
  qualification:  { type: String, required: true },
  experience:     { type: Number, default: 0 },
  bio:            { type: String, default: "" },
  consultationFee:{ type: Number, default: 0 },
  availability: [{
    day:       { type: String },
    startTime: { type: String },
    endTime:   { type: String },
  }],
  rating:    { type: Number, default: 0 },
  isVerified:{ type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Doctor", doctorSchema);

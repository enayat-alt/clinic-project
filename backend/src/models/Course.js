const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, required: true },
  category:    { type: String, enum: ["Anatomy", "Physiology", "Pharmacology", "Pathology", "Surgery"], required: true },
  thumbnail:   { type: String, default: "" },
  videos: [{
    title: String,
    url:   String,
    duration: Number,
  }],
  notes:   [{ title: String, fileUrl: String }],
  quizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }],
  enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);

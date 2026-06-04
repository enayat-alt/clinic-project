const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  course:  { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  title:   { type: String, required: true },
  questions: [{
    question: String,
    options:  [String],
    answer:   Number,
  }],
  passingScore: { type: Number, default: 60 },
}, { timestamps: true });

module.exports = mongoose.model("Quiz", quizSchema);

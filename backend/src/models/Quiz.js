const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String,
});

const quizSchema = new mongoose.Schema({
  title: String,
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  passingScore: {
    type: Number,
    default: 60,
  },
  questions: [questionSchema],
});

module.exports = mongoose.model("Quiz", quizSchema);
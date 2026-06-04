const Course = require("../models/Course");
const Quiz = require("../models/Quiz");

exports.getAll = async (req, res) => {
  try {
    const courses = await Course.find().populate("createdBy", "name");
    res.json(courses);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate("quizzes");
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.create = async (req, res) => {
  try {
    const course = await Course.create({ ...req.body, createdBy: req.user._id });
    res.status(201).json(course);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.enroll = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    if (!course.enrolledStudents.includes(req.user._id)) {
      course.enrolledStudents.push(req.user._id);
      await course.save();
    }
    res.json({ message: "Enrolled successfully" });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getQuiz = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate("quizzes");
    res.json(course?.quizzes || []);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.submitQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    const { answers } = req.body;
    let score = 0;
    quiz.questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });

    const percentage = Math.round((score / quiz.questions.length) * 100);
    const passed = percentage >= quiz.passingScore;
    res.json({ score, total: quiz.questions.length, percentage, passed });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

const Course = require("./learning/Course");
const Chapter = require("./learning/Chapter");
const Lesson = require("./learning/Lesson");


Course.hasMany(Chapter, {
  foreignKey: "courseId",
  onDelete: "CASCADE",
});

Chapter.belongsTo(Course, {
  foreignKey: "courseId",
});

Chapter.hasMany(Lesson, {
  foreignKey: "chapterId",
  onDelete: "CASCADE",
});

Lesson.belongsTo(Chapter, {
  foreignKey: "chapterId",
});

module.exports = {
  Course,
  Chapter,
  Lesson,
};
const Course = require("./learning/Course");
const Chapter = require("./learning/Chapter");
const Lesson = require("./learning/Lesson");
const User = require("./auth/User");
const StudentCourse = require("./learning/StudentCourse");

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

User.belongsToMany(Course, {
  through: StudentCourse,
  foreignKey: "userId",
  otherKey: "courseId",
  as: "enrolledCourses",
});

Course.belongsToMany(User, {
  through: StudentCourse,
  foreignKey: "courseId",
  otherKey: "userId",
  as: "students",
});

StudentCourse.belongsTo(User, {
  foreignKey: "userId",
});

User.hasMany(StudentCourse, {
  foreignKey: "userId",
});

StudentCourse.belongsTo(Course, {
  foreignKey: "courseId",
});

Course.hasMany(StudentCourse, {
  foreignKey: "courseId",
});

module.exports = {
  Course,
  Chapter,
  Lesson,
  User,
  StudentCourse,
};

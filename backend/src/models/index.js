const Course = require("./learning/Course");
const Chapter = require("./learning/Chapter");
const Lesson = require("./learning/Lesson");
const User = require("./auth/User");
const StudentCourse = require("./learning/StudentCourse");
const Doctor = require("./clinic/Doctor");
const Patient = require("./clinic/Patient")
const Session = require("./auth/Session");

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

Doctor.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

User.hasOne(Doctor, {
  foreignKey: "userId",
  as: "doctor",
});

Patient.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

User.hasOne(Patient, {
  foreignKey: "userId",
  as: "patient",
});

User.hasMany(Session, {
  foreignKey: "userId",
  as: "sessions",
  onDelete: "CASCADE",
});

Session.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

module.exports = {
  Course,
  Chapter,
  Lesson,
  User,
  StudentCourse,
  Doctor,
  Patient,
  Session
};

const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");

const StudentCourse = sequelize.define(
  "StudentCourse",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = StudentCourse;
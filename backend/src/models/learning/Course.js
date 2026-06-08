const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");

const Course = sequelize.define(
  "Course",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    instructor: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    thumbnail: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },

    price: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },

    status: {
      type: DataTypes.ENUM(
        "Draft",
        "Published"
      ),
      defaultValue: "Draft",
    },

    duration: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    level: {
      type: DataTypes.ENUM(
        "Beginner",
        "Intermediate",
        "Advanced"
      ),
      defaultValue: "Beginner",
    },

    language: {
      type: DataTypes.STRING,
      defaultValue: "English",
    },

    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = Course;
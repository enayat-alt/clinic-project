const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

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
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    category: {
      type: DataTypes.ENUM(
        "Anatomy",
        "Physiology",
        "Pharmacology",
        "Pathology",
        "Surgery"
      ),
      allowNull: false,
    },

    thumbnail: {
      type: DataTypes.STRING,
      defaultValue: "",
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
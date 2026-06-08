const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");

const Chapter = sequelize.define(
  "Chapter",
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

    order: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    timestamps: true,
  }
  
);
module.exports = Chapter;
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Doctor = sequelize.define(
  "Doctor",
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

    specialization: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    qualification: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    experience: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    bio: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },

    consultationFee: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },

    rating: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },

    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Doctor;
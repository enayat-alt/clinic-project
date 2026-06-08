const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");

const Appointment = sequelize.define(
  "Appointment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },

    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    appointmentDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    service: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    symptoms: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    status: {
      type: DataTypes.ENUM(
        "pending",
        "confirmed",
        "completed",
        "cancelled"
      ),
      defaultValue: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Appointment;
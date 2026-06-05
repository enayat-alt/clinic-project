const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Appointment = sequelize.define(
  "Appointment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    reason: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },

    status: {
      type: DataTypes.ENUM(
        "pending",
        "confirmed",
        "cancelled",
        "completed"
      ),
      defaultValue: "pending",
    },

    notes: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },

    type: {
      type: DataTypes.ENUM(
        "in-person",
        "telemedicine"
      ),
      defaultValue: "in-person",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Appointment;
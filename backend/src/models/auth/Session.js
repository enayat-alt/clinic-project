const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");

const Session = sequelize.define(
  "Session",
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

    refreshToken: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    deviceInfo: {
      type: DataTypes.STRING,
      defaultValue: "",
    },

    ipAddress: {
      type: DataTypes.STRING,
      defaultValue: "",
    },

    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    isRevoked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Session;
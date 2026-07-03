const { Sequelize } = require("sequelize");
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";
const useSSL = process.env.USE_SSL === "true";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,

  dialectOptions: useSSL
    ? {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }
    : {},
});

const connectDB = async () => {
  try {
    // Test database connection
    await sequelize.authenticate();
    console.log("PostgreSQL connected successfully");

    // Load all models and associations
    require("../models");

    // Sync database only in development
    if (!isProduction) {
      console.log("Development mode: syncing database...");
      await sequelize.sync({ alter: true });
      console.log("Database synced successfully");
    } else {
      console.log("Production mode: database sync skipped");
    }
  } catch (error) {
    console.error("Database connection error:");
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = {
  sequelize,
  connectDB,
};
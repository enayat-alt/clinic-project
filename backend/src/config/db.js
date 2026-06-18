const { Sequelize } = require("sequelize");
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,

  ...(isProduction && {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }),
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
     require("../models");

    // CREATE/UPDATE TABLES
    //await sequelize.sync();
     if (!isProduction) {
      console.log(
        "Development mode: syncing database..."
      );

      await sequelize.sync();
    }
    console.log(" PostgreSQL connected successfully");
  } catch (error) {
    console.error(" Database connection error:", error.message);
    process.exit(1);
  }
};

module.exports = {
  sequelize,
  connectDB,
};
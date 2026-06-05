
const app = require("./src/app");
const dotenv = require("dotenv");
const { sequelize, connectDB } = require("./src/config/db");

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect to PostgreSQL
    await connectDB();

    // Create tables from Sequelize models
    //await sequelize.sync();
    await sequelize.sync({ alter: true });
    

    console.log(" Database synced");

    app.listen(PORT, () => {
      console.log(` Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(" Server startup failed:", error);
  }
};

startServer();
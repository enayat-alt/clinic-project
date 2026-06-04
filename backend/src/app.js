const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth",         require("./routes/authRoutes"));
app.use("/api/patients",     require("./routes/patientRoutes"));
app.use("/api/doctors",      require("./routes/doctorRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));
app.use("/api/courses",      require("./routes/courseRoutes"));
app.use("/api/admin",        require("./routes/adminRoutes"));

app.get("/", (req, res) => res.json({ message: "MediCare API running" }));

module.exports = app;

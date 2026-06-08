const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth/authRoutes"));
app.use("/api/patients", require("./routes/clinic/patientRoutes"));
app.use("/api/doctors", require("./routes/clinic/doctorRoutes"));
app.use("/api/appointments", require("./routes/clinic/appointmentRoutes"));
app.use("/api/courses", require("./routes/learning/courseRoutes"));
app.use("/api/admin", require("./routes/auth/adminRoutes"));

app.use("/api/chapters", require("./routes/learning/chapterRoutes"));

app.use("/api/lessons", require("./routes/learning/lessonRoutes"));

app.get("/", (req, res) => {
  res.json({ message: "MediCare API running" });
});

module.exports = app;

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
//const { apiLimiter } = require("./middleware/rateLimiter");
const helmet = require("helmet");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();

const app = express();



app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use(helmet());

//app.use("/api", apiLimiter);

// Routes
app.use("/api/auth", require("./routes/auth/authRoutes"));
app.use("/api/patients", require("./routes/clinic/patientRoutes"));
app.use("/api/doctors", require("./routes/clinic/doctorRoutes"));
app.use("/api/appointments", require("./routes/clinic/appointmentRoutes"));
app.use("/api/courses", require("./routes/learning/courseRoutes"));
app.use("/api/admin", require("./routes/auth/adminRoutes"));

app.use("/api/chapters", require("./routes/learning/chapterRoutes"));

app.use("/api/lessons", require("./routes/learning/lessonRoutes"));
app.use("/api/student-courses", require("./routes/learning/studentCourseRoutes"));
 
app.use(errorHandler);

app.get("/", (req, res) => {
  res.json({ message: "MediCare API running" });
});

module.exports = app;
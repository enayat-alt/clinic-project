const User = require("../../models/auth/User");
const Doctor = require("../../models/clinic/Doctor");
const Appointment = require("../../models/clinic/Appointment");
const Course = require("../../models/learning/Course");
const StudentCourse = require("../../models/learning/StudentCourse");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().populate("user", "name email");
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.verifyDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      { isVerified: true },
      { new: true },
    );
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAnalytics = async (req, res) => {
  try {
    const [totalUsers, totalDoctors, totalAppointments, totalCourses] =
      await Promise.all([
        User.countDocuments(),
        Doctor.countDocuments(),
        Appointment.countDocuments(),
        Course.countDocuments(),
      ]);
    res.json({ totalUsers, totalDoctors, totalAppointments, totalCourses });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getDashboardStats = async (req, res) => {
  try {
    const totalStudents = await User.count({
      where: {
        role: "student",
      },
    });

    const totalCourses = await Course.count();

    const totalEnrollments = await StudentCourse.count();

    res.status(200).json({
      totalStudents,
      totalCourses,
      totalEnrollments,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};
exports.getStudents = async (req, res) => {
  try {
    const page =
      parseInt(req.query.page) || 1;

    const limit =
      parseInt(req.query.limit) || 10;

    const offset =
      (page - 1) * limit;

    const { count, rows } =
      await User.findAndCountAll({
        where: {
          role: "student",
        },
        attributes: {
          exclude: ["password"],
        },
        order: [["createdAt", "DESC"]],
        limit,
        offset,
      });

    res.status(200).json({
      success: true,
      students: rows,
      pagination: {
        page,
        limit,
        total: count,
        totalPages: Math.ceil(
          count / limit
        ),
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
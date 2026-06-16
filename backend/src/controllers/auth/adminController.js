
const User = require("../../models/auth/User");
const Doctor = require("../../models/clinic/Doctor");
const Appointment = require("../../models/clinic/Appointment");
const Course = require("../../models/learning/Course");
const StudentCourse = require("../../models/learning/StudentCourse");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["password"],
      },
    });

    res.json(users);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleted) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      message: "User deleted",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: ["name", "email"],
        },
      ],
    });

    res.json(doctors);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
};

exports.verifyDoctor = async (req, res) => {
  try {
    const [updatedRows, updatedDoctors] = await Doctor.update(
      {
        isVerified: true,
      },
      {
        where: {
          id: req.params.id,
        },
        returning: true,
      }
    );

    if (!updatedRows) {
      return res.status(404).json({
        message: "Doctor not found",
      });
    }

    res.json(updatedDoctors[0]);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getAnalytics = async (req, res) => {
  try {
    const [
      totalUsers,
      totalDoctors,
      totalAppointments,
      totalCourses,
    ] = await Promise.all([
      User.count(),
      Doctor.count(),
      Appointment.count(),
      Course.count(),
    ]);

    res.json({
      totalUsers,
      totalDoctors,
      totalAppointments,
      totalCourses,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
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
    const page = parseInt(req.query.page, 10) || 1;

    const limit = parseInt(req.query.limit, 10) || 10;

    const offset = (page - 1) * limit;

    const { count, rows } = await User.findAndCountAll({
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
        totalPages: Math.ceil(count / limit),
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
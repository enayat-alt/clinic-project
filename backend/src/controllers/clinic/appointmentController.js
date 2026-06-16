const Appointment = require("../../models/clinic/Appointment");

// Get All Appointments (Admin)
// exports.getAll = async (req, res) => {
//   try {
//     const appointments = await Appointment.findAll({
//       order: [["createdAt", "DESC"]],
//     });

//     res.status(200).json({
//       success: true,
//       appointments,
//     });
//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       success: false,
//       message: "Server Error",
//     });
//   }
// };
// Get All Appointments (Admin)
exports.getAll = async (req, res) => {
  try {
    const page =
      parseInt(req.query.page) || 1;

    const limit =
      parseInt(req.query.limit) || 10;

    const offset =
      (page - 1) * limit;

    const { count, rows } =
      await Appointment.findAndCountAll({
        limit,
        offset,
        order: [["createdAt", "DESC"]],
      });

    res.status(200).json({
      success: true,
      appointments: rows,
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
      message: "Server Error",
    });
  }
};
// Book Appointment (Public)
exports.book = async (req, res) => {
  try {
    const {
      fullName,
      phone,
      email,
      age,
      appointmentDate,
      service,
      symptoms,
    } = req.body;

    const appointment = await Appointment.create({
      fullName,
      phone,
      email,
      age,
      appointmentDate,
      service,
      symptoms,
      status: "pending",
    });

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      appointment,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Appointment
exports.update = async (req, res) => {
  try {
    const appointment = await Appointment.findByPk(
      req.params.id
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    await appointment.update(req.body);

    res.status(200).json({
      success: true,
      message: "Appointment updated successfully",
      appointment,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Cancel Appointment
exports.cancel = async (req, res) => {
  try {
    const appointment = await Appointment.findByPk(
      req.params.id
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    await appointment.update({
      status: "cancelled",
    });

    res.status(200).json({
      success: true,
      message: "Appointment cancelled successfully",
      appointment,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Accept Appointment
exports.accept = async (req, res) => {
  try {
    const appointment = await Appointment.findByPk(
      req.params.id
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    await appointment.update({
      status: "confirmed",
    });

    res.status(200).json({
      success: true,
      message: "Appointment confirmed successfully",
      appointment,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Reject Appointment
exports.reject = async (req, res) => {
  try {
    const appointment = await Appointment.findByPk(
      req.params.id
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    await appointment.update({
      status: "cancelled",
    });

    res.status(200).json({
      success: true,
      message: "Appointment rejected successfully",
      appointment,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
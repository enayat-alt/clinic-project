const resend = require("../config/resend");
const appointmentEmailTemplate = require("../templates/appointmentEmail");

const sendAppointmentNotification = async (appointment) => {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New Appointment #${appointment.id} - ${appointment.fullName}`,
      html: appointmentEmailTemplate(appointment),
    });

    if (error) {
      console.error("Resend Error:", error);
      return null;
    }

    return data;
  } catch (err) {
    console.error("Email Service Error:", err);
    return null;
  }
};

module.exports = {
  sendAppointmentNotification,
};
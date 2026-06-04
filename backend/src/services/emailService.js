const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendEmail = async ({ to, subject, html }) => {
  await transporter.sendMail({
    from: `"MediCare" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
};

exports.sendAppointmentConfirmation = (to, appointment) =>
  exports.sendEmail({
    to,
    subject: "Appointment Confirmed",
    html: `<h2>Your appointment on ${appointment.date} at ${appointment.time} is confirmed.</h2>`,
  });

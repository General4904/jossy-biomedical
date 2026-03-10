const applicationRoute = require("../router/applicationRoute");
const applicantModel = require("../model/applicantModel");
const nodemailer = require("nodemailer");

const registerApplicant = async (req, res) => {
  try {
    const applicant = new applicantModel(req.body);
    await applicant.save();

    res.status(201).json({
      success: true,
      message: `Application submitted`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Failed to save application`,
      error: error.message,
    });
  }
};

// Send email to admin
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASSWORD,
  },
});

const mailOptions = {
  from: process.env.ADMIN_EMAIL,
  to: process.env.ADMIN_EMAIL,
  subject: "New Training Application Submitted",
  text: `
  A new applicant has submitted an application:
  Name: ${req.body.firstname} ${req.body.lastname} ${req.body.middlename}\n
  Email: ${req.body.email}\n
  Phone: ${req.body.phone}
  `,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(`Email failed: ${error}`);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});

module.exports = { registerApplicant };

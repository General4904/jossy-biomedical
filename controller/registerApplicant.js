const applicationRoute = require("../router/applicationRoute");
const applicantModel = require("../model/applicantModel");

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

module.exports = { registerApplicant };

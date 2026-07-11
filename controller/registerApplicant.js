const applicant = require("../model/applicantModel");
const applicantModel = require("../model/applicantModel");

// Add applicants to database
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

// Update admin page when applicant registers
const getApplicants = async (req, res) => {
  try {
    const applicants = await applicant.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: applicants,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Failed to fetch applicant: ${error}`,
    });
  }
};

// Approve applicants applications
const approveApplicant = async (req, res) => {
  try {
    const { id } = req.params;

    // Find applicant
    const applicant = await Applicant.findById(id);
    if (!applicant) {
      return res.status(404).join({
        success: false,
        message: "Applicant not found",
      });
    }

    // Move applicants to intern collection
    const intern = new Intern({
      firstname: applicant.firstname,
      lastname: applicant.lastname,
      middlename: applicant.middlename,
      email: applicant.email,
      phone: applicant.phone,
    });

    await intern.save();

    // Delete from applicants
    await Applicant.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Applicant approved",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Approval failed",
    });
  }
};

// Decline applicant
const declineApplicant = async (req, res) => {
  try {
    const { id } = req.params;

    await Applicant.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Applicant Declined",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Decline failed`,
    });
  }
};

module.exports = {
  registerApplicant,
  getApplicants,
  approveApplicant,
  declineApplicant,
};

const express = require("express");
const router = express.Router();
const {
  registerApplicant,
  getApplicants,
} = require("../controller/registerApplicant");

router.post("/registerApplicant", registerApplicant);
router.get("/applicants", getApplicants);
router.post("/applicant/approve/:id", "approveApplicant");
router.delete("/applicant/:id", "declineApplicant");

module.exports = router;

const express = require("express");
const router = express.Router();
const { registerApplicant } = require("../controller/registerApplicant");

router.post("/registerApplicant", registerApplicant);

module.exports = router;

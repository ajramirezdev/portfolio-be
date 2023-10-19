const express = require("express");
const router = express.Router();
const { sendEmail, fakeRequest } = require("../controllers/email.controller");

router.post("/", sendEmail);
router.get("/", fakeRequest);

module.exports = router;

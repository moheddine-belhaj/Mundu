const express = require("express");
const router = express.Router();

const SendMail = require("../controllers/mail");
router.post("/sendmail", SendMail.ContactUs);
router.post("/setting", SendMail.Settingmail);

module.exports = router;

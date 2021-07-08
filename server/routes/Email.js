const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "@gmail",
  auth: {
    user: "mohyd1ne.afk", // here use your real email
    pass: "Meriam2121", // put your password correctly (not in this question please)
  },
});

router.post("/text-mail", (req, res) => {
  const { to, subject, text } = req.body;
  const mailData = {
    from: "mohyd1ne.afk@gmail.com",
    to: "Moh21sav@gmail.com",
    subject: "subject",
    text: "text",
    html:
      "<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>",
  };

  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      return console.log(error);
    }
    res.status(200).send({ message: "Mail send", message_id: info.messageId });
  });
});
module.exports = router;

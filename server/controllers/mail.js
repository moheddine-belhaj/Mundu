const nodemailer = require("nodemailer");

exports.ContactUs = (req, res, next) => {
  const useremail = req.body.email;
  const mail = req.body.mail;
  const phone = req.body.phone;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mohyd1ne.afk@gmail.com",
      pass: "Meriam2121",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const output = `
    <h2>Reclamation</h2>
    <h3>Contact Details</h3>
    <ul>  
      <li>Email: ${useremail}</li>
      <li>phone: ${phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${mail}</p> 
      `;
  var message = {
    from: "mohyd1ne.afk@gmail.com",

    to: mail,
    subject: "Reclamation",
    text: "hello world",
    html: output,
  };
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log("error in sending mail", err);
      return res.status(400).json({
        message: "error in sending mail",
      });
    } else {
      console.log("successfully send the  mail", info);
      return res.status(200).json({
        message: info,
      });
    }
  });
};
exports.Settingmail = (req, res, next) => {
  const useremail = req.body.email;
  const mail = req.body.mail;
  const phone = req.body.phone;
  const fullname = req.body.fullname;
  const adresse = req.body.adresse;
  const vehicle_type = req.body.vehicle_type;
  const licence = req.body.licence;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mohyd1ne.afk@gmail.com",
      pass: "Meriam2121",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const output = `
    <h2>Setting</h2>
        <ul>  
      <li>fullname: ${fullname}</li>
      <li>Email: ${useremail}</li>
      <li>phone: ${phone}</li>
      <li>adresse: ${adresse}</li>
      <li>vehicle type: ${vehicle_type}</li>
      <li>licence: ${licence}</li>
    </ul>
    <h3>Message</h3>
    <p>${mail}</p> 
      `;
  var message = {
    from: "mohyd1ne.afk@gmail.com",
    to: useremail,
    subject: "Setting",
    html: output,
  };
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log("error in sending mail", err);
      return res.status(400).json({
        message: "error in sending mail",
      });
    } else {
      console.log("successfully send the  mail", info);
      return res.status(200).json({
        message: info,
      });
    }
  });
};

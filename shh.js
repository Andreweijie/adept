const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
let config = require("../config");
const transporter = nodemailer.createTransport({
  host: "web204.vodien.com",
  port: 465,
  secure: true,
  auth: {
    user: "info@shhupholstery.com",
    pass: "$1K?={8(YMte"
  }
});

//route for confirming a temporary order
router.post("/message", (req, res) => {
  const mailOptions = {
    from: "info@shhupholstery.com",
    to: "info@shhupholstery.com",
    subject: "New Website Message",
    html: `<h1>Name: ${req.body.name}</h1><h1>Email: ${req.body.email}</h1><h1>message: ${req.body.message}</h1>`
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else res.json({ message: "sent" });
  });
});

router.post("/appointment", (req, res) => {
  const mailOptions = {
    from: "Sin Hock Heng<info@shhupholstery.com>",
    to: "info@shhupholstery.com",
    subject: `New Appointment`,
    html: `<h2>Name: ${req.body.name}</h2><h2>Email: ${req.body.email}</h2><h2>Mobile: ${req.body.mobile}</h2><h2>Vehicle Number: ${req.body.vehicleNo}</h2><h2>Vehicle Model: ${req.body.vehicleModel}</h2><h2>Service: ${req.body.service}</h2><h2>Date: ${req.body.date}</h2><h2>Time: ${req.body.time}</h2><h2>Remarks: ${req.body.remarks}</h2>`
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log("sent");
  });
  res.json({ message: "sent" });
});

router.post("/delivery", (req, res) => {
  const mailOptions = {
    from: "Sin Hock Heng<info@shhupholstery.com>",
    to: "info@shhupholstery.com",
    subject: `Delivery Enquiry`,
    html: `<h2>Name: ${req.body.name}</h2><h2>Email: ${req.body.email}</h2><h2>Mobile: ${req.body.mobile}</h2>`
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log("sent");
  });
  res.json({ message: "sent" });
});

module.exports = router;

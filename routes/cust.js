const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require("../models/User");
const Temp = require("../models/Temp");
const Job = require("../models/Job");
const multer = require("multer");
let upload = multer({ dest: "uploads/" });
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "andregoh1996@gmail.com",
    pass: "chaostar123"
  }
});

//route for submitting enquiry form
router.post("/enquiry", upload.single("jobImage"), (req, res) => {
  /*const emailTemplate = `<h2>${req.body.enquiryID}</h2><h2>${
    req.body.enquiryID
  }</h2><h2>${req.body.enquiryID}</h2z><h2>${req.body.enquiryID}</h2><h2>${
    req.body.enquiryID
  }</h2><h2>${req.body.enquiryID}</h2><h2>${req.body.enquiryID}</h2>`;
  const mailOptions = {
    from: "andregoh1996@gmail.com",
    to: req.body.email,
    subject: req.body.subject,
    html: test2,
    attachments: [
      {
        filename: "image.jpg",
        path: "uploads/a.jpg" //same cid value as in the html img src
      }
    ]
  };
*/
  const testTemp = new Temp({
    enquiryId: 5
  });

  testTemp.save(err => {
    if (err) {
      console.log(err);
    }
    console.log("success");
    res.json({ message: "success" });
  });
});

//route for getting order history
router.get("/history", (req, res) => {
  let cid = parseInt(req.query.cid);
  Job.find({ custID: cid }, (err, doc) => {
    res.json(doc);
  });
});

//get pending jobs
router.get("/pending-jobs", (req, res) => {
  Temp.find({ email: req.query.email }, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.json(docs);
    }
  });
});
module.exports = router;

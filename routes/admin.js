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

//route for confirming a temporary order
router.post("/confirm", (req, res) => {
  console.log("test");
  let enquiryId = req.body.enquiryId;
  let quote = req.body.quote;
  Temp.findOne({ enquiryId: enquiryId }, (err, doc) => {
    if (err) {
      console.log(err);
    }
    let newTask = doc;
    doc.quote = parseInt(req.body.quote);
    console.log(doc);
    const newJob = new Job(newTask.toObject());
    newJob.save(err => {
      if (err) {
        console.log(err);
      }
      console.log("success");
      res.json({ message: "success" });
    });
  });
});

//route for updating job status
router.post("/change-status", (req, res) => {
  jobId = req.body.jobId;
  newStatus = req.body.status;

  Job.findOneAndUpdate(
    { jobid: jobId },
    { jobStatus: newStatus },
    (err, doc) => {
      if (err) {
        console.log(err);
      }
      res.json({ message: "updated" });
      console.log(doc);
    }
  );
});

//get all jobs
router.get("/all-jobs", (req, res) => {
  Job.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.json(docs);
    }
  }).select(
    "-_id -id -jobName -freightTerm -orderNo -adviceNoticeNo -partID -partQty -goaheaddate -repBy -finalOutBy -engReport -previousjobid -isjobwarranty -quoteCost -quoteHour"
  );
});

module.exports = router;

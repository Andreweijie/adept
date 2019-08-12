const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require("../models/User");
const Customer = require("../models/Customer");
const Pickup = require("../models/Pickup");
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

getNextJobID = jobid => {
  let newID = jobid.split("");
  newID.shift();
  newID = parseInt(newID.join("")) + 1;
  return "J" + newID;
};
//route for confirming a temporary order
router.post("/confirm", (req, res) => {
  let enquiryId = req.body.enquiryId;
  Temp.findOne({ enquiryId: enquiryId }, (err, doc) => {
    if (err) {
      console.log(err);
    }
    Job.findOne({ id: { $ne: "id" } })
      .sort("-id")
      .exec((err, doc2) => {
        if (err) {
          console.log(err);
        }
        console.log(doc2);
        let newTask = doc.toObject();
        console.log(newTask);
        newTask.jobid = getNextJobID(doc2.toObject().jobid);
        newTask.id = doc2.toObject().id + 1;
        newTask.jobStatus = "Awaiting Pickup";
        newTask.quote = parseInt(req.body.quote);

        const newJob = new Job(newTask);
        newJob.save(err => {
          if (err) {
            console.log(err);
          }
          Temp.deleteOne({ enquiryId: enquiryId }, err => {
            if (err) {
              console.log(err);
            } else {
              res.json({ message: "success" });
            }
          });
        });
      });
  });
});

//route for updating job status
router.post("/change-status", (req, res) => {
  const textToSend = `<h3>Job ${req.body.jobId} is now: ${
    req.body.status
  }</h3>`;
  const mailOptions = {
    from: "andregoh1996@gmail.com",
    to: "andreweijie@outlook.com",
    subject: `[UPDATE] Job ${req.body.jobId}`,
    html: textToSend
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log("sent");
  });

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

//link customer ID to user account
router.post("/link-customer", (req, res) => {
  console.log(req.body.custID);
  User.findOneAndUpdate(
    { email: req.body.email },
    { custID: req.body.custID },
    { new: true },
    (err, doc) => {
      console.log(doc);
      if (err) {
        console.log(err);
      } else {
        res.json(doc);
      }
    }
  );
});
//get all jobs
router.get("/all-jobs", (req, res) => {
  Job.find(
    { $or: [{ jobStatus: "Complete" }, { jobStatus: "Return Not Repair" }] },
    (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        res.json(docs);
      }
    }
  ).select(
    "-_id -id -jobName -freightTerm -orderNo -adviceNoticeNo -partID -partQty -goaheaddate -repBy -finalOutBy -engReport -previousjobid -isjobwarranty -quoteCost -quoteHour"
  );
});
//get pickups
router.get("/pickups", (req, res) => {
  Pickup.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric"
      };
      let newDocs = docs.map(e => {
        let newObj = e.toObject();
        newObj.date = newObj.date.toLocaleString("en-US", options);
        return newObj;
      });
      res.json(newDocs);
    }
  }).select("-__v -_id -confirmed");
});
//get all customers
router.get("/customers", (req, res) => {
  Customer.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.json(docs);
    }
  }).select(
    "-_id custName company jobTitle custAddress custPostCode custCountry custTel custFax"
  );
});
module.exports = router;

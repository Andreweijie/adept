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
    pass: "Chaostar@1"
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
  const textToSend = `<!DOCTYPE html>
<html style="margin: 0; padding: 0;">

<head>
    <title>One | Email template!</title>
</head>

<body style="margin: 0; padding: 0;">
    <table class="table" cellpadding="0" cellspacing="0" style="background-color: #eee; empty-cells: hide; margin: 0 auto; padding: 0; width: 600px;">
        <tr>
            <td class="red" style="background-color: #E84C50; margin: 0 auto;">
                <h3 style="box-sizing: border-box; color: white; font-family: Helvetica, Arial, sans-serif; letter-spacing: 0.5px; line-height: 1.4; margin: 0; padding: 15px 25px; text-align: center; text-transform: uppercase;">Gulp &amp; Pug is awesome </h3></td>
        </tr>
        <tr>
            <td style="margin: 0 auto;">
                <a href="/" style="box-sizing: border-box; color: #4753be !important; font-family: Arial, Helvetica, sans-serif; line-height: 1.4; margin: 0; text-decoration: none;"><img class="full-width" src="https://media.giphy.com/media/6o9Q2WehOHWI1QGO08/giphy.gif" style="vertical-align: sub; width: 100%;"></a>
            </td>
        </tr>
    </table>
</body>

</html>`;
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

router.get("/confirm-pickup", (req, res) => {
  Pickup.findOneAndUpdate(
    { jobid: req.query.jobid },
    { confirmed: true },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        const mailOptions = {
          from: "andregoh1996@gmail.com",
          to: "andreweijie@outlook.com",
          subject: `[UPDATE] Job ${req.query.jobid}`,
          html: "<h1>Pickup Confirmed</h1>"
        };
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) console.log(err);
          else console.log("sent");
        });
        res.json(doc);
      }
    }
  );
});

module.exports = router;

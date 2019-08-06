const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require("../models/User");
const Customer = require("../models/Customer");
const Pickup = require("../models/Pickup");
const Temp = require("../models/Temp");
const Job = require("../models/Job");
const multer = require("multer");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.filename + ".jpg");
  }
});
let upload = multer({ storage: storage });
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "andregoh1996@gmail.com",
    pass: "chaostar123"
  }
});

//route for submitting enquiry form
router.post("/enquiry", upload.single("productImage"), (req, res) => {
  console.log(req.file);
  const test2 = `<h1>${req.body.brand}</h1><h2>test</h2>`;
  let itemDesc = req.body.itemDesc;
  let attach = [];
  let jobClass;
  if (req.file) {
    attach = [
      {
        filename: "image.jpg",
        path: req.file.path //same cid value as in the html img src
      }
    ];
  }
  if (req.body.urgent) {
    itemDesc = "[URGENT]" + itemDesc;
    jobClass = "Emergency";
  }
  const mailOptions = {
    from: "andregoh1996@gmail.com",
    to: "andreweijie@outlook.com",
    subject: itemDesc,
    html: test2,
    attachments: attach
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log("success!");
  });

  const newTempJob = new Temp({
    custID: req.query.custID,
    manufacturer: req.body.brand,
    modelNo: req.body.brand,
    serialNo: req.body.serialNo,
    faultDesc: req.body.faultDesc,
    itemDesc: req.body.itemDesc,
    jobClass: jobClass
  });
  newTempJob.save();
});

//route for getting order history

router.get("/history", (req, res) => {
  Job.find(
    {
      $and: [
        {
          $or: [{ jobStatus: "Complete" }, { jobStatus: "Return Not Repair" }]
        },
        { custID: parseInt(req.query.custID) }
      ]
    },
    (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        let dataToSend = [];
        docs.map(e => {
          dataToSend.push(Object.values(e.toObject()));
        });

        res.json(dataToSend);
      }
    }
  ).select(
    "custId manufacturer modelNo serialNo itemDesc jobStatus jobid -_id"
  );
});

//get pending jobs
router.get("/pending-jobs", (req, res) => {
  Temp.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      let dataToSend = [];
      docs.map(e => {
        dataToSend.push(Object.values(e.toObject()));
      });
      dataToSend = dataToSend.map(e => {
        let ele = e.pop();
        e.unshift(ele);
        return e;
      });
      res.json(dataToSend);
    }
  }).select(
    "enquiryId manufacturer modelNo serialNo faultDesc itemDesc jobClass dateOfEnquiry -_id"
  );
});

//get active jobs
router.get("/active-jobs", (req, res) => {
  Job.find(
    {
      $and: [
        {
          $and: [
            { jobStatus: { $ne: "Complete" } },
            { jobStatus: { $ne: "Return Not Repair" } }
          ]
        },
        { custID: parseInt(req.query.custID) }
      ]
    },
    (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        res.json(docs);
      }
    }
  ).select(
    "manufacturer modelNo serialNo itemDesc faultDesc jobStatus jobid quote -_id"
  );
});

//set pickup date
router.post("/set-pickup", (req, res) => {
  Customer.findOne({ id: req.body.custID }, (err, doc) => {
    const newPickup = {
      date: req.body.date,
      custID: req.body.custID,
      jobid: req.body.jobid,
      custAddress: doc.custAddress,
      email: doc.email,
      company: doc.company,
      custTel: doc.custTel
    };
    let insert = new Pickup(newPickup);
    insert.save(err => {
      if (err) {
        console.log(err);
        res.json({ error: "error" });
      } else {
        res.json({ message: "message" });
      }
    });
  });
});
module.exports = router;

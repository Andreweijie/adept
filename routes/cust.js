const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require("../models/User");
//const Customer = require("../models/Customer");
const Pickup = require("../models/Pickup");
const Temp = require("../models/Temp");
//const Job = require("../models/Job");
const multer = require("multer");
const { Job, Customer, Status, Type } = require("../sequelize");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_USER,
  MAIL_PASSWORD,
} = require("../constants");
let config = require("../config");
let storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, "enquiry.jpg");
  },
});
let upload = multer({ storage: storage });
const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  secure: true,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD,
  },
});

checkEmpty = (inputValue) => {
  if (!inputValue) {
    return "NIL";
  } else {
    return inputValue;
  }
};

//route for submitting enquiry form
router.post("/enquiry", upload.single("productImage"), (req, res) => {
  console.log(req.file);
  const test2 = `<h1>${req.body.brand}</h1><h2>test</h2>`;
  let itemDesc = req.body.itemDesc;
  let attach = [];
  let jobClass;
  let subject = `${itemDesc}-${req.body.brand}-${req.body.model}`;
  if (req.file) {
    attach = [
      {
        filename: "image.jpg",
        path: req.file.path, //same cid value as in the html img src
      },
    ];
  }
  if (req.body.urgent) {
    itemDesc = `[URGENT] ${itemDesc}-${req.body.brand}-${req.body.model}`;
    jobClass = "Emergency";
  }

  const newTempJob = new Temp({
    email: req.query.email,
    manufacturer: req.body.brand,
    modelNo: req.body.model,
    serialNo: req.body.serialNo,
    faultDesc: req.body.faultDesc,
    itemDesc: req.body.itemDesc,
    jobClass: jobClass,
    dateOfEnquiry: Date.now(),
  });
  newTempJob.save((err, doc) => {
    if (err) {
      console.log(err);
      res.json({ error: "failed" });
    }
    let textToSend = config.html.enquiry(
      req.query.email,
      doc.enquiryId,
      checkEmpty(doc.itemDesc),
      checkEmpty(doc.manufacturer),
      checkEmpty(doc.modelNo),
      checkEmpty(doc.serialNo),
      checkEmpty(doc.faultDesc)
    );
    const mailOptions = {
      from: "test@adeptelectronics.com.sg",
      to: "adepttest19@gmail.com",
      subject: subject,
      html: textToSend,
      attachments: attach,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.log(err);
      else console.log("success!");
    });
    res.json({ message: "success" });
  });
});

//route for getting order history

router.get("/history2", (req, res) => {
  Job.find(
    {
      $and: [
        {
          $or: [{ jobStatus: "Complete" }, { jobStatus: "Return Not Repair" }],
        },
        { custID: parseInt(req.query.custID) },
      ],
    },
    (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        let dataToShoot = [];
        docs.map((e) => {
          dataToShoot.push(Object.values(e.toObject()));
        });

        res.json(dataToShoot);
      }
    }
  ).select(
    "custId manufacturer modelNo serialNo itemDesc jobStatus jobid -_id"
  );
});

router.get("/history", (req, res) => {
  Job.findAll({
    where: {
      [Op.and]: [
        { custID: parseInt(req.query.custID) },
        { jobStatus: { [Op.or]: ["Complete", "Return Not Repair"] } },
      ],
    },
    attributes: [
      "custID",
      "manufacturer",
      "modelNo",
      "serialNo",
      "itemDesc",
      "jobStatus",
      "id",
    ],
  }).then((result) => {
    if (!result) {
      console.log(result);
    } else {
      res.json(result);
    }
  });
  /*Job.find(
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
        res.json(docs);
      }
    }
  ).select(
    "custId manufacturer modelNo serialNo itemDesc jobStatus jobid -_id"
  );*/
});

//get pending jobs
router.get("/pending-jobs2", (req, res) => {
  Temp.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      let dataToSend = [];
      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
      };
      docs.map((e) => {
        let newObj = e.toObject();
        newObj.dateOfEnquiry = newObj.dateOfEnquiry.toLocaleString(
          "en-US",
          options
        );
        dataToSend.push(Object.values(newObj));
      });
      let dataToSend2 = dataToSend.map((e) => {
        let ele = e.pop();
        e.unshift(ele);
        return e;
      });
      res.json(dataToSend2);
    }
  }).select(
    "enquiryId manufacturer modelNo serialNo faultDesc itemDesc jobClass dateOfEnquiry -_id"
  );
});

router.get("/pending-jobs", (req, res) => {
  Temp.find({ email: req.query.email }, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log(docs);
      res.json(docs);
    }
  }).select(
    "enquiryId manufacturer modelNo serialNo faultDesc itemDesc jobClass dateOfEnquiry -_id"
  );
});

//get active jobs
router.get("/active-jobs", (req, res) => {
  Job.findAll({
    where: {
      [Op.and]: [
        { custID: parseInt(req.query.custID) },
        {
          jobStatus: {
            [Op.and]: [
              { [Op.ne]: "Complete" },
              { [Op.ne]: "Return Not Repair" },
            ],
          },
        },
      ],
    },
    attributes: [
      "manufacturer",
      "modelNo",
      "serialNo",
      "faultDesc",
      "jobStatus",
      "id",
      "itemDesc",
      "quote",
    ],
  }).then((result) => {
    if (!result) {
      console.log(result);
    } else {
      res.json(result);
    }
  });

  /*Job.find(
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
  );*/
});

//set pickup date
router.post("/set-pickup", (req, res) => {
  Customer.findOne({ where: { id: req.body.custID } }).then((customer) => {
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
    };
    let dateObj = new Date(req.body.date);
    dateObj.setHours(dateObj.getHours() + 8);
    let dateToSend = dateObj.toLocaleString("en-US", options);
    console.log(dateToSend);
    console.log(req.body);
    let textToSend = config.html.confirmPickup(
      req.body.jobid,
      dateToSend,
      customer.name,
      customer.custAddress,
      req.body.itemDesc
    );

    const mailOptions = {
      from: "test@adeptelectronics.com.sg",
      to: "adepttest19@gmail.com",
      subject: "Confirm Pick Up",
      html: textToSend,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.log(err);
      else console.log("success!");
    });

    const newPickup = {
      date: req.body.date,
      custID: req.body.custID,
      jobid: req.body.jobid,
      custAddress: customer.custAddress,
      email: customer.email,
      company: customer.company,
      custTel: customer.custTel,
    };
    Pickup.replaceOne(
      { jobid: req.body.jobid },
      newPickup,
      { upsert: true },
      (err, doc) => {
        if (err) {
          console.log(err);
          res.json({ error: "Failed" });
        } else {
          res.json({ message: "Success" });
        }
      }
    );
  });

  /*Customer.findOne({ id: req.body.custID }, (err, doc) => {
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric"
    };
    let dateObj = new Date(req.body.date);
    dateObj.setHours(dateObj.getHours() + 8);
    let dateToSend = dateObj.toLocaleString("en-US", options);
    console.log(dateToSend);
    console.log(req.body);
    let textToSend = config.html.confirmPickup(req.body.jobid, dateToSend);

    const mailOptions = {
      from: "test@adeptelectronics.com.sg",
      to: "adepttest19@gmail.com",
      subject: "Confirm Pick Up",
      html: textToSend
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.log(err);
      else console.log("success!");
    });

    const newPickup = {
      date: req.body.date,
      custID: req.body.custID,
      jobid: req.body.jobid,
      custAddress: doc.custAddress,
      email: doc.email,
      company: doc.company,
      custTel: doc.custTel
    };
    Pickup.replaceOne(
      { jobid: req.body.jobid },
      newPickup,
      { upsert: true },
      (err, doc) => {
        if (err) {
          console.log(err);
          res.json({ error: "Failed" });
        } else {
          res.json({ message: "Success" });
        }
      }
    );
  });*/
});

router.post("/check-pickup", (req, res) => {
  Pickup.findOne({ jobid: req.body.jobid }, (err, doc) => {
    if (err) {
      console.log(err);
    } else if (!doc) {
      res.json({ pickUpSet: false });
    } else {
      res.json({ pickUpSet: true });
    }
  });
});
module.exports = router;

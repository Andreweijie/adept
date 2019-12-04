const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require("../models/User");
const Customer = require("../models/Customer");
const Pickup = require("../models/Pickup");
const Temp = require("../models/Temp");
const Job = require("../models/Job");
const multer = require("multer");
let config = require("../config");
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
  Temp.findOne({ enquiryId: enquiryId }, (err, temp) => {
    if (err) {
      console.log(err);
      res.json({ error: "job not found" });
    }
    User.findOne({ email: temp.email }, (err, user) => {
      if (err) {
        console.log(err);
      }
      if (!user.custID || user.custID == 0) {
        const newCustData = {
          custName: user.name,
          company: user.company,
          jobTitle: user.jobTitle,
          custAddress: user.custAddress,
          custPostCode: user.custPostCode,
          custTel: user.custTel,
          custFax: user.custFax,
          email: user.email
        };
        const newCust = new Customer(newCustData);
        newCust.save((err, customer) => {
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
              let newTask = temp.toObject();
              console.log(newTask);
              newTask.jobid = getNextJobID(doc2.toObject().jobid);
              newTask.id = doc2.toObject().id + 1;
              newTask.jobStatus = "Awaiting Pickup";
              newTask.quote = parseInt(req.body.quote);
              newTask.custID = customer.id;

              const newJob = new Job(newTask);
              newJob.save(err => {
                if (err) {
                  console.log(err);
                }

                let textToSend = config.html.confirmJob(
                  newTask.jobid,
                  newTask.itemDesc,
                  newTask.manufacturer,
                  newTask.modelNo,
                  newTask.serialNo,
                  newTask.faultDesc,
                  req.body.quote
                );

                const mailOptions = {
                  from: "andregoh1996@gmail.com",
                  to: "adepttest19@gmail.com",
                  subject: `[UPDATE] Job Confirmed`,
                  html: textToSend
                };
                transporter.sendMail(mailOptions, (err, info) => {
                  if (err) console.log(err);
                  else console.log("sent");
                });

                //remove temporary job from database
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
      } else {
        Job.findOne({ id: { $ne: "id" } })
          .sort("-id")
          .exec((err, doc2) => {
            if (err) {
              console.log(err);
            }
            console.log(doc2);
            let newTask = temp.toObject();
            console.log(newTask);
            newTask.jobid = getNextJobID(doc2.toObject().jobid);
            newTask.id = doc2.toObject().id + 1;
            newTask.jobStatus = "Awaiting Pickup";
            newTask.quote = parseInt(req.body.quote);
            newTask.custID = user.custID;

            const newJob = new Job(newTask);
            newJob.save(err => {
              if (err) {
                console.log(err);
              }

              let textToSend = config.html.confirmJob(
                newTask.jobid,
                newTask.itemDesc,
                newTask.manufacturer,
                newTask.modelNo,
                newTask.serialNo,
                newTask.faultDesc,
                req.body.quote
              );

              const mailOptions = {
                from: "andregoh1996@gmail.com",
                to: "adepttest19@gmail.com",
                subject: `[UPDATE] Job Confirmed`,
                html: textToSend
              };
              transporter.sendMail(mailOptions, (err, info) => {
                if (err) console.log(err);
                else console.log("sent");
              });

              //remove temporary job from database
              Temp.deleteOne({ enquiryId: enquiryId }, err => {
                if (err) {
                  console.log(err);
                } else {
                  res.json({ message: "success" });
                }
              });
            });
          });
      }
    });
  });
});

//route for updating job status
router.post("/change-status", (req, res) => {
  const textToSend = config.html.changeStatus(req.body.jobId, req.body.status);
  const mailOptions = {
    from: "andregoh1996@gmail.com",
    to: "adepttest19@gmail.com",
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
    "-_id -id -jobName -freightTerm -orderNo -adviceNoticeNo -partID -partQty -goaheaddate -repBy -finalOutBy -engReport -previousjobid -isjobwarranty -quoteCost -quoteHour -equipID -quotationComment"
  );
});
//get pickups
router.get("/pickups", (req, res) => {
  Pickup.find({ confirmed: true }, (err, docs) => {
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
        let textToSend = config.html.pickupConfirmed(req.query.jobid, doc.date);
        const mailOptions = {
          from: "andregoh1996@gmail.com",
          to: "adepttest19@gmail.com",
          subject: `[UPDATE] Job ${req.query.jobid}`,
          html: textToSend
        };
        transporter.sendMail(mailOptions, (err, info) => {
          if (err) console.log(err);
          else console.log("sent");
        });
        res.redirect("http://admin.adeptelectronics.com.sg");
      }
    }
  );
});

router.delete("/reject-pickup", (req, res) => {
  Pickup.findOneAndDelete({ jobid: req.query.jobid }, (err, doc) => {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      let textToSend = config.html.rejectPickup();
      const mailOptions = {
        from: "andregoh1996@gmail.com",
        to: "adepttest19@gmail.com",
        subject: `[UPDATE] Job ${req.query.jobid}`,
        html: textToSend
      };
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err);
        else console.log("sent");
      });
      res.redirect("http://admin.adeptelectronics.com.sg");
    }
  });
});

module.exports = router;

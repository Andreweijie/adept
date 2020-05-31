const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require("../models/User");
//const Customer = require("../models/Customer");
const Pickup = require("../models/Pickup");
const Temp = require("../models/Temp");
//const Job = require("../models/Job");
const multer = require("multer");
let config = require("../config");
let upload = multer({ dest: "uploads/" });
const { Job, Customer, Status, Type } = require("../sequelize");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_USER,
  MAIL_PASSWORD,
} = require("../constants");
const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  secure: true,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD,
  },
});
getNextJobID = (jobid) => {
  let newID = jobid.split("");
  newID.shift();
  newID = parseInt(newID.join("")) + 1;
  return "J" + newID;
};
//route for confirming a temporary order

router.get("/tester", (req, res) => {
  Customer.findOne({ order: [["id", "DESC"]] }).then((job) => {
    res.json(job);
  });
});

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
          jobtitle: user.jobTitle,
          custAddress: user.custAddress,
          custPostCode: user.custPostCode,
          custTel: user.custTel,
          custFax: user.custFax,
          email: user.email,
        };
        Customer.create(newCustData).then((customer) => {
          Job.findOne({ order: [["id", "DESC"]] }).then((job) => {
            let newTask = temp.toObject();
            console.log(newTask);
            newTask.jobStatus = "Awaiting Pickup";
            newTask.quote = parseInt(req.body.quote);
            newTask.custID = customer.id;

            Job.create(newTask).then((job2) => {
              let textToSend = config.html.confirmJob(
                job2.id,
                newTask.itemDesc,
                newTask.manufacturer,
                newTask.modelNo,
                newTask.serialNo,
                newTask.faultDesc,
                req.body.quote
              );

              const mailOptions = {
                from: "test@adeptelectronics.com.sg",
                to: user.email,
                subject: `[UPDATE] Job Confirmed`,
                html: textToSend,
              };
              transporter.sendMail(mailOptions, (err, info) => {
                if (err) console.log(err);
                else console.log("sent");
              });

              //remove temporary job from database
              Temp.deleteOne({ enquiryId: enquiryId }, (err) => {
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
        Customer.findOne({ where: { id: user.custID } }).then((customer1) => {
          Job.findOne({ order: [["id", "DESC"]] }).then((job) => {
            let newTask = temp.toObject();
            console.log(newTask);
            newTask.jobStatus = "Awaiting Pickup";
            newTask.quote = parseInt(req.body.quote);
            newTask.custID = customer1.id;

            Job.create(newTask).then((job2) => {
              let textToSend = config.html.confirmJob(
                job2.id,
                newTask.itemDesc,
                newTask.manufacturer,
                newTask.modelNo,
                newTask.serialNo,
                newTask.faultDesc,
                req.body.quote
              );

              const mailOptions = {
                from: "test@adeptelectronics.com.sg",
                to: user.email,
                subject: `[UPDATE] Job Confirmed`,
                html: textToSend,
              };
              transporter.sendMail(mailOptions, (err, info) => {
                if (err) console.log(err);
                else console.log("sent");
              });

              //remove temporary job from database
              Temp.deleteOne({ enquiryId: enquiryId }, (err) => {
                if (err) {
                  console.log(err);
                } else {
                  res.json({ message: "success" });
                }
              });
            });
          });
        });
      }
    });
  });
  /*Temp.findOne({ enquiryId: enquiryId }, (err, temp) => {
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
          email: user.email[]
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
                  from: "test@adeptelectronics.com.sg",
                  to: user.email,
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

            Customer.findOne({ id: user.custID }, (err, doc) => {
              if (err) {
                console.log(err);
              }
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
                  from: "test@adeptelectronics.com.sg",
                  to: doc.email,
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
      }
    });
  });*/
});

//route for updating job status
router.post("/change-status", (req, res) => {
  const textToSend = config.html.changeStatus(req.body.jobId, req.body.status);

  jobId = req.body.jobId;
  newStatus = req.body.status;

  Job.update({ jobStatus: newStatus }, { where: { id: jobId } }).then(() => {
    Pickup.findOneAndUpdate(
      { jobid: jobId },
      { picked: true },
      (err, pickup) => {
        Job.findOne({ where: { jobid: jobId } }).then((job) => {
          Customer.findOne({ where: { id: job.custID } }).then((customer) => {
            const mailOptions = {
              from: "test@adeptelectronics.com.sg",
              to: customer.email,
              subject: `[UPDATE] Job ${req.body.jobId}`,
              html: textToSend,
            };
            transporter.sendMail(mailOptions, (err, info) => {
              if (err) console.log(err);
              else console.log("sent");
            });
            res.json({ message: "updated" });
          });
        });
      }
    );
  });

  /*Job.findOneAndUpdate(
    { jobid: jobId },
    { jobStatus: newStatus },
    (err, doc) => {
      if (err) {
        console.log(err);
      }
      Pickup.findOneAndUpdate(
        { jobid: jobId },
        { picked: true },
        (err, doc2) => {
          Customer.findOne({ id: doc.custID }, (err, doc1) => {
            const mailOptions = {
              from: "test@adeptelectronics.com.sg",
              to: doc1.email,
              subject: `[UPDATE] Job ${req.body.jobId}`,
              html: textToSend
            };
            transporter.sendMail(mailOptions, (err, info) => {
              if (err) console.log(err);
              else console.log("sent");
            });
            res.json({ message: "updated" });
            console.log(doc);
          });
        }
      );
    }
  );*/
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
  /* Job.findAll(
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
  );*/

  Job.findAll({
    attributes: [
      "id",
      "custID",
      "manufacturer",
      "itemDesc",
      "modelNo",
      "serialNo",
      "faultDesc",
      "jobType",
      "jobStatus",
      "quote",
    ],
  }).then(function (users) {
    console.log(users);
    res.json(users);
  });
});
//get pickups
router.get("/pickups", (req, res) => {
  Pickup.find({ confirmed: true, picked: false }, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
      };
      let newDocs = docs.map((e) => {
        let newObj = e.toObject();
        let dateObj = new Date(newObj.date);
        dateObj.setHours(dateObj.getHours() + 8);
        newObj.date = dateObj.toLocaleString("en-US", options);
        return newObj;
      });
      res.json(newDocs);
    }
  })
    .select("-__v -_id -confirmed -picked")
    .sort("date");
});
//get all customers
router.get("/customers", (req, res) => {
  /*Customer.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.json(docs);
    }
  }).select(
    "-_id custName company jobTitle custAddress custPostCode custCountry custTel custFax"
  );*/
  Customer.findAll({
    attributes: [
      "id",
      "custName",
      "company",
      "jobTitle",
      "custAddress",
      "custPostCode",
      "custCountry",
      "custTel",
      "custFax",
    ],
  }).then(function (users) {
    console.log(users);
    res.json(users);
  });
});

router.get("/enquiries", (req, res) => {
  Temp.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
      };
      let newDocs = docs.map((e) => {
        let newObj = e.toObject();
        let dateObj = new Date(newObj.dateOfEnquiry);
        dateObj.setHours(dateObj.getHours() + 8);
        newObj.dateOfEnquiry = dateObj.toLocaleString("en-US", options);
        return newObj;
      });
      res.json(newDocs);
    }
  }).select(
    "enquiryId manufacturer modelNo serialNo faultDesc itemDesc jobClass dateOfEnquiry -_id"
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
        let options = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
        };
        let dateObj = new Date(doc.date);
        dateObj.setHours(dateObj.getHours() + 8);
        dateObj = dateObj.toLocaleString("en-US", options);
        let textToSend = config.html.pickupConfirmed(req.query.jobid, dateObj);
        const mailOptions = {
          from: "test@adeptelectronics.com.sg",
          to: doc.email,
          subject: `[UPDATE] Job ${req.query.jobid}`,
          html: textToSend,
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
        from: "test@adeptelectronics.com.sg",
        to: doc.email,
        subject: `[UPDATE] Job ${req.query.jobid}`,
        html: textToSend,
      };
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err);
        else console.log("sent");
      });
      res.redirect("http://admin.adeptelectronics.com.sg");
    }
  });
});

router.delete("/cancel-pending", (req, res) => {
  Temp.findOneAndDelete({ enquiryId: req.query.enquiryId }, (err, doc) => {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      res.json({ success: true });
    }
  });
});

module.exports = router;

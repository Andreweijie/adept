const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
// Create Schema
const JobSchema = new Schema({
  custID: {
    type: Number
  },
  manufacturer: {
    type: String,
    default: ""
  },
  modelNo: {
    type: String,
    default: ""
  },
  serialNo: {
    type: String,
    default: ""
  },
  faultDesc: {
    type: String,
    default: ""
  },
  jobStatus: {
    type: String,
    default: ""
  },
  jobid: {
    type: String,
    default: ""
  },
  id: {
    type: String,
    default: ""
  },
  jobName: {
    type: String,
    default: ""
  },
  equipID: {
    type: Number,
    default: 0
  },
  quotationComment: {
    type: String,
    default: ""
  },
  entryDateTime: {
    type: Date,
    default: Date.now()
  },
  jobClass: {
    type: String,
    default: "Standard"
  },
  jobType: {
    type: String,
    default: ""
  },
  freightTerm: {
    type: String,
    default: ""
  },
  orderNo: {
    type: String,
    default: ""
  },
  adviceNoticeNo: {
    type: String,
    default: ""
  },
  itemDesc: {
    type: String,
    default: ""
  },
  closedDate: {
    type: Date,
    default: Date.now()
  },
  partID: {
    type: String,
    default: ""
  },
  partQty: {
    type: String,
    default: ""
  },
  quote: {
    type: Number,
    default: 0
  },
  jobFinishedBy: {
    type: String,
    default: ""
  },
  goaheaddate: {
    type: String,
    default: ""
  },
  quoteBy: {
    type: String,
    default: ""
  },
  repBy: {
    type: String,
    default: ""
  },
  finalOutBy: {
    type: String,
    default: ""
  },
  engReport: {
    type: String,
    default: ""
  },
  previousjobid: {
    type: Number,
    default: 0
  },
  isjobwarranty: {
    type: Number,
    default: 0
  },
  jobLocation: {
    type: String,
    default: ""
  },
  quoteProfit: {
    type: Number,
    default: 0
  },
  quoteCost: {
    type: Number,
    default: 0
  },
  quoteHour: {
    type: Number,
    default: 0
  },
  salesperson: {
    type: String,
    default: ""
  },
  pickUpDate: {
    type: Date
  }
});

module.exports = Job = mongoose.model("jobs", JobSchema);

const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  custID: {
    type: Number,
    required: true
  },
  jobid: {
    type: String,
    required: true
  },
  custAddress: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  custTel: {
    type: Number,
    required: true
  }
});
module.exports = Pickup = mongoose.model("pickups", UserSchema);

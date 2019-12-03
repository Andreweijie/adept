const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  custID: {
    type: Number
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  custAddress: {
    type: String,
    required: true
  },
  custPostCode: {
    type: Number
  },
  custTel: {
    type: Number
  },
  custFax: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  verToken: {
    type: String
  },
  resetToken: {
    type: String
  },
  isVerified: {
    type: Boolean
  }
});
module.exports = User = mongoose.model("users", UserSchema);

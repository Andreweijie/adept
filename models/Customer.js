const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  custName: {
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
    type: Number,
    required: true
  },
  custCountry: {
    type: String
  },
  custTel: {
    type: Number,
    required: true
  },
  custFax: {
    type: Number
  },
  custLanguage: {
    type: String
  },
  custPayment: {
    type: String
  },
  email: {
    type: String
  }
});
module.exports = Customer = mongoose.model("customers", UserSchema);

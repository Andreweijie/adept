const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  autoIncrement = require("mongoose-auto-increment");

let connection = mongoose.createConnection(
  "mongodb+srv://andreweijie:1234@users-aeexa.mongodb.net/test?retryWrites=true"
);

autoIncrement.initialize(connection);
// Create Schema
const CustSchema = new Schema({
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
    type: String
  },
  custCountry: {
    type: String,
    default: "Singapore"
  },
  custTel: {
    type: String
  },
  custFax: {
    type: String
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

CustSchema.plugin(autoIncrement.plugin, { model: "Cust", field: "id" });
module.exports = Customer = mongoose.model("customers", CustSchema);

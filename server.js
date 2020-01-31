const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth");
const custRoutes = require("./routes/cust");
const adminRoutes = require("./routes/admin");

const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use("/backend/api", authRoutes);
app.use("/backend/cust", custRoutes);
app.use("/backend/admin", adminRoutes);

app.get("/test", (req, res) => {
  //res.sendFile(path.join(__dirname + "/views/html/account-confirmed.html"));
  res.redirect("https://google.com");
});
mongoose
  .connect(
    "mongodb+srv://adeptweb:Bestfriend1@cluster0-uoq1h.gcp.mongodb.net/adept?retryWrites=true&w=majority",
    { useNewUrlParser: true, useFindAndModify: false }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.listen(port, "localhost");

/*.connect(
    "mongodb+srv://adeptweb:Bestfriend1@cluster0-uoq1h.gcp.mongodb.net/adept?retryWrites=true&w=majority",
    { useNewUrlParser: true, useFindAndModify: false }
  )*/

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
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
app.get("/app2/fuck", (req, res) => {
  res.send("WORKS");
});
app.use("/api", authRoutes);
app.use("/cust", custRoutes);
app.use("/admin", adminRoutes);

mongoose
  .connect(
    "mongodb+srv://andreweijie:1234@users-aeexa.mongodb.net/test?retryWrites=true",
    { useNewUrlParser: true, useFindAndModify: false }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.listen(port, "localhost");

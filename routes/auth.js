const express = require("express"),
  router = express.Router(),
  bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken"),
  validateRegisterInput = require("../validation/register"),
  validateLoginInput = require("../validation/login"),
  validatePasswordInput = require("../validation/changePassword"),
  validateAdminInput = require("../validation/adminAcc"),
  nodemailer = require("nodemailer"),
  User = require("../models/User"),
  Cust = require("../models/Customer"),
  { totp } = require("node-otp");

let config = require("../config");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "andregoh1996@gmail.com",
    pass: "Chaostar@1"
  }
});

//Register Route
router.post("/register", (req, res) => {
  //validate userinput and get errors if any
  const { errors, isValid } = validateRegisterInput(req.body);

  //if invalid, return with error 400 and error messages
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" }); //check DB for existing email and return error message if exists
    } else {
      //send verification email
      const payload = {
        email: req.body.email
      };

      let verificationToken = jwt.sign(payload, "secret", { expiresIn: 30000 });
      const textToSend = config.html.confirmAccount(
        verificationToken,
        req.body.email
      );
      const mailOptions = {
        from: "andregoh1996@gmail.com",
        to: req.body.email,
        subject: "Verify Your Account",
        html: textToSend
      };
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err);
        else console.log("sent");
      });

      const newCust = new Cust({
        custName: req.body.name,
        email: req.body.email,
        company: req.body.company,
        jobTitle: req.body.jobTitle,
        custAddress: req.body.address,
        custPostCode: req.body.mobileNo,
        custTel: req.body.officeNo,
        custFax: req.body.faxNo
      });

      const newUser = new User({
        custID: 200,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        verToken: verificationToken,
        isVerified: false
      });
      newCust.save();
      //hash password before saving user in DB
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;

          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post("/admin-register", (req, res) => {
  const { errors, isValid } = validateAdminInput(req.body);

  //if invalid, return with error 400 and error messages
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Admin.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" }); //check DB for existing email and return error message if exists
    } else {
      const newUser = new Admin(req.body);
      newUser.save();
      //hash password before saving user in DB
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;

          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  //validate userinput and get errors if any
  const { errors, isValid } = validateLoginInput(req.body);

  //if invalid, return with error 400 and error messages
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const userInput = {
    email: req.body.email,
    password: req.body.password
  };

  if (req.body.accountType == "admin") {
    Admin.findOne({ email: userInput.email }).then(user => {
      //check if user exists
      if (!user) {
        return res.status(404).json({
          errors: {
            email: "E-mail not found."
          }
        });
      }

      //Check password
      bcrypt.compare(userInput.password, user.password).then(isMatch => {
        if (isMatch) {
          //create user information object
          const payload = {
            user: {
              name: user.name,
              role: user.role
            }
          };
          //create and sign JSON Web Token
          jwt.sign(payload, "secret", { expiresIn: 300000 }, (err, token) => {
            res.json({ success: true, adeptadmin_token: token });
          });
        } else {
          return res
            .status(400)
            .json({ passwordIncorrect: "Password is incorrect" });
        }
      });
    });
  } else {
    User.findOne({ email: userInput.email }).then(user => {
      //check if user exists
      if (!user) {
        return res.status(404).json({
          errors: {
            message: "e-mail not found."
          }
        });
      } else if (!user.isVerified) {
        return res.status(404).json({
          errors: {
            message: "account not verified"
          }
        });
      }

      //Check password
      bcrypt.compare(userInput.password, user.password).then(isMatch => {
        if (isMatch) {
          //create user information object
          console.log(user.custId);
          const payload = {
            user: {
              name: user.name,
              email: user.email,
              custID: user.custID
            }
          };
          //create and sign JSON Web Token
          jwt.sign(payload, "secret", { expiresIn: 300000 }, (err, token) => {
            res.json({ success: true, adeptcust_token: token });
          });
        } else {
          return res
            .status(400)
            .json({ errors: { password: "password is incorrect" } });
        }
      });
    });
  }
});

router.get("/verification", (req, res) => {
  console.log(req.query.email);
  User.findOne({ email: req.query.email }).then(user => {
    console.log(user);
    if (user.verToken == req.query.token) {
      user.isVerified = true;
      user.save().then(user => res.send("verified!"));
    }
  });
});

router.get("/forget", (req, res) => {
  const email = req.query.email;

  let forgetOtp = totp({ secret: email, time: Date.now() });

  const textToSend = config.html.resetPassword(forgetOtp);
  const mailOptions = {
    from: "andregoh1996@gmail.com",
    to: email,
    subject: "Change your account password",
    html: textToSend
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log("sent");
  });

  User.findOne({ email }).then(user => {
    user.resetToken = forgetOtp;
    user.save().then(res.json({ success: "success!", otp: forgetOtp }));
  });
});

router.post("/change-password", (req, res) => {
  //validate userinput and get errors if any
  const { errors, isValid } = validatePasswordInput(req.body);

  //if invalid, return with error 400 and error messages
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (!user) {
      return res.status(400).json({ email: "User does not exists!" }); //check DB for existing email and return error message if exists
    } else {
      if (user.resetToken == req.body.otp || req.body.custID) {
        //hash password before saving user in DB
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;

            user.password = hash;
            user
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    }
  });
});
module.exports = router;

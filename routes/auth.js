const express = require("express"),
  router = express.Router(),
  bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken"),
  validateRegisterInput = require("../validation/register"),
  validateLoginInput = require("../validation/login"),
  validatePasswordInput = require("../validation/changePassword"),
  validateAdminInput = require("../validation/adminAcc");
(nodemailer = require("nodemailer")),
  (User = require("../models/User")),
  (Cust = require("../models/Customer")),
  ({ totp } = require("node-otp"));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "adepttest19@gmail.com",
    pass: "Adepttest@1"
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
      const textToSend = `<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title>MJTEST</title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
          .ReadMsgBody { width:100%; }
          .ExternalClass { width:100%; }
          .ExternalClass * { line-height:100%; }
          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
          p { display:block;margin:13px 0; }</style><!--[if !mso]><!--><style type="text/css">@media only screen and (max-width:480px) {
            @-ms-viewport { width:320px; }
            @viewport { width:320px; }
          }</style><!--<![endif]--><!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]--><!--[if lte mso 11]>
        <style type="text/css">
          .outlook-group-fix { width:100% !important; }
        </style>
        <![endif]--><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css"><style type="text/css">@import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);</style><!--<![endif]--><style type="text/css">@media only screen and (min-width:480px) {
        .mj-column-px-300 { width:300px !important; max-width: 300px; }
.mj-column-px-600 { width:600px !important; max-width: 600px; }
      }</style><style type="text/css">@media only screen and (max-width:480px) {
      table.full-width-mobile { width: 100% !important; }
      td.full-width-mobile { width: auto !important; }
    }</style></head><body><div><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#f1f3f7;background-color:#f1f3f7;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;padding-right:10px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:180px;"><img alt="adept_logo" height="auto" src="https://i.imgur.com/w5Fv9z2.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="180"></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-px-600 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Dear Customer,</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Thank you for registering with Adept Electronics.</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Please click on the button below to confirm and activate your account.</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#FFFFFF;background-color:#FFFFFF;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;"><tr><td align="center" bgcolor="#4a14ff" role="presentation" style="border:none;border-radius:3px;cursor:auto;padding:10px 25px;background:#4a14ff;" valign="middle"><a href="https://andreweijie.tech/backend/api/verification?token=${verificationToken}&email=${req.body.email}" style="background:#4a14ff;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:24px;font-weight:normal;line-height:120%;Margin:0;text-decoration:none;text-transform:none;" target="_blank">CONFIRM</a></td></tr></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#f1f3f7;background-color:#f1f3f7;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;">Adept Electronics</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;">Block 1 Kaki Bukit Avenue 3 #10-06 Singapore 416087</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>`;
      const mailOptions = {
        from: "adepttest19@gmail.com",
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

  const textToSend = `<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title>MJTEST</title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
          .ReadMsgBody { width:100%; }
          .ExternalClass { width:100%; }
          .ExternalClass * { line-height:100%; }
          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
          p { display:block;margin:13px 0; }</style><!--[if !mso]><!--><style type="text/css">@media only screen and (max-width:480px) {
            @-ms-viewport { width:320px; }
            @viewport { width:320px; }
          }</style><!--<![endif]--><!--[if mso]>
        <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml>
        <![endif]--><!--[if lte mso 11]>
        <style type="text/css">
          .outlook-group-fix { width:100% !important; }
        </style>
        <![endif]--><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css"><style type="text/css">@import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);</style><!--<![endif]--><style type="text/css">@media only screen and (min-width:480px) {
        .mj-column-px-300 { width:300px !important; max-width: 300px; }
.mj-column-px-600 { width:600px !important; max-width: 600px; }
      }</style><style type="text/css">@media only screen and (max-width:480px) {
      table.full-width-mobile { width: 100% !important; }
      td.full-width-mobile { width: auto !important; }
    }</style></head><body><div><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#f1f3f7;background-color:#f1f3f7;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:180px;"><img alt="adept_logo" height="auto" src="https://i.imgur.com/w5Fv9z2.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="180"></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-px-600 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:left;color:#000000;">Dear Customer,</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">To reset your account's password please provide the OTP below on the change password page.</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Click on the link below the OTP to change your password.</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#4a14ff;background-color:#4a14ff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#4a14ff;background-color:#4a14ff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:36px;font-weight:bold;line-height:1;text-align:center;color:#f1f3f7;">${forgetOtp}</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#FFFFFF;background-color:#FFFFFF;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;"><tr><td align="center" bgcolor="#4a14ff" role="presentation" style="border:none;border-radius:3px;cursor:auto;padding:10px 25px;background:#4a14ff;" valign="middle"><a href="https://app.andreweijie.tech/change-password" style="background:#4a14ff;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:24px;font-weight:normal;line-height:120%;Margin:0;text-decoration:none;text-transform:none;" target="_blank">RESET</a></td></tr></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#f1f3f7;background-color:#f1f3f7;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;">Adept Electronics</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;">Block 1 Kaki Bukit Avenue 3 #10-06 Singapore 416087</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>`;
  const mailOptions = {
    from: "adepttest19@gmail.com",
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

module.exports = {
  html: {
    confirmAccount: (verificationToken, email) => {
      return `<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title>MJTEST</title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
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
    }</style></head><body><div><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#f1f3f7;background-color:#f1f3f7;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;padding-right:10px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:180px;"><img alt="adept_logo" height="auto" src="https://i.imgur.com/w5Fv9z2.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="180"></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-px-600 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Dear Customer,</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Thank you for registering with Adept Electronics.</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Please click on the button below to confirm and activate your account.</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#FFFFFF;background-color:#FFFFFF;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;"><tr><td align="center" bgcolor="#4a14ff" role="presentation" style="border:none;border-radius:3px;cursor:auto;padding:10px 25px;background:#4a14ff;" valign="middle"><a href="https://andreweijie.tech/backend/api/verification?token=${verificationToken}&email=${email}" style="background:#4a14ff;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:24px;font-weight:normal;line-height:120%;Margin:0;text-decoration:none;text-transform:none;" target="_blank">CONFIRM</a></td></tr></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#f1f3f7;background-color:#f1f3f7;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;">Adept Electronics</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;">Block 1 Kaki Bukit Avenue 3 #10-06 Singapore 416087</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>`;
    },
    resetPassword: forgetOtp => {
      return `<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title>MJTEST</title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
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
    }</style></head><body><div><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#f1f3f7;background-color:#f1f3f7;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:180px;"><img alt="adept_logo" height="auto" src="https://i.imgur.com/w5Fv9z2.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="180"></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-px-600 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:left;color:#000000;">Dear Customer,</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">To reset your account's password please provide the OTP below on the change password page.</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Click on the link below the OTP to change your password.</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#4a14ff;background-color:#4a14ff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#4a14ff;background-color:#4a14ff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:36px;font-weight:bold;line-height:1;text-align:center;color:#f1f3f7;">${forgetOtp}</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#FFFFFF;background-color:#FFFFFF;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;"><tr><td align="center" bgcolor="#4a14ff" role="presentation" style="border:none;border-radius:3px;cursor:auto;padding:10px 25px;background:#4a14ff;" valign="middle"><a href="https://app.adeptelectronics.com.sg/#/change-password" style="background:#4a14ff;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:24px;font-weight:normal;line-height:120%;Margin:0;text-decoration:none;text-transform:none;" target="_blank">RESET</a></td></tr></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#f1f3f7;background-color:#f1f3f7;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;">Adept Electronics</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;">Block 1 Kaki Bukit Avenue 3 #10-06 Singapore 416087</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>`;
    },
    confirmJob: (
      jobid,
      itemDesc,
      manufacturer,
      modelNo,
      serialNo,
      faultDesc,
      quote
    ) => {
      return `<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title>MJTEST</title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
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
    }</style></head><body><div><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#f1f3f7;background-color:#f1f3f7;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:180px;"><img alt="adept_logo" height="auto" src="https://i.imgur.com/w5Fv9z2.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="180"></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-px-600 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:left;color:#000000;">Dear Customer,</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">The following job has been confirmed:</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="left" style="font-size:0px;padding:10px 25px;padding-left:64px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Job ID</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;padding-left:64px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Item Description</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;padding-left:64px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Manufacturer</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;padding-left:64px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Model Number</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;padding-left:64px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Serial Number</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;padding-left:64px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Fault Description</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;padding-left:64px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Quotation</div></td></tr></table></div><!--[if mso | IE]></td><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="left" style="font-size:0px;padding:10px 25px;padding-left:64px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:left;color:#000000;">${jobid}</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;padding-left:64px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:left;color:#000000;">${itemDesc}</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;padding-left:64px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:left;color:#000000;">${manufacturer}</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;padding-left:64px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:left;color:#000000;">${modelNo}</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;padding-left:64px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:left;color:#000000;">${serialNo}</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;padding-left:64px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:left;color:#000000;">${faultDesc}</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;padding-left:64px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:left;color:#000000;">$${quote}</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#f1f3f7;background-color:#f1f3f7;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;">Adept Electronics</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;">Block 1 Kaki Bukit Avenue 3 #10-06 Singapore 416087</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>`;
    },
    enquiry: (
      email,
      enquiryId,
      itemDesc,
      manufacturer,
      modelNo,
      serialNo,
      faultDesc
    ) => {
      return `<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title>MJTEST</title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
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
    }</style></head><body><div><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#f1f3f7;background-color:#f1f3f7;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:180px;"><img alt="adept_logo" height="auto" src="https://i.imgur.com/w5Fv9z2.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="180"></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-px-600 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:left;color:#000000;">NEW ENQUIRY:</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:left;color:#000000;">By : ${email}</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:center;color:#000000;">Enquiry ID</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:center;color:#000000;">Item Description</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:center;color:#000000;">Manufacturer</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:center;color:#000000;">Model Number</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:center;color:#000000;">Serial Number</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:center;color:#000000;">Fault Description</div></td></tr></table></div><!--[if mso | IE]></td><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:center;color:#000000;">${enquiryId}</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:center;color:#000000;">${itemDesc}</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:center;color:#000000;">${manufacturer}</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:center;color:#000000;">${modelNo}</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:center;color:#000000;">${serialNo}</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:center;color:#000000;">${faultDesc}</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#f1f3f7;background-color:#f1f3f7;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;">Adept Electronics</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;">Block 1 Kaki Bukit Avenue 3 #10-06 Singapore 416087</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>`;
    },
    changeStatus: (jobId, status) => {
      return `<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title>MJTEST</title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
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
    }</style></head><body><div><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#f1f3f7;background-color:#f1f3f7;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:180px;"><img alt="adept_logo" height="auto" src="https://i.imgur.com/w5Fv9z2.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="180"></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-px-600 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Dear Customer,</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:center;color:#000000;">Job: ${jobId} has been updated.</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:center;color:#000000;">CURRENT STATUS:</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#4a14ff;background-color:#4a14ff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#4a14ff;background-color:#4a14ff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:36px;font-weight:bold;line-height:1;text-align:center;color:#FFFFFF;">${status}</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#f1f3f7;background-color:#f1f3f7;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;">Adept Electronics</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;">Block 1 Kaki Bukit Avenue 3 #10-06 Singapore 416087</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>`;
    },
    pickupConfirmed: (jobid, date) => {
      return `<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title>MJTEST</title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
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
    }</style></head><body><div><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#f1f3f7;background-color:#f1f3f7;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;padding-right:10px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:180px;"><img alt="adept_logo" height="auto" src="https://i.imgur.com/w5Fv9z2.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="180"></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-px-600 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:left;color:#000000;">Dear Customer,</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Pickup has been confirmed for:</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:center;color:#000000;">JOB ID</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:center;color:#000000;">DATE</div></td></tr></table></div><!--[if mso | IE]></td><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:center;color:#000000;">${jobid}</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:center;color:#000000;">${date}</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#f1f3f7;background-color:#f1f3f7;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;">Adept Electronics</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;">Block 1 Kaki Bukit Avenue 3 #10-06 Singapore 416087</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>`;
    },
    rejectPickup: () => {
      return `<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title>MJTEST</title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
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
    }</style></head><body><div><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#f1f3f7;background-color:#f1f3f7;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;padding-right:10px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:180px;"><img alt="adept_logo" height="auto" src="https://i.imgur.com/w5Fv9z2.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="180"></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-px-600 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Dear Customer,</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Your request for pickup for Job 19219219 has been rejected.</div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;">Please choose another date in the account dashboard.</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#f1f3f7;background-color:#f1f3f7;Margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]--><div class="mj-column-px-300 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;">Adept Electronics</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;">Block 1 Kaki Bukit Avenue 3 #10-06 Singapore 416087</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>`;
    },
    confirmPickup: (jobid, dateToSend, custName, custAddress, item) => {
      return `<!DOCTYPE html>
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <title>MJTEST</title>
    <!--[if !mso]><!-- -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
      #outlook a {
        padding: 0;
      }

      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }

      table,
      td {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }

      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }

      p {
        display: block;
        margin: 13px 0;
      }
    </style>
    <!--[if mso]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if lte mso 11]>
      <style type="text/css">
        .outlook-group-fix {
          width: 100% !important;
        }
      </style>
    <![endif]-->
    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700"
      rel="stylesheet"
      type="text/css"
    />
    <style type="text/css">
      @import url(
        https://fonts.googleapis.com/css?family=Ubuntu:300,
        400,
        500,
        700
      );
    </style>
    <!--<![endif]-->
    <style type="text/css">
      @media only screen and (min-width: 480px) {
        .mj-column-px-300 {
          width: 300px !important;
          max-width: 300px;
        }

        .mj-column-px-600 {
          width: 600px !important;
          max-width: 600px;
        }
      }
    </style>
    <style type="text/css">
      @media only screen and (max-width: 480px) {
        table.full-width-mobile {
          width: 100% !important;
        }

        td.full-width-mobile {
          width: auto !important;
        }
      }
    </style>
  </head>

  <body>
    <div style="">
      <!--[if mso | IE]>
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
      <div style="margin:0px auto;max-width:600px;">
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="width:100%;"
        >
          <tbody>
            <tr>
              <td
                style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
              >
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
        </tr>
      
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
      <div
        style="background:#f1f3f7;background-color:#f1f3f7;margin:0px auto;max-width:600px;"
      >
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"
        >
          <tbody>
            <tr>
              <td
                style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
              >
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
                <div
                  class="mj-column-px-300 outlook-group-fix"
                  style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align:top;"
                    width="100%"
                  >
                    <tr>
                      <td
                        align="center"
                        style="font-size:0px;padding:10px 25px;word-break:break-word;"
                      >
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="border-collapse:collapse;border-spacing:0px;"
                        >
                          <tbody>
                            <tr>
                              <td style="width:180px;">
                                <img
                                  alt="adept_logo"
                                  height="auto"
                                  src="https://i.imgur.com/w5Fv9z2.png"
                                  style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;"
                                  width="180"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
                <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
      <div
        style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;"
      >
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="background:#ffffff;background-color:#ffffff;width:100%;"
        >
          <tbody>
            <tr>
              <td
                style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
              >
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:600px;"
            >
          <![endif]-->
                <div
                  class="mj-column-px-600 outlook-group-fix"
                  style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align:top;"
                    width="100%"
                  >
                    <tr>
                      <td
                        align="left"
                        style="font-size:0px;padding:10px 25px;word-break:break-word;"
                      >
                        <div
                          style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:left;color:#000000;"
                        >
                          Dear Sales,
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="font-size:0px;padding:10px 25px;word-break:break-word;"
                      >
                        <div
                          style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:left;color:#000000;"
                        >
                          Customer has requested pickup, please confirm:
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
                <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
      <div
        style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;"
      >
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="background:#ffffff;background-color:#ffffff;width:100%;"
        >
          <tbody>
            <tr>
              <td
                style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
              >
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
                <div
                  class="mj-column-px-300 outlook-group-fix"
                  style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align:top;"
                    width="100%"
                  >
                    <tr>
                      <td
                        align="center"
                        style="font-size:0px;padding:10px 25px;word-break:break-word;"
                      >
                        <div
                          style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:center;color:#000000;"
                        >
                          JOB ID
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        style="font-size:0px;padding:10px 25px;word-break:break-word;"
                      >
                        <div
                          style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:center;color:#000000;"
                        >
                          DATE
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        style="font-size:0px;padding:10px 25px;word-break:break-word;"
                      >
                        <div
                          style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:center;color:#000000;"
                        >
                          NAME
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        style="font-size:0px;padding:10px 25px;word-break:break-word;"
                      >
                        <div
                          style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:center;color:#000000;"
                        >
                          ADDRESS
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        style="font-size:0px;padding:10px 25px;word-break:break-word;"
                      >
                        <div
                          style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;line-height:1;text-align:center;color:#000000;"
                        >
                          ITEM
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
                <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
                <div
                  class="mj-column-px-300 outlook-group-fix"
                  style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align:top;"
                    width="100%"
                  >
                    <tr>
                      <td
                        align="center"
                        style="font-size:0px;padding:10px 25px;word-break:break-word;"
                      >
                        <div
                          style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:center;color:#000000;"
                        >
                          ${jobid}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        style="font-size:0px;padding:10px 25px;word-break:break-word;"
                      >
                        <div
                          style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:center;color:#000000;"
                        >
                          ${dateToSend}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        style="font-size:0px;padding:10px 25px;word-break:break-word;"
                      >
                        <div
                          style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:center;color:#000000;"
                        >
                          ${custName}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        style="font-size:0px;padding:10px 25px;word-break:break-word;"
                      >
                        <div
                          style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:center;color:#000000;"
                        >
                          ${custAddress}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        style="font-size:0px;padding:10px 25px;word-break:break-word;"
                      >
                        <div
                          style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:1;text-align:center;color:#000000;"
                        >
                          ${item}
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
                <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
      <div
        style="background:#f1f3f7;background-color:#f1f3f7;margin:0px auto;max-width:600px;"
      >
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"
        >
          <tbody>
            <tr>
              <td
                style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
              >
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
                <div
                  class="mj-column-px-300 outlook-group-fix"
                  style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align:top;"
                    width="100%"
                  >
                    <tr>
                      <td
                        align="center"
                        vertical-align="middle"
                        style="font-size:0px;padding:10px 25px;word-break:break-word;"
                      >
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="border-collapse:separate;line-height:100%;"
                        >
                          <tr>
                            <td
                              align="center"
                              bgcolor="#3ed782"
                              role="presentation"
                              style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;background:#3ed782;"
                              valign="middle"
                            >
                              <a
                                href="https://app.andreweijie.tech/change-password"
                                style="display:inline-block;background:#3ed782;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:24px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;"
                                target="_blank"
                              >
                                CONFIRM
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
                <!--[if mso | IE]>
            </td>
          
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
                <div
                  class="mj-column-px-300 outlook-group-fix"
                  style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align:top;"
                    width="100%"
                  >
                    <tr>
                      <td
                        align="center"
                        vertical-align="middle"
                        style="font-size:0px;padding:10px 25px;word-break:break-word;"
                      >
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="border-collapse:separate;line-height:100%;"
                        >
                          <tr>
                            <td
                              align="center"
                              bgcolor="#f52a57"
                              role="presentation"
                              style="border:none;border-radius:3px;cursor:auto;mso-padding-alt:10px 25px;background:#f52a57;"
                              valign="middle"
                            >
                              <a
                                href="https://app.andreweijie.tech/change-password"
                                style="display:inline-block;background:#f52a57;color:#ffffff;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:24px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:3px;"
                                target="_blank"
                              >
                                REJECT
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
                <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      
      <table
         align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600"
      >
        <tr>
          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
      <div
        style="background:#f1f3f7;background-color:#f1f3f7;margin:0px auto;max-width:600px;"
      >
        <table
          align="center"
          border="0"
          cellpadding="0"
          cellspacing="0"
          role="presentation"
          style="background:#f1f3f7;background-color:#f1f3f7;width:100%;"
        >
          <tbody>
            <tr>
              <td
                style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"
              >
                <!--[if mso | IE]>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                
        <tr>
      
            <td
               class="" style="vertical-align:top;width:300px;"
            >
          <![endif]-->
                <div
                  class="mj-column-px-300 outlook-group-fix"
                  style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"
                >
                  <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="vertical-align:top;"
                    width="100%"
                  >
                    <tr>
                      <td
                        align="center"
                        style="font-size:0px;padding:10px 25px;word-break:break-word;"
                      >
                        <div
                          style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;"
                        >
                          Adept Electronics
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        style="font-size:0px;padding:10px 25px;word-break:break-word;"
                      >
                        <div
                          style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:16px;line-height:1;text-align:center;color:#1C222D;"
                        >
                          Block 1 Kaki Bukit Avenue 3 #10-06 Singapore 416087
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
                <!--[if mso | IE]>
            </td>
          
        </tr>
      
                  </table>
                <![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]>
          </td>
        </tr>
      </table>
      <![endif]-->
    </div>
  </body>
</html>
`;
    }
  }
};

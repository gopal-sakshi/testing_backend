var nodemailer = require('nodemailer');
console.log(process.argv[2]);
// how to run this =========> node email1.js @#@#@#       // 3rd thingy is your password
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pedabicar@gmail.com',
    // pass: `${process.argv[2]}`,
    pass: `Nssssaaa`        // even this did not work
  }
});

var mailOptions = {
  from: 'pedabicar@gmail.com',
  to: 'gopal612@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

/*

Before sending your email 
a) allow non secure apps to access gmail = https://myaccount.google.com/lesssecureapps?pli=1
b) Also enable the captcha https://accounts.google.com/DisplayUnlockCaptcha

---------------------------------------------------------------------------------------------------------------

*/
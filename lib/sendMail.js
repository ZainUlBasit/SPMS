import { transporter } from "./nodemailer";

const sendMail = (to, subject, text, other = {}) => {
  var mailOptions = {
    from: "hobab.leo99@gmail.com",
    to,
    subject,
    text,
    ...other,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      throw error;
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { sendMail };

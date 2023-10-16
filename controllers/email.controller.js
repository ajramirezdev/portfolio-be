const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

const sendEmail = async (req, res) => {
  const { fullName, email, message } = req.body;
  try {
    const emailInfo = await transporter.sendMail({
      from: {
        name: `${fullName} - ${email}`,
        address: process.env.USER,
      },
      to: process.env.USER,
      subject: "Job Opportunity??",
      text: message,
    });

    res.status(200).send("Email sent");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sendEmail };

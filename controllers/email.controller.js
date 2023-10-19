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
      to: "ajlimramirez@gmail.com",
      subject: "Job Opportunity??",
      text: message,
    });

    res.status(200).send("Email sent");
  } catch (error) {
    console.log(error);
  }
};

const fakeRequest = async (req, res) => {
  res.status(200).send("Fake request sent");
};

module.exports = { sendEmail, fakeRequest };

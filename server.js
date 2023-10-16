const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const EmailRouter = require("./routes/email.router");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/email", EmailRouter);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

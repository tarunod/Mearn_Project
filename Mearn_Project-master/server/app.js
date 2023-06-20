const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const app = express();
const mongose = require("mongoose");

require("./db/conn");

const user = require("./model/userSchema");

app.use(express.json());

// middlware

const middlwaree = (req, res, next) => {
  console.log("hellow my middlware");
  next();
};

app.use(require("./router/auth"));
// middlwaree();

app.listen(3000, () => console.log("Application is running"));

// https://github.com/sideproject0214/blog/blob/master/server/app.js
var express = require('express');
const mongoose = require('mongoose');
const app = express();
// var config = "./config";

// console.log("config : ", config);
// console.log("config.MONGO_URI : ", config.MONGO_URI);

// const { MONGO_URI } = config;

// console.log("MONGO_URI : ", MONGO_URI);

var dotenv = require('dotenv')
console.log("dotenv : ", dotenv)
dotenv.config();

var MONGO_URI = process.env.MONGO_URI;

console.log("MONGO_URI : ", MONGO_URI)



mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log("MongoDB connecting Success"))
    .catch((e) => console.log(e));


app.get("/")

exports.app = app;


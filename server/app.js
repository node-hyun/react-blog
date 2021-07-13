var express = require('express');
const { mongoose } = require('mongoose');
const app = express();
var config = "./config";


const { MONGO_URI } = config;


mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
    })
    .then(() => console.log("MongoDB connecting Success"))
    .catch((e) => console.log(e));


app.get("/")

exports.app = app;

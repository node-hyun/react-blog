var express = require('express');     
const mongoose = require('mongoose');
const config = require("./config");

const hpp = require("hpp");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const postsRoutes = require("./routes/api/post");

const app = express();
const { MONGO_URI } = config;

app.use(hpp());
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(morgan("dev"));
app.use(express.json());


// dot env 설정 start
// var dotenv = require('dotenv')
// console.log("dotenv : ", dotenv)
// dotenv.config();
// var MONGO_URI = process.env.MONGO_URI;
// console.log("MONGO_URI : ", MONGO_URI)
// dot env 설정 끝


mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log("MongoDB connecting Success"))
    .catch((e) => console.log(e));


app.get("/")
app.use("/api/post", postsRoutes);


module.exports = app;


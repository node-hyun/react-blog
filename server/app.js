var express = require('express');
const mongoose = require('mongoose');
const config = require("./config");

const hpp = require("hpp");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const postsRoutes = require("./routes/api/post");
const userRoutes = require("./routes/api/user");
// console.log("postsRouter : ", postsRoutes)
// console.log("userRoutes : ", userRoutes)

const app = express();
const { MONGO_URI, PORT } = config;

app.use(hpp());
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(morgan("dev"));
app.use(express.json());


mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log("MongoDB connecting Success"))
    .catch((e) => console.log(e));


app.get("/")
app.use("/api/post", postsRoutes);
app.use("/api/user", userRoutes);


module.exports = app;


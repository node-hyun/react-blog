var dotenv = require('dotenv')
// console.log("dotenv : ", dotenv)
dotenv.config();

var MONGO_URI = process.env.MONGO_URI;
// console.log("MONGO_URI : ", MONGO_URI)

module.exports.MONGO_URI = MONGO_URI;
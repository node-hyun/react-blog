var dotenv = require('dotenv')
// console.log("dotenv : ", dotenv)
dotenv.config();

var MONGO_URI = process.env.MONGO_URI;
var JWT_SECRET = process.env.JWT_SECRET;
var PORT = process.env.PORT;

module.exports.MONGO_URI = MONGO_URI;
module.exports.JWT_SECRET = JWT_SECRET
module.exports.PORT = PORT;

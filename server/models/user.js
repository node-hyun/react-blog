var moment = require("moment");
var mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["MainJin", "SubJuin", "User"],
        default: "User",
    },
    register_data: {
        type: Date,
        default: moment().format("YYYY-MM-DD hh:mm"),
    },
    comments: [
        {
            post_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "posts"
            },
            comment_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "comments",
            }
        }
    ],
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
        },
    ]
});

const User = mongoose.model("user", UserSchema);
module.exports = User;

// const moment = require("moment");
// const { mongoose } = require("mongoose");
var moment = require("moment");
var mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true,
    },
    contents: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: -2,
    },
    fileUrl: {
        type: String,
        default: "https://source.unsplash.com/random/301x201",
    },
    date: {
        type: String,
        default: moment().format("YYYY-MM-DD hh:mm:ss"),
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comment",
        },
    ],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
});

const Post = mongoose.model("post", PostSchema);

// export default Post;
exports.User = Post;

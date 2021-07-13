// const { mongoose } = require("mongoose");
var mongoose = require("mongoose");


// Create Schema
const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        default: "미분류",
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
        },
    ],
});

const Category = mongoose.model("category", CategorySchema);

// export default Category;
exports.Category = Category;

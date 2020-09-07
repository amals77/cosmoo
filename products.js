var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var ProductsSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    code: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },
    image1: {
        type: String,
        required: true
    },
    image2: {
        type: String,
        required: true
    },
});

// Create model from schema
var Product = mongoose.model("Product", ProductsSchema);

// Exporting model
module.exports = Product;
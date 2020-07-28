var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var CategorySchema = new Schema({

    name: {
        type: String,
        required: true
    },

    // code: {
    //     type: String,
    //     required: true
    // },


});

// Create model from schema
var Category = mongoose.model("Category", CategorySchema);

// Exporting model
module.exports = Category;
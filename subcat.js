var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var SubcatSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
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

});

// Create model from schema
var Subcat = mongoose.model("Subcat", SubcatSchema);

// Exporting model
module.exports = Subcat;
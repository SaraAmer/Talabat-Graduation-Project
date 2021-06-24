const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    choices: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Choice"
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    rate: {
        type: String
    },
    price: {
        type: Number
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant"
    }

});
module.exports = mongoose.model('Food', foodSchema);
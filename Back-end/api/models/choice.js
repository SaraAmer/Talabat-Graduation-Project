const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choiceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true

    },
    restaurant: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurants"
    }],
    options: [{
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],

});
module.exports = mongoose.model('Choice', choiceSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    foods: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food"
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
module.exports = mongoose.model('Section', sectionSchema);
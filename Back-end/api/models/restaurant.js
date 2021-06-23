const mongoose = require('mongoose');



const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        contentType: String,

    },
    type: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
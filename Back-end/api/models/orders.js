const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const orderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant"
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    },
    items: [{
        food: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Food"
        },
        choices: [{
            type: String
        }],
        price: {
            type: Number
        },
        qty: {
            type: Number
        }
        
    }],
    total: {
        type: Number
    },
    status: {
        type: String,
        default: "pending"
    },
    payment: {
        type: String
    },
    day: {
        type: Number,
        default: day
    },
    year: {
        type: Number,
        default: year
    },
    month: {
        type: Number,
        default: month
    },
});
module.exports = mongoose.model('Order', orderSchema);
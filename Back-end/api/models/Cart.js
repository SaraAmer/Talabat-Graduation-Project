const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant"
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
    }
});
module.exports = mongoose.model('Cart', cartSchema);
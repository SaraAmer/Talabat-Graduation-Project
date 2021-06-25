const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const branchSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    address: {
       street: {
        type: String,
        required: true
    },
    coord: {
        lan: {
            type:Number,
            required: true
        
        }
        ,
        att: {
            type:Number,
            required: true
        },
    } , 

    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant"
    }

});
module.exports = mongoose.model('Branches', branchSchema);
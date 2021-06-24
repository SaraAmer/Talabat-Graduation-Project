const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
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
    },
    numberOfBranches: {
        type: Number,
    },
    category: {
        type: String,
    },
    website: {
        type: String,
    },
    address: {
        type: String,
    },
    //to make id of owner foreignKey in restaurantDetails
    // owner: [{ type: Schema.Types.ObjectId, ref: "restaurantOwner" }],
    // });


});
module.exports = mongoose.model('Restaurant', restaurantSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerSchema = new Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
   // required: true,
  },
  desc: {
    type: String,
  },
price: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Offer", offerSchema);

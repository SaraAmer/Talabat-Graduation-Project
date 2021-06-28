const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const restaurantSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  img: {
    type: String,
    // required: true
  },
  desc: {
    type: String,
    // required: true,
  },
  type: [{ type: Schema.Types.ObjectId, ref: "storeType" }],
  numberOfBranches: {
    type: Number,
  },
  cusine: {
    type: String,
  },
  website: {
    type: String,
  },
  address: {
    street: {
      type: String,
      // required: true,
    },
    coord: {
      lan: {
        type: Number,
        // required: true,
      },
      att: {
        type: Number,
        // required: true,
      },
    },
  },
  //to make id of owner foreignKey in restaurantTable
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "restaurantOwner" },
  rate: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    default: "pending",
  },
  country: { type: Schema.Types.ObjectId, ref: "Country" },
  minOrderAmount: { type: Number },
  workingHours: { type: String },
  deliveryTime: { type: Number },
  serviceCharge: { type: Number },
  vat: { type: Number },
  payment: [{ type: String }],

  website: {
    type: String,
  },
  // address: {
  //   type: String,
  // },
  Location: {
    type: String,
  },
  category: {
    type: String,
  },
});
module.exports = mongoose.model("Restaurant", restaurantSchema);

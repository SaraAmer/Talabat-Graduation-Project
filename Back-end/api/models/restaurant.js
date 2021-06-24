// const mongoose = require("mongoose");

// const restaurantSchema = mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
//   StoreName: {
//     type: String,
//   },

//   NumberOfBranches: {
//     type: Number,
//   },

//   StoreType: {
//     type: String,
//   },

//   Category: {
//     type: String,
//   },

//   website: {
//     type: String,
//   },
//   RestaurantAddress: {
//     type: String,
//   },
//   //to make id of owner foreignKey in restaurantDetails
//   owner: [{ type: Schema.Types.ObjectId, ref: "restaurantOwner" }],
// });

// module.exports = mongoose.model("Restaurant", restaurantSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  img: {
    data: Buffer,
    contentType: String,
    // required: false,
  },
  type: {
    type: Number,
    // required: true,
  },
  desc: {
    type: String,
    // required: true,
  },
  info: {
    type: String,
    // required: true,
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
  //to make id of owner foreignKey in restaurantTable
  owner: [{ type: Schema.Types.ObjectId, ref: "restaurantOwner" }],
});
module.exports = mongoose.model("Restaurant", restaurantSchema);

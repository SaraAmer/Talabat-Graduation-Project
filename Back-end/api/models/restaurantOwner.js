const mongoose = require("mongoose");

const restaurantOwnerSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  // FirstName: {
  //   type: String,
  // },
  // LastName: {
  //   type: String,
  // },

  // StoreLocation: {
  //   type: String,
  // },

  // MobileNumber: {
  //   type: Number,
  // },

  email: {
    type: String,
    required: true,
    unique: true,
    match:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  // ContactRole: {
  //   type: String,
  // },
  password: { type: String, required: true },
});

module.exports = mongoose.model("restaurantOwner", restaurantOwnerSchema);

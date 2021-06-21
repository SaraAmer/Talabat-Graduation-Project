const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  StoreName: {
    type: String,
  },

  NumberOfBranches: {
    type: Number,
  },

  StoreType: {
    type: String,
  },

  Category: {
    type: String,
  },

  website: {
    type: String,
  },
  RestaurantAddress: {
    type: String,
  },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);

const mongoose = require("mongoose");
var validator = require("validator");

const restaurantOwnerSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
  },

  MobileNumber: {
    type: Number,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    // match:
    //   /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: { type: String, required: true },
  cpassword: { type: String, required: true },
  status: {
    type: String,
    default: "pending",
  },
  resetToken: { type: String },
  expireToken: { type: Date },
});

module.exports = mongoose.model("restaurantOwner", restaurantOwnerSchema);

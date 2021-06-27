const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    // required: true,
    unique: true,
    match:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: { type: String, required: true },
  resetToken: { type: String },
  expireToken: { type: Date },
  firstName: {
    type: String,
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true,
  },
  lastName: {
    type: String,
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true,
  },
  gender: { type: String,},

  status: { type: String ,
     default:"accepted" },
     
  dateOfBirth: { type: Date },
  status: { type: String, default: "accepted" },
});

module.exports = mongoose.model("User", userSchema);
// lowercase: true, required: [true, "can't be blank"],

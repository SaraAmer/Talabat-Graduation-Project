const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const copounSchema = new Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  code: {
    type: String,
    required: true,
  },
  limit: {
    type: String,
    required: true,
  },
  expireDate: {
    type: String,
  },
  discount: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Copoun", copounSchema);

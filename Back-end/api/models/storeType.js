const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  //   restaurant: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Restaurant",
  //   },
});
module.exports = mongoose.model("storeType", storeTypeSchema);

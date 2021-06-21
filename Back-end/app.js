const express = require("express");
// const mongoose = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
var Schema = require("mongoose").Schema;
// **********************
const bcrypt = require("bcrypt");
const User = require("./api//models/user");
// ******************************************
const restaurantsRoutes = require("./api/routers/restaurants");
const userRoutes = require("./api/routers/user");
const authRoutes = require("./api/routers/auth");

// **********************************
mongoose.connect(
  "mongodb://localhost:27017/",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (connectErr, client) {
    const db = client.db("talabat");
    // console.log("hi");
    // client.close();
  }
);
mongoose.connection.on("connected", () => {
  console.log("connected");
});

mongoose.connection.on("error", (err) => {
  console.log("error");
});
// **************************
var Schema = mongoose.Schema;
console.log(
  "********************************************************************"
);
console.log(require("util").inspect(Schema.Types.ObjectId));
//*********** */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//*******************
app.use("/restaurants", restaurantsRoutes);
app.use("/user", userRoutes);
app.use("/auth/restaurant", authRoutes);

// *****************
// app.post("/hello", (req, res) => {
//   console.log("ji");
//   const name = req.body.name;
//   res.send({ message: `welcome ${name}` });
// });
//******************

//***************
module.exports = app;

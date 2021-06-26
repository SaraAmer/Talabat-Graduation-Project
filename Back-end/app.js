const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");

//*************To use Validator in Backend**********************//
// const expressValidator = require("express-validator");
// app.use(expressValidator());
//************************************************************ */

//to show extra information when making a request
app.use(morgan("dev"));

//for images upload

var path = require("path");
require("dotenv/config");

// const mongoose = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

var Schema = require("mongoose").Schema;
// **********************
const bcrypt = require("bcrypt");
const User = require("./api//models/user");
// ******************************************
const restaurantsRoutes = require("./api/routers/restaurants");
const userRoutes = require("./api/routers/user");


// **********************************

const foodRoutes = require("./api/routers/foods");
const categoryRoutes = require("./api/routers/category");
const offerRoutes = require("./api/routers/offers");
const copounRoutes = require("./api/routers/copouns");
const choiceRoutes = require("./api/routers/choices");
const BrancheRoutes = require("./api/routers/branches");
const authRoutes = require("./api/routers/auth");
const countryRoutes = require("./api/routers/country");
const addressRoutes = require("./api/routers/address");
const orderRoutes = require("./api/routers/order");
const cartRoutes = require("./api/routers/cart");
//************ for upload img
const fs = require("fs");
require("dotenv/config");
var multer = require("multer");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));
mongoose
    .connect(
        "mongodb+srv://eithar:123@cluster0.jg0og.mongodb.net/Talabat?retryWrites=true&w=majority"
    )
    .then((result) => {
        app.listen(5000);
        //  console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });

var Schema = mongoose.Schema;
console.log(
    "********************************************************************"
);
//**************to connect Backend with frontend************************
app.use(cors());
console.log(require("util").inspect(Schema.Types.ObjectId));

// console.log(require("util").inspect(Schema.Types.ObjectId));

//*********** */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//*******************

app.use("/restaurant", choiceRoutes, categoryRoutes, foodRoutes, BrancheRoutes);

// app.use("/restaurant", BrancheRoutes);

//app.use("/restaurants/foods", foodRoutes);

app.use("/restaurants", restaurantsRoutes);
app.use("/restaurants/offer", offerRoutes);
app.use("/restaurants/copoun", copounRoutes);
app.use("/user/cart", cartRoutes);
app.use("/user/address", addressRoutes);
app.use("/order", orderRoutes);
app.use("/user", userRoutes);
app.use("/auth/restaurant", authRoutes);
app.use("/country", countryRoutes);

///////////////Image upload /////////

// Step 5 - set up multer for storing uploaded files

var multer = require("multer");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now());
    },
});

var upload = multer({ storage: storage });

// *****************
app.post("/hello", (req, res) => {
    console.log("ji");
    const name = req.body.name;
    res.send({ message: `welcome ${name}` });
});

//If reaches this line, then there is an error
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});
//handel error:
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});

//**************img  upload************* */

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now());
    },
});

var upload = multer({ storage: storage });
//*********************
// app.post("/signup", (req, res, next) => {
//   const email = req.body.email;
//   const password = req.body.password;

//If reaches this line, then there is an error
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;

    next(error);
});
//handel error:
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});

module.exports = app;

// ********************
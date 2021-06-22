const express = require("express");
const morgan = require("morgan");
const app = express();


//to show extra information when making a request
app.use(morgan('dev'));

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
mongoose.connect(
    "mongodb://localhost:27017/", { useNewUrlParser: true, useUnifiedTopology: true },
    function(connectErr, client) {
        
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

// *****************
app.post("/hello", (req, res) => {
    console.log("ji");
    const name = req.body.name;
    res.send({ message: `welcome ${name}` });
});
//*********************
// app.post("/signup", (req, res, next) => {
//   const email = req.body.email;
//   const password = req.body.password;


//If reaches this line, then there is an error
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;

    next(error);
});
//handel error:
app.use((error, req, res, next) => {

    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });

});



module.exports = app;
//   User.find({ email: req.body.email })
//     .exec()
//     .then((user) => {
//       if (user.length >= 1) {
//         return res.status(409).json({
//           message: "Mail exists",
//         });
//       } else {
//         bcrypt.hash(req.body.password, 10, (err, hash) => {
//           if (err) {
//             return res.status(500).json({
//               error: err,
//             });
//           } else {
//             const user = new User({
//               _id: new mongoose.Types.ObjectId(),
//               email: req.body.email,
//               password: hash,
//             });
//             user
//               .save()
//               .then((result) => {
//                 console.log(result);
//                 res.status(201).json({
//                   message: "User created",
//                 });
//               })
//               .catch((err) => {
//                 console.log(err);
//                 res.status(500).json({
//                   error: err,
//                 });
//               });
//           }
//         });
//       } //else
//     }); //then
// });
// ********************
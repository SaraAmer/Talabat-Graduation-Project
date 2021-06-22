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
//************ for upload img
const fs = require('fs');
const path = require('path');
require('dotenv/config');
var multer = require('multer');
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 // parse application/json 
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

mongoose.connect('mongodb+srv://eithar:123@cluster0.jg0og.mongodb.net/Talabat?retryWrites=true&w=majority')
    .then(result => {
        app.listen(4000);
        console.log(result);

    })
    .catch(err => {
        console.log(err);
    });
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

//**************img  upload************* */
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });
//*********************
// app.post("/signup", (req, res, next) => {
//   const email = req.body.email;
//   const password = req.body.password;

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
module.exports = app;

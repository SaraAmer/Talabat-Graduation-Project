//For test
// const express = require("express");

// const router = express.Router();

// router.post("/hello", (req, res) => {
//   console.log("ji");
//   const email2 = req.body.email;
//   res.send({ message: `welcome ${email2}` });
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// var Schema = require("mongoose").Schema;
const restaurantOwner = require("../models/restaurantOwner");
const jwt = require("jsonwebtoken");
//************Mailer************************************** */
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      //api_key:SENDGRID_API
      api_key:
        "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",
    },
  })
);
// ********************************************/
router.post("/signup", (req, res, next) => {
  //   const FirstName = req.body.FirstName;
  //   const LastName = req.body.LastName;
  //   const StoreLocation = req.body.StoreLocation;
  //   const MobileNumber = req.body.MobileNumber;
  const email = req.body.email;
  //   const ContactRole = req.body.ContactRole;
  const password = req.body.password;

  restaurantOwner
    .find({ email: req.body.email })
    .exec()
    .then((restaurantowner) => {
      if (restaurantowner.length >= 1) {
        return res.status(409).json({
          message: "Mail exists",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const restaurantowner = new restaurantOwner({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash,
            });
            restaurantowner
              .save()
              .then((result) => {
                console.log(result);
                //Message send when register
                //******************
                transporter.sendMail({
                  //send message
                  // ************************** */
                  to: user.email,
                  from: "eng.marwamedhat2020@gmail.com",
                  subject: "request to signup in talabat ",
                  html: "<h1>information will revise and we will contact you </h1>",
                  //********************* */
                });
                //****************** */
                res.status(201).json({
                  message: "restaurant pended ",
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      } //else
    }); //then
});
//*******************
router.post("/login", (req, res, next) => {
  restaurantOwner
    .find({ email: req.body.email })
    .exec()
    .then((restaurantowner) => {
      if (restaurantowner.length < 1) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      bcrypt.compare(
        req.body.password,
        restaurantowner[0].password,
        (err, result) => {
          // JWT_KEY = "secret";

          if (err) {
            return res.status(401).json({
              message: "Auth failed",
            });
          }
          if (result) {
            const token = jwt.sign(
              {
                email: restaurantowner[0].email,
                restaurantownerId: restaurantowner[0]._id,
              },
              process.env.JWT_KEY,
              {
                expiresIn: "1h",
              }
            );
            return res.status(200).json({
              message: "Auth successful",
              token: token,
            });
          }
          res.status(401).json({
            message: "Auth failed",
          });
        }
      );
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
//***************************
module.exports = router;

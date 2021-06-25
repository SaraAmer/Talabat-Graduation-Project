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
const Restaurant = require("../models/restaurant");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      //api_key:SENDGRID_API
      //GoogleKey
      api_key: "",
    },
  })
);
// *************************************Old Done*******************************/
router.post("/signup", (req, res, next) => {
  //da al asm bytktb fe postman of get from form
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const MobileNumber = req.body.MobileNumber;
  const email = req.body.email;
  const password = req.body.password;
  const storename = req.body.storename;
  const numberOfBranches = req.body.numberOfBranches;
  const storetype = req.body.storetype;
  const category = req.body.category;
  const website = req.body.website;
  const restaurantAddress = req.body.restaurantAddress;
  const storeLocation = req.body.storeLocation;
  console.log(
    `${FirstName} ${LastName} ${MobileNumber} ${email}  ${password} ${storename} ${numberOfBranches} ${category}`
  );
  //const StoreLocation = req.body.StoreLocation;
  console.log("helo I'm in API");

  restaurantOwner
    .find({ email: req.body.email })
    .exec()
    .then((restaurantowner) => {
      if (!email || !password) {
        console.log("please add all the fields");
        return res.status(422).json({ error: "please add all the fields" });
      }
      // if (restaurantowner.length >= 1) {
      //   console.log("Mail Exist");
      //   return res.status(409).json({
      //     message: "Mail exists",
      //   });
      // }
      else {
        if (req.body.password == req.body.cpassword) {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                error: err,
              });
            } else {
              const restaurantowner = new restaurantOwner({
                //name of field in db = value from body
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: hash,
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                MobileNumber: req.body.MobileNumber,
                cpassword: hash,
              });
              console.log("saveeeeeeeeeeeeeeeeeeeeeeee");
              restaurantowner
                .save()
                .then((result) => {
                  console.log(result);
                  //after save restaurant Owner
                  /************************* */
                  const restaurant = new Restaurant({
                    _id: new mongoose.Types.ObjectId(),
                    name: req.body.storename,
                    owner: result._id,
                    numberOfBranches: req.body.numberOfBranches,
                    // type: req.body.storetype,
                    Location: req.body.storeLocation,
                    category: req.body.category,
                    website: req.body.website,
                    address: req.body.restaurantAddress,
                  });
                  console.log(restaurant);
                  restaurant.save().then((result) => {
                    console.log(result);
                    //************************** */
                    //Message send when register
                    //******************
                    // transporter.sendMail({
                    //   //send message
                    //   // ************************** */
                    //   to: user.email,
                    //   from: "eng.marwamedhat2020@gmail.com",
                    //   subject: "request to signup in talabat ",
                    //   html: "<h1>information will revise and we will contact you </h1>",
                    //   //********************* */
                    // });
                    //****************** */

                    res.status(201).json({
                      message:
                        "Check mail information will revise and we will contact you ",
                    });
                  }); //restaurant save
                })
                .catch((err) => {
                  console.log(err);
                  res.status(500).json({
                    error: err,
                  });
                });
            }
          });
        } //**************if bta3t confirm password */
        else {
          res.status(201).json({
            message: "Password Doesn't match",
          });
        }
      } //*********************************else
    }); //then
});
//********************************* */
//*******************
router.post("/login", (req, res, next) => {
  console.log("d5l al login");
  restaurantOwner
    .find({ email: req.body.email })
    .exec()
    .then((restaurantowner) => {
      if (restaurantowner.length < 1) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      //ykarn al atnen password bb3d
      bcrypt.compare(
        req.body.password,
        restaurantowner[0].password,
        (err, result) => {
          // JWT_KEY = "secret";
          //lw 7sl a7 error ytb3lo auth failed
          if (err) {
            return res.status(401).json({
              message: "Auth failed",
            });
          }
          //lw al atnen password kano matched ydeh token
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
            console.log("Auth Successful");
            return res.status(200).json({
              message: "Auth successful",
              token: token,
              // user: { email },
            });
          }

          //lw kan al atnen password msh matched y2olo Auth Failed w mydhosh token
          console.log("Auth failed");
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
//**********************Log Out *****(Remove from LocalStorage direct)
//************************ */
module.exports = router;

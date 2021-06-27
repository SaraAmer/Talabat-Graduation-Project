const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// var Schema = require("mongoose").Schema;
const restaurantOwner = require("../models/restaurantOwner");
const jwt = require("jsonwebtoken");
/***************** */
const crypto = require("crypto");
//************Mailer************************************** */
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const Restaurant = require("../models/restaurant");
//******************************************************* */
const Joi = require("joi");
//********************* */
// const transporter = nodemailer.createTransport(
// sendgridTransport({
//   auth: {
//     //api_key:SENDGRID_API
//     //GoogleKey
//     api_key:
//       "G.5q4rSytgSmWlsfYOC0VkUQ.0p0-CYaW4BJwP4xURy78r2mw9h2egbT-BXC1KZXfPXs",
//   },
// })

// );
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "eng.marwamedhat2020@gmail.com",
    pass: "",
  },
});

// var mailOptions ={
//   from :'',
//   to:'',
//   subject: 'welcome',
//   text:''
// };

//****************************************
// ***************************Sign Up***************************************************/
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
  const data = req.body;
  const schema = Joi.object({
    LastName: Joi.string().required().messages({
      "string.base": `Last name must be String`,
    }),

    FirstName: Joi.string().required().messages({
      "string.base": `First name must be String`,
    }),

    MobileNumber: Joi.string()
      .regex(/^\d{3}\d{3}\d{3}\d{2}$/)
      .required()
      .messages({
        "string.base": `Not valid Phone`,
      }),
    // MobileNumber: Joi.phoneNumber(),
    password: Joi.string().min(6).required(),
    cpassword: Joi.string().valid(Joi.ref("password")).required(),
    name: Joi.string().required(),
    numberOfBranches: Joi.required(),
    email: Joi.string().email().required().messages({
      "string.base": `Invalid Email`,
    }),
    category: Joi.string().required(),
    website: Joi.string().required(),
    storeLocation: Joi.string().required(),
    // address: Joi.string().required(),
  });
  //**************************************************** */
  const validation = schema.validate(req.body);

  if (!validation.error) {
    next();
  } else {
    res.status(422).json({
      // message: "Validation error.",
      error: validation.error,
    });
  }
  //********************* */
  restaurantOwner
    .find({ email: req.body.email })
    .exec()
    .then((restaurantowner) => {
      if (!email || !password) {
        console.log("please add all the fields");
        return res.status(422).json({ error: "please add all the fields" });
      } else {
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
                    name: req.body.name,
                    owner: result._id,
                    numberOfBranches: req.body.numberOfBranches,
                    // type: req.body.storetype,
                    Location: req.body.storeLocation,
                    category: req.body.category,
                    website: req.body.website,
                    // address: req.body.address,
                  });
                  console.log(restaurant);
                  restaurant.save().then((result) => {
                    console.log(result);
                    //************************** */

                    console.log("d5l al mailer");
                    console.log(restaurantowner.email);
                    // transporter.sendMail({
                    //   //send message
                    //   // ************************** */
                    //   to: restaurantowner.email,
                    //   from: "talabtteam@gmail.com",
                    //   subject: "request to signup in talabat ",
                    //   html: "<h1>information will revise and we will contact you </h1>",
                    //   //********************* */
                    // });
                    transporter.sendMail(
                      {
                        to: restaurantowner.email,
                        from: "eng.marwamedhat2020@gmail.com",
                        subject: "request to signup in talabat ",
                        //passing token in url
                        html: `<h1>information will revise and we will contact you </h1>`,
                      },
                      function (error, info) {
                        if (error) {
                          console.log(error);
                        } else {
                          console.log("Email sent");
                        }
                      }
                    );

                    res.status(201).json({
                      message:
                        "Check mail information will revise and we will contact you ",
                    });
                  }); //restaurant save
                })
                .catch((err) => {
                  console.log(err);
                  console.log("hereeeeeeeee");
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
//*******************Login***************************************************** */
// router.post("/login", (req, res, next) => {
//     console.log("d5l al login");
//     restaurantOwner
//         .find({ email: req.body.email })
//         .exec()
//         .then((restaurantowner) => {
//             if (restaurantowner.length < 1) {
//                 return res.status(401).json({
//                     message: "Auth failed",
//                 });
//             }
//             //ykarn al atnen password bb3d
//             bcrypt.compare(
//                 req.body.password,
//                 restaurantowner[0].password,
//                 (err, result) => {
//                     // JWT_KEY = "secret";
//                     //lw 7sl a7 error ytb3lo auth failed
//                     if (err) {
//                         return res.status(401).json({
//                             message: "Auth failed",
//                         });
//                     }
//                     //lw al atnen password kano matched ydeh token
//                     if (result) {
//                         const token = jwt.sign({
//                                 email: restaurantowner[0].email,
//                                 restaurantownerId: restaurantowner[0]._id,
//                             },
//                             process.env.JWT_KEY, {
//                                 expiresIn: "1h",
//                             }
//                         );
//                         console.log("Auth Successful");
//                         console.log(restaurantowner[0]._id);
//                         return res.status(200).json({
//                             message: "Auth successful",
//                             token: token,
//                             // user: { email },
//                             id: restaurantowner[0]._id,
//                         });
//                     }

//                     //lw kan al atnen password msh matched y2olo Auth Failed w mydhosh token
//                     console.log("Auth failed");
//                     res.status(401).json({
//                         message: "Auth failed",
//                     });
//                 }
//             );
//             //find mn gw al restaurant al user owner
//             // let restaurantId;
//             // console.log("==============result========================");
//             // console.log(restaurantowner);
//             // let reataurantfind = Restaurant.find({ owner: restaurantowner })
//             //   .exec()
//             //   .then((restaurant) => {
//             //     console.log("======================================");
//             //     console.log(restaurant);
//             //     restaurantId = restaurant[0]._id;
//             //     console.log(restaurantId);
//             //     return restaurant.json();
//             //   });

//             // console.log("Auth Successful");
//             // console.log(restaurantowner[0]._id);
//             // console.log("====================kkkkkkkkkkkk==================");

//             console.log(reataurantfind);
//             return res.status(200).json({
//               message: "Auth successful",
//               token: token,
//               id: restaurantowner[0]._id,
//               // email: restaurantowner[0]._email,
//             });
//           }

//           //lw kan al atnen password msh matched y2olo Auth Failed w mydhosh token
//           console.log("Auth failed");
//           res.status(401).json({
//             message: "Auth failed",
//           });

//       );
//     })
//*************************Login*****************************************/
router.post("/login", (req, res, next) => {
  console.log("d5l al login");
  restaurantOwner
    .find({ email: req.body.email })
    .exec()
    .then((restaurantowner) => {
      // if (restaurantowner.length < 1) {
      //   return res.status(401).json({
      //     message: "Auth failed",
      //   });
      // }
      //ykarn al atnen password bb3d
      if (restaurantowner[0].status == "accepted") {
        bcrypt.compare(
          req.body.password,
          restaurantowner[0].password,
          (err, result) => {
            // JWT_KEY = "secret";
            //lw 7sl a7 error ytb3lo auth failed
            if (err) {
              return res.status(401).json({
                error: "failed to login",
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
              console.log(restaurantowner[0]._id);
              return res.status(200).json({
                message: "You Login Successfully",
                token: token,
                // user: { email },
                id: restaurantowner[0]._id,
              });
              // } else {
              //   return res.status(200).json({
              //     message: "Still waiting to be Accepted by Talabt",
              //   });
              // }
            }

            //lw kan al atnen password msh matched y2olo Auth Failed w mydhosh token
            console.log("Your password isn't correct");
            res.status(401).json({
              error: "Your password isn't correct",
            });
          }
        );
      } else {
        return res.status(200).json({
          error: "Still waiting to be Accepted by Talabt",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
//**********************Log Out *****(Remove from LocalStorage direct)
//**************************Reset Password***************************** */
router.post("/reset-password", (req, res) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }
    //convert hexa decimal of token into string
    const token = buffer.toString("hex");
    //find user with email to sendmail of reset to it
    restaurantOwner.findOne({ email: req.body.email }).then((user) => {
      //if user not available
      if (!user) {
        return res
          .status(422)
          .json({ error: "User dont exists with that email" });
      }
      //resetToken in table user make his value is token
      user.resetToken = token;
      //expireToken in table user set it value with 1 hour
      user.expireToken = Date.now() + 3600000;
      //send mail using transporter
      user.save().then((result) => {
        console.log("3lshan yb3t mail");
        console.log(user.email);
        console.log(token);
        // transporter.sendMail({
        //   to: user.email,
        //   from: "walaa.elbasha40@gmail.com",
        //   subject: "password reset",
        //   //passing token in url
        //   html: `
        //           <p>You requested for password reset</p>
        //           <h5>click in this <a href="http://localhost/3000/reset/${token}">link</a> to reset password</h5>
        //           `,
        // });
        transporter.sendMail(
          {
            to: user.email,
            from: "eng.marwamedhat2020@gmail.com",
            subject: "password reset",
            //passing token in url
            html: `
                  <p>You requested for password reset</p>
                  <h5>click in this <a href="http://localhost/3000/reset/${token}">link</a> to reset password</h5>
                  `,
          },
          function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent");
            }
          }
        );

        res.json({ token, message: "check your email" });
      });
    });
  });
});

//**********************New Password*********************************************
router.post("/new-password", (req, res) => {
  //new password
  const newPassword = req.body.password;
  //token

  const sentToken = req.body.token;
  //find user with token
  restaurantOwner
    .findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
    .then((user) => {
      if (!user) {
        //maybe session expired
        return res.status(422).json({ error: "Try again session expired" });
      }
      //if you got user 7y3ml hash llnew password
      bcrypt.hash(newPassword, 12).then((hashedpassword) => {
        //update password came from frontend
        user.password = hashedpassword;
        user.resetToken = undefined;
        user.expireToken = undefined;
        user.save().then((saveduser) => {
          res.json({ message: "password updated success" });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//****************************** */
module.exports = router;

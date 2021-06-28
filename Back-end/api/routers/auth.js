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
const transporter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            //api_key:SENDGRID_API
            //GoogleKey
            api_key: process.env.MailerKey,
        },
    })
);
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
        .then(restaurantowner => {
            console.log("restaurannnnnnnnnnnnnnnnnnt")
            console.log(restaurantowner);
         
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
                                        //     //send message
                                        //     // ************************** */
                                        //     to: restaurantowner.email,
                                        //     from: "talabtteam@gmail.com",
                                        //     subject: "request to signup in talabat ",
                                        //     html: "<h1>information will revise and we will contact you </h1>",
                                        //     //********************* */
                                        // });

                                        res.status(201).json({
                                            message: "Check mail information will revise and we will contact you ",
                                        });
                                    }); //restaurant save
                                })
                                .catch((err) => {
                                    console.log("errrrrrrrrrrrrrrrrrrrrrrrror")
                                  console.log(err)
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
router.post("/login", (req, res, next) => {
    console.log("d5l al login");
    restaurantOwner
        .find({ email: req.body.email })
        .exec()
        .then((restaurantowner) => {
            if (restaurantowner.length < 1) {
                return res.status(401).json({
                    error: "Auth failed",
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
                            error: "Auth failed",
                        });
                    }
                    //lw al atnen password kano matched ydeh token
                    if (result) {
                    
                        Restaurant.find({"owner": restaurantowner}).exec().then((restaurant =>{
                            if (restaurantowner.length < 1) {
                                return res.status(401).json({
                                   error: "Your restaurant has been deleted",
                                });
                            }
                            else if(restaurant[0].status == "pending"){
                                return res.status(401).json({
                                    error: "Your Request is under Reviewing we will contact you soon",
                                 });
                            }
                            else{
                                const token = jwt.sign({
                                    email: restaurantowner[0].email,
                                    restaurantownerId: restaurantowner[0]._id,
        
                                },
                                process.env.JWT_KEY, {
                                    expiresIn: "1h",
                                }
                            );
                            return res.status(200).json({
                             message: "Auth successful",
                             token: token,
                             // user: { email },
                             id: restaurantowner[0]._id,
                             restId: restaurant[0]._id
                             
                         });
        
                                    
                            }
                        }))
                     
                       
                   
                    }
                    

                    //lw kan al atnen password msh matched y2olo Auth Failed w mydhosh token
                    else{
                        console.log("Auth faileddddddddddddddddd");
                        res.status(401).json({
                            error: "Auth failed",
                        });

                    }
                  
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
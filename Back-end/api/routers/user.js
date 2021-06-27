const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// var Schema = require("mongoose").Schema;
const User = require("../models/user");
const jwt = require("jsonwebtoken");
//*************************************
const crypto = require("crypto");
//***************Login with Google******* */
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.AUTH2CLIENT);
//****************Login with FaceBook*************** */
const fetch = require("node-fetch");
//************Mailer************************************** */
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            //api_key:SENDGRID_API
            //MailerKEy
            api_key: process.env.MailerKey,
        },
    })
);
/*************************************************************** */
router.post("/signup", (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.find({ email: req.body.email })
        .exec()
        .then((user) => {
            if (user.length >= 1) {
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
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash,
                            lastName: req.body.lastName,
                            firstName: req.body.firstName,
                            gender: req.body.gender,
                            address: req.body.address,
                        });
                        user
                            .save()
                            .then((result) => {
                                console.log(result);
                                console.log("7yd5ol 3la send mail");
                                // transporter.sendMail({
                                //     //send message
                                //     // ************************** */
                                //     to: user.email,
                                //     from: "talabtteam@gmail.com",
                                //     subject: "request to signup in talabat ",
                                //     html: "<h1>Welcome in talabat Online </h1>",
                                //     //********************* */
                                // });
                                res.status(201).json({
                                    message: "User created",
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

router.delete("/:userId", (req, res, next) => {
    User.remove({ _id: req.params.userId })
        .exec()
        .then((result) => {
            res.status(200).json({
                message: "User deleted",
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

router.put("/profile/:userId", (req, res, next) => {
    const id = req.params.userId;

    User.findOne({ _id: id })
        .exec()
        .then((user) => {
            user.firstName = req.body.firstName ? req.body.firstName : user.firstName;
            user.lastName = req.body.lastName ? req.body.lastName : user.lastName;
            user.gender = req.body.gender ? req.body.gender : user.gender;
            return user.save();
        })
        .then((result) => {
            res.status(200).json({
                myresopnse: result,
            });
        })
        .catch((err) => {
            console.log("error message" + err);
        });
});

//*******************
router.post("/login", (req, res, next) => {
    console.log("d5l al user login");
    console.log(req.body.email);
    User.find({ email: req.body.email })
        .exec()
        .then((user) => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: "Auth failed",
                });
            }
            //7ykarn al password b password al mwgod
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                // JWT_KEY = "secret";

                if (err) {
                    return res.status(401).json({
                        message: "Auth failed",
                    });
                }
                //lw howa howa al password 7ydeh taken
                console.log("Auth Success");
                if (result) {
                    const token = jwt.sign({
                            email: user[0].email,
                            userId: user[0]._id,
                        },
                        process.env.JWT_KEY, {
                            expiresIn: "1h",
                        }
                    );
                    return res.status(200).json({
                        message: "Auth successful",
                        token: token,
                        userId: user[0]._id,
                    });
                }
                //lw msh howa howa al password 7y2olo auth failed
                console.log("Auth failed");
                res.status(401).json({
                    message: "Auth failed",
                });
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});
//***************************Login with Google *********************
router.post("/googlelogin", (req, res) => {
    const { tokenId } = req.body;
    //need client id
    //verify token in frontend id the same as in backend
    console.log("d5l al login b google ");
    client
        .verifyIdToken({
            //lw nfs al asm bktbo mara wa7da bs
            idToken: tokenId,
            //GOOGLEKEY
            audience: process.env.AUTH2CLIENT,
        })
        .then((response) => {
            const { email_verified, name, email } = response.payload;

            console.log(response.payload);
            if (email_verified) {
                //if email verified (valid)
                //if Already had logged before so he stored in database we don't need to save it again
                //if first time login so store it in database
                User.findOne({ email }).exec((err, user) => {
                    if (err) {
                        console.log("error mn al bdayaa ");
                        return res.status(400).json({
                            error: "Something went wrong",
                        });
                    } else {
                        //user already exist in database so generate token only
                        if (user) {
                            console.log("bytl3 al token :) ");

                            const token = jwt.sign({
                                    _id: user._id,
                                },
                                process.env.JWT_KEY, {
                                    expiresIn: "1h", //VALID TOKEN FOR 1 HOUR
                                }
                            );
                            const { _id, email } = user;
                            //send response to clientside(react) token and user info
                            return res.status(200).json({
                                message: "login Success",
                                token: token,
                                user: { _id, email },
                            });
                            //uer doesn't exist in database
                            //user try to login by google for the first time
                        } else {
                            //create newuser to store it in database
                            //create random password for this user and store in db
                            console.log("by3ml save lluser");

                            let password = email + process.env.JWT_KEY;
                            console.log(password);
                            //create nweuser with this email
                            let newUser = new User({
                                _id: new mongoose.Types.ObjectId(),
                                email,
                                password,
                            });
                            newUser.save((err, data) => {
                                if (err) {
                                    console.log(err);
                                    console.log("something went Wrong");
                                    return res.status(400).json({
                                        error: "Something went wrong",
                                    });
                                }
                                //***********
                                //if no error so generate token
                                console.log("if no error so generate token");

                                const token = jwt.sign({
                                        _id: data._id,
                                    },
                                    process.env.JWT_KEY, {
                                        expiresIn: "1h",
                                    }
                                );
                                const { _id, email } = newUser;
                                return res.status(200).json({
                                    message: "User Generate Successfully",
                                    token: token,
                                    user: { _id, email },
                                });
                            });
                        }
                    }
                }); //findone
            }
        });
});

//***************************Login with Facebook**************/
router.post("/facebooklogin", (req, res) => {
    console.log("FACEBOOK LOGIN REQ BODY", req.body);
    const { userID, accessToken } = req.body;

    const url = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;

    return (
        fetch(url, {
            method: "GET",
        })
        .then((response) => response.json())
        // .then(response => console.log(response))
        .then((response) => {
            const { email, name } = response;
            console.log(response);
            User.findOne({ email }).exec((err, user) => {
                if (user) {
                    const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY, {
                        expiresIn: "7d",
                    });
                    const { _id, email } = user;
                    console.log(user);
                    return res.json({
                        token,
                        user: { _id, email },
                        message: "Login Success",
                    });
                } else {
                    let password = email + process.env.JWT_KEY;
                    user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        email,
                        password,
                    });
                    console.log(user);
                    user.save((err, data) => {
                        if (err) {
                            console.log("ERROR FACEBOOK LOGIN ON USER SAVE", err);
                            return res.status(400).json({
                                error: "User signup failed with facebook",
                            });
                        }
                        const token = jwt.sign({ _id: data._id }, process.env.JWT_KEY, {
                            expiresIn: "7d",
                        });
                        const { _id, email } = data;
                        console.log(data);
                        return res.json({
                            token,
                            user: { _id, email },
                            message: "Login Sucess",
                        });
                    });
                }
            });
        })
        .catch((error) => {
            res.json({
                error: "Facebook login failed. Try later",
            });
        })
    );
}); //router
//**************************Reset Password***************************** */
router.post("/reset-password", (req, res) => {
    crypto.randomBytes(32, (err, buffer) => {
        if (err) {
            console.log(err);
        }
        //convert hexa decimal of token into string
        const token = buffer.toString("hex");
        //find user with email to sendmail of reset to it
        User.findOne({ email: req.body.email }).then((user) => {
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
                // console.log("hereeeeeeeeeeeeeeeeee");
                transporter.sendMail({
                    to: user.email,
                    from: "marwamedhat242@gmail.com",
                    subject: "password reset",
                    //passing token in url
                    html: `
                  <p>You requested for password reset</p>
                 
                  <h5>click in this <a href="http://localhost/3000/reset/${token}">link</a> to reset password</h5>
                  `,
                });
                res.json({ message: "check your email" });
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
    User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
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
//*************************Change Password*********************//
// //*************************test change password***************** */
router.post("/:userId/change", (req, res, next) => {
    User.find({ _id: req.params.userId })
        .exec()
        .then((user) => {
            let bool = bcrypt.compareSync(req.body.password, user[0].password);
            let conf = req.body.password == req.body.password_confirmation;
            let cur = bcrypt.compareSync(req.body.current, user[0].password);
            console.log(cur);
            //  console.log(bool)
            //   console.log(req.body.password==req.body.password_confirmation)//false
            //  console.log(conf);//false
            //  console.log(req.body.password_confirmation);//1234567
            //  console.log(req.body.password);//hash

            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    req.body.password = hash;
                    let query = { _id: req.params.userId };
                    if (cur == true) {
                        if (bool == false) {
                            //al atnen msh shbh b3d f y3ml update
                            if (conf) {
                                User.update(query, req.body, function(err) {
                                    if (err) {
                                        return res.status(500).json({
                                            error: err,
                                        });
                                    } else {
                                        return res.status(200).json({
                                            message: "password changes successful",
                                        });
                                    }
                                });
                            } else {
                                return res.status(200).json({
                                    message: "Password didn't matches!",
                                });
                            }
                        } else {
                            return res.status(200).json({
                                message: "Password matches!",
                            });
                        }
                    } else {
                        return res.status(200).json({
                            message: "current password error!",
                        });
                    }
                });
            });
        });
});

//************************************************************
router.post("/:userId/changemail", (req, res, next) => {
    const pass = req.body.password;
    const id = req.params.userId;
    // const reemail=req.body.email
    User.findOne({ _id: req.params.userId })
        .exec()
        .then((user) => {
            let bool = bcrypt.compareSync(req.body.password, user.password);
            if (bool == true) {
                if (req.body.email != user.email) {
                    User.update({ _id: id }, {
                            $set: {
                                email: req.body.email,
                            },
                        })
                        .exec()
                        .then((result) => {
                            res.status(200).json({ message: "email updated" });
                        })
                        .catch((err) => {
                            console.log(err);
                            res.status(500).json({ error: err });
                        });
                } else {
                    return res.status(200).json({
                        message: "same email!",
                    });
                }
            } else {
                return res.status(200).json({
                    message: "password error!",
                });
            }
        });
});

//************************************************************
router.get("/profile/:userId", (req, res, next) => {
    const id = req.params.userId;
    User.findById(id, function(err, user) {
        res.send(user);
    });
});
//************************************************************
module.exports = router;
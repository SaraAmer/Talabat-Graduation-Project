const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// var Schema = require("mongoose").Schema;
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require('express-validator/check');
var crypto = require('crypto');

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
                        user.save()
                            .then((result) => {
                                console.log(result);
                                transporter.sendMail({
                                    //send message
                                    // ************************** */
                                    to: user.email,
                                    from: "eng.marwamedhat2020@gmail.com",
                                    subject: "request to signup in talabat ",
                                    html: "<h1>information will revise and we will contact you </h1>",
                                    //********************* */
                                });
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
//*******************
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

//*******************
router.post("/login", (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then((user) => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: "Auth failed",
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                // JWT_KEY = "secret";

                if (err) {
                    return res.status(401).json({
                        message: "Auth failed",
                    });
                }
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
                    });
                }
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
//***************************
router.put("/profile/:userId", (req, res, next) => {
    const id = req.params.userId
    User.update({ _id: id }, {
            $set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender,
                dateOfBirth: req.body.dateOfBirth,
                address: req.body.address,
                
            }
        })
        .exec()
        .then(result => {
            res.status(200).json({ message: 'User updated' });
        }).catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});
//***************************
router.post("/:userId/change", (req, res, next) => {
 User.find({_id: req.params.userId })
 .exec()
 .then((user) => {
 
 let bool = bcrypt.compareSync(req.body.password, user[0].password);

 console.log(bool);
 console.log(req.body.password);
 console.log(user[0].password);
 
 bcrypt.genSalt(10, function (err, salt) {
 bcrypt.hash(req.body.password, salt, function (err, hash) {
 req.body.password = hash;
 let query = { _id: req.params.userId };
 
 if (bool == false) {
 //al atnen msh shbh b3d f y3ml update
 
 User.update(query, req.body, function (err) {
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
 message: "Password matches!",
 });
 }
 });
 });
 });
});
//***************************
router.post('/:userId/changemail', (req, res, next) => {
const pass=req.body.password
const id = req.params.userId

 User.findOne({ _id: req.params.userId})
        .exec()
        .then((user) => {
    let bool = bcrypt.compareSync(req.body.password, user.password);
     if (bool == true) {
        if(req.body.email != user.email){
            User.update({ _id: id }, {
                    $set: {
                        email: req.body.email,            
                    }
                })
            .exec()
            .then(result => {
                res.status(200).json({ message: 'email updated' });
            }).catch(err => {
                console.log(err);
                res.status(500).json({ error: err });
            });
        }else {
            return res.status(200).json({
            message: "same email!",
            });
            }          
    }else {
            return res.status(200).json({
            message:"password error!",
            });
            }   
});
});


module.exports = router;
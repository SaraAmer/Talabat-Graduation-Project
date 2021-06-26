const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
var Restaurant = require('../models/restaurant');
//************ for upload img
const fs = require('fs');
const path = require('path');
require('dotenv/config');
var multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
});
/**used storage */
var upload = multer({ storage: storage });


router.post("/", upload.single('img'), (req, res, next) => {
    let address = {
        street: req.body.street,
        coord: { lan: req.body.lan, att: req.body.att }

    };
    let payments = [];
    for (payment of req.body.payment) {
        payments.push(payment);
    }
    const restaurant = new Restaurant({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        desc: req.body.desc,
        numberOfBranches: req.body.numberOfBranches,
        cusine: req.body.cusine,
        website: req.body.website,
        img: req.file.path,
        address: address,
        country: req.body.country,
        minOrderAmount: req.body.minOrderAmount,
        workingHours: req.body.workingHours,
        serviceCharge: req.body.serviceCharge,
        vat: req.body.vat,
        payment: payments
    });
    restaurant
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Created restaurant successfully",
                createdRestaurant: {
                    name: result.name,
                    img: result.img,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: "http://localhost:3000/restaurant/" + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});




////////////Filter by cusine

router.get("/cusine/:cusine", (req, res, next) => {
    const cusine = req.params.cusine;
    Restaurant.find({ cusine: cusine }).exec()
        .then(docs => {
            const response = {
                count: docs.length,
                restaurants: docs.map(doc => {
                    return {
                        name: doc.name,
                        desc: doc.desc,
                        img: doc.img,
                        address: doc.address,
                        cusine: doc.cusine,
                        website: doc.website,
                        country: doc.country,
                        minOrderAmount: doc.minOrderAmount,
                        workingHours: doc.workingHours,
                        serviceCharge: doc.serviceCharge,
                        vat: doc.vat,
                        payment: doc.payment,
                        numberOfBranches: doc.numberOfBranches,
                        resImg: doc.img,
                        _id: doc._id,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/products/" + doc._id
                        }
                    };
                })
            };

            res.status(200).json(response);

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


/////End filter by cusine




////////////Filter by street

router.get("/street/:street", (req, res, next) => {
    const street = req.params.street;
    Restaurant.find({ "address.street": street }).exec()
        .then(docs => {
            const response = {
                count: docs.length,
                restaurants: docs.map(doc => {
                    return {
                        name: doc.name,
                        desc: doc.desc,
                        img: doc.img,
                        address: doc.address,
                        cusine: doc.cusine,
                        website: doc.website,
                        country: doc.country,
                        minOrderAmount: doc.minOrderAmount,
                        workingHours: doc.workingHours,
                        serviceCharge: doc.serviceCharge,
                        vat: doc.vat,
                        payment: doc.payment,
                        numberOfBranches: doc.numberOfBranches,
                        resImg: doc.img,
                        _id: doc._id,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/products/" + doc._id
                        }
                    };
                })
            };

            res.status(200).json(response);

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


/////End filter by street


////////////Filter by street

router.get("/status/:status", (req, res, next) => {
    const status = req.params.status;
    Restaurant.find({ status: status }).exec()
        .then(docs => {
            const response = {
                count: docs.length,
                restaurants: docs.map(doc => {
                    return {
                        name: doc.name,
                        desc: doc.desc,
                        img: doc.img,
                        address: doc.address,
                        cusine: doc.cusine,
                        website: doc.website,
                        country: doc.country,
                        minOrderAmount: doc.minOrderAmount,
                        workingHours: doc.workingHours,
                        serviceCharge: doc.serviceCharge,
                        vat: doc.vat,
                        payment: doc.payment,
                        numberOfBranches: doc.numberOfBranches,
                        resImg: doc.img,
                        status:doc.status,
                        _id: doc._id,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/products/" + doc._id
                        }
                    };
                })
            };

            res.status(200).json(response);

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


/////End filter by street


router.get("/", (req, res, next) => {
    Restaurant.find().exec()
        .then(docs => {
            const response = {
                count: docs.length,
                restaurants: docs.map(doc => {
                    return {
                        name: doc.name,
                        desc: doc.desc,
                        img: doc.img,
                        address: doc.address,
                        cusine: doc.cusine,
                        website: doc.website,
                        country: doc.country,
                        minOrderAmount: doc.minOrderAmount,
                        workingHours: doc.workingHours,
                        serviceCharge: doc.serviceCharge,
                        vat: doc.vat,
                        payment: doc.payment,
                        numberOfBranches: doc.numberOfBranches,
                        resImg: doc.img,
                        status:doc.status,
                        _id: doc._id,
                        request: {
                            type: "GET",
                            url: "http://localhost:3000/products/" + doc._id
                        }
                    };
                })
            };

            res.status(200).json(response);

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get("/:resId", (req, res, next) => {
    const id = req.params.resId;

    Restaurant.findById(id)
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json({
                    restaurant: doc,

                });
            } else {
                res
                    .status(404)
                    .json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.delete("/:resId", (req, res, next) => {
    const id = req.params.resId;
    Restaurant.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Restaurant deleted'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.put("/:resId", upload.single('img'), (req, res, next) => {
    const id = req.params.resId;
    const name = req.body.name;



    Restaurant.findOne({ _id: id })
        .exec()
        .then(rest => {
            let address = {
                street: req.body.street ? req.body.street : rest.address.street,
                coord: {
                    lan: req.body.lan ? req.body.lan :rest.address.coord.lan,
                    att: req.body.att ? req.body.att :rest.address.coord.att
                }

            };

            if (req.body.payment) {
                const payments = [];
                const payment = req.body.payment;
                for (p of payment) {
                    payments.push(p);
                }
                rest.payment = payments;
            }


            rest.address = address;
            rest.name = req.body.name ? req.body.name : rest.name;
            rest.desc = req.body.desc ? req.body.desc : rest.desc;
            rest.cusine = req.body.cusine ? req.body.cusine : rest.cusine;
            rest.website = req.body.website ? req.body.website : rest.website;
            rest.numberOfBranches = req.body.numberOfBranches ? req.body.numberOfBranches : rest.numberOfBranches;
            rest.country = req.body.country ? req.body.country : rest.country;
            rest.minOrderAmount = req.body.minOrderAmount ? req.body.minOrderAmount : rest.minOrderAmount;
            rest.workingHours = req.body.workingHours ? req.body.workingHours : rest.workingHours;
            rest.serviceCharge = req.body.serviceCharge ? req.body.serviceCharge : rest.serviceCharge;
            rest.vat = req.body.vat ? req.body.vat : rest.vat;
            rest.img = req.file ? req.file.path : rest.img;
            rest.status = req.body.status
              ? req.body.status
              : rest.status;
            console.log(req.body.status);
            return rest.save();
        })
        .then(result => {
            res.status(200).json({
                myresopnse: result
            });
        })
        .catch(err => {
            console.log("error message" + err);
        })
});



module.exports = router;
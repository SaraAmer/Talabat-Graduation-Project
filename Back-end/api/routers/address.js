const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Address = require("../models/address");
const { check, validationResult } = require('express-validator/check');
var crypto = require('crypto');

// /user/address
router.post("/", (req, res, next) => {
    const address = new Address({
        _id: new mongoose.Types.ObjectId(),
        userId: req.body.userId,
        mobile: req.body.mobile,
        landing: req.body.landing,
        street: req.body.street,
        country: req.body.country,
        region: req.body.region,
        floor: req.body.floor,
        building: req.body.building,
        apartmentN: req.body.apartmentN,
        addressTitle: req.body.addressTitle,
        assitionalDirect: req.body.assitionalDirect,
        type: req.body.type,
        lang: req.body.lang,
        att: req.body.att


    });
    address
        .save()
        .then(result => {
            res.status(201).json({
                message: "Created address successfully",
                createdCategory: {
                    _id: result._id,

                    request: {
                        type: 'GET'
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

// /user/address/:userId/
router.get("/:userId", (req, res, next) => {
    Address.find({ userId: req.params.userId })
        .exec()
        .then(result => {
            console.log(result);
            res.status(201).json({
                Addresses: result
            });
        });

});

router.delete("/:addId", (req, res, next) => {
    const addId = req.params.addId;
    Address.remove({ _id: addId })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Address deleted'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});
router.put("/:userId", (req, res, next) => {
    const id = req.params.userId
    Address.update({ _id: id }, {
            $set: {
                userId: req.body.userId,
                mobile: req.body.mobile,
                landing: req.body.landing,
                street: req.body.street,
                country: req.body.country,
                region: req.body.region,
                floor: req.body.floor,
                building: req.body.building,
                apartmentN: req.body.apartmentN,
                addressTitle: req.body.addressTitle,
                assitionalDirect: req.body.assitionalDirect,
                type: req.body.type,
                lang: req.body.lang,
                att: req.body.att
                
            }
        })
        .exec()
        .then(result => {
            res.status(200).json({ message: 'Address updated' });
        }).catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;
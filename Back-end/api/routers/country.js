const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Country = require('../models/Country');

// POST REQUEST : /restaurant/resId/category
router.post("/", (req, res, next) => {
    const country = new Country({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,


    });
    country
        .save()
        .then(result => {
            res.status(201).json({
                message: "Created country successfully",
                createdCategory: {
                    name: result.name,
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


router.get("/", (req, res, next) => {
    Country.find()
        .exec()
        .then(result => {
            console.log(result);
            res.status(201).json({
                Countries: result
            });
        });

});
router.delete("/:countryId", (req, res, next) => {
    const id = req.params.countryId;
    Country.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Country deleted'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});



router.put("/:countryId", (req, res, next) => {
    const id = req.params.countryId;

    Country.findOne({ _id: id })
        .exec()
        .then(country => {
            country.name = req.body.name ? req.body.name : country.name;
            return country.save();
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
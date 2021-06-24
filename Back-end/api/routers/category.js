const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Category = require('../models/category');
const Restaurant = require('../models/restaurant');


router.post("/", (req, res, next) => {
    const category = new Category({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        restaurant: req.body.restaurant

    });
    category
        .save()
        .then(result => {
            res.status(201).json({
                message: "Created category successfully",
                createdCategory: {
                    name: result.name,
                    _id: result._id,
                    restaurant: result.restaurant,
                    request: {
                        type: 'GET',
                        url: "http://localhost:3000/restaurants/category" + result._id
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

// route: restaurant/category/:resId
// router.get("/:resId", (req, res, next) => {
//     const id = req.params.resId;
//     const restaurant = Restaurant.findById(id);
//     console.log(restaurant);
//     Category.find({ restaurant: restaurant })
//         .exec()
//         .then(doc => {
//             console.log("From database", doc);
//             if (doc) {
//                 res.status(200).json({
//                     Categories: doc,

//                 });
//             } else {
//                 res
//                     .status(404)
//                     .json({ message: "No valid entry found for provided ID" });
//             }
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({ error: err });
//         });
// });


router.get("/:resId", (req, res, next) => {
    const id = req.params.resId;
    const restaurant = Restaurant.findById(id);
    console.log("one++++++++++");
    console.log(restaurant);
    console.log("++++++++++");
    res.status(201).json({
        message: restaurant
    });
});

module.exports = router;
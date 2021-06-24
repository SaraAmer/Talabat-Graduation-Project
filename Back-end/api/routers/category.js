const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Category = require('../models/category');
const Restaurant = require('../models/restaurant');

// POST REQUEST : /restaurant/resId/category
router.post("/:resId/category", (req, res, next) => {
    const category = new Category({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        restaurant: req.params.resId

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


router.get("/:resId/category", (req, res, next) => {
    const id = req.params.resId;
    Category.find({ "restaurant": { _id: id } })
        .exec()
        .then(result => {
            console.log(result);
            res.status(201).json({
                Categories: result
            });
        });

});
router.delete("/category/:catId", (req, res, next) => {
    const id = req.params.catId;
    Category.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Category deleted'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});



router.put("/category/:catId", (req, res, next) => {
    const id = req.params.catId;

    Category.findOne({ _id: id })
        .exec()
        .then(cat => {
            cat.name = req.body.name ? req.body.name : cat.name;
            return cat.save();
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
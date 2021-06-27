const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
var Food = require('../models/food');

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



/////////////POST REQUEST /////////


router.post("/:resId/food", upload.single('img'), (req, res, next) => {

    const choices = [];
    if (req.body.choices) {
        for (const choice of req.body.choices) {
            choices.push(choice);
        }
    }


    const food = new Food({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        choices: choices,
        restaurant: req.params.resId,
        category: req.body.category,
        rate: req.body.rate,
        price: req.body.price,
        img: req.file.path,

    });
    food
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Created food successfully",
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


/////// GET REQUEST ////////


router.get("/:resId/food/", (req, res, next) => {
    const id = req.params.resId;

    Food.find({ "restaurant": { _id: id } })
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json({
                    food: doc,

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




router.delete("/food/:foodId", (req, res, next) => {
    const id = req.params.foodId;
    Food.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Food deleted'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});



router.put("/food/:foodId", upload.single('img'), (req, res, next) => {
    const id = req.params.foodId;

    Food.findOne({ _id: id })
        .exec()
        .then(food => {
            console.log("3aaaaaaaaaaaaaaaaa");
            console.log(food);
            if (req.body.choices) {
                const myChoices = [];
                const choices = req.body.choices;
                for (choice of choices) {
                    myChoices.push(choice);
                }
                food.choices = myChoices;
            }
            food.name = req.body.name ? req.body.name : food.name;
            food.category = req.body.category ? req.body.category : food.category;
            food.price = req.body.price ? req.body.price : food.price;
            food.img = req.file ? req.file.path : food.img;



            return food.save();
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
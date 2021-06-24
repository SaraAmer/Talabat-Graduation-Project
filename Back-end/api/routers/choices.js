const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Choice = require('../models/choice');
const Restaurant = require('../models/restaurant');


router.post("/:resId/food/choice", (req, res, next) => {
    const myOptions = [];
    const options = req.body.options;
    for (option of options) {
        myOptions.push(option);
    }
    const choice = new Choice({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        restaurant: req.params.resId,
        options: myOptions,
        status: req.body.status

    });
    choice.save()
        .then(result => {
            res.status(201).json({
                message: "Created choice successfully",
                createdCategory: {
                    name: result.name,
                    _id: result._id,
                    restaurant: result.restaurant,
                    status: result.status,
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


router.get("/:resId/choice", (req, res, next) => {
    const id = req.params.resId;
    Choice.find({ "restaurant": { _id: id } })
        .exec()
        .then(result => {
            console.log(result);
            res.status(201).json({
                Choices: result
            });
        });

});

router.delete("/choice/:choId", (req, res, next) => {
    const id = req.params.choId;
    Choice.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Choice deleted'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


router.put("/choice/:choId", (req, res, next) => {
    const id = req.params.choId;

    Choice.findOne({ _id: id })
        .exec()
        .then(choice => {
            if (req.body.options) {
                const myOptions = [];
                const options = req.body.options;
                for (option of options) {
                    myOptions.push(option);
                }
                choice.options = myOptions
            }

            choice.name = req.body.name ? req.body.name : choice.name;
            choice.status = req.body.status ? req.body.status : choice.status;
            return choice.save();
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
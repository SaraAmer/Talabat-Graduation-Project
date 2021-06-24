const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Branches = require('../models/Branchs');
const Restaurant = require('../models/restaurant');
router.post("/:resId/branches", (req, res, next) => {
    let address = {
        street: req.body.street ,
        coord: {lan: req.body.lan , att: req.body.att}

    };
    const Branch = new Branches({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        address: address , 
        restaurant: req.params.resId

    });
    Branch
        .save()
        .then(result => {
            res.status(201).json({
                message: "Created Branch successfully",
                createdCategory: {
                    name: result.name,
                    _id: result._id,
                    restaurant: result.restaurant,
                    request: {
                        type: 'GET',
                        url: "http://localhost:3000/restaurants/branch" + result._id
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
router.get("/:resId/branches", (req, res, next) => {
    const id = req.params.resId;
    Branches.find({ "restaurant": { _id: id } })
        .exec()
        .then(result => {
            console.log(result);
            res.status(201).json({
                Branches: result
            });
        });

});
router.put("/branch/:branchId", (req, res, next) => {
    const id = req.params.branchId;

    Branches.findOne({ _id: id })
        .exec()
        .then(branch => {
            console.log("==============================")
            console.log(branch)
            console.log("==============================")
            let address = {
                street: req.body.street?req.body.street:branch.address.street ,
                coord: {
                    lan: req.body.lan ? req.body.lan :branch.address.coord.lan,
                    att: req.body.att? req.body.att :branch.address.coord.att
                    }
        
            };
            branch.name= req.body.name ? req.body.name : branch.name
            branch.address=address
      
            


            return branch.save();
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
router.delete("/branch/:branchId", (req, res, next) => {
    const id = req.params.branchId;
    Branches.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Branch deleted'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});
module.exports = router;
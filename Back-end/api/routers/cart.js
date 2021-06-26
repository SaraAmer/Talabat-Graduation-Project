const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Cart = require('../models/Cart');
const Restaurant = require('../models/restaurant');


router.post("/", (req, res, next) => {

    //check if there is a cart:
    const findCart = Cart.find({ "user": { _id: req.body.user } })
        .exec().then(result => {
            if (result.length === 0) {
                //create a new cart:
                const items = [];
                for (item of req.body.items) {
                    items.push(item);
                }
                const cart = new Cart({
                    _id: new mongoose.Types.ObjectId(),
                    restaurant: req.body.restaurant,
                    user: req.body.user,
                    total: req.body.total,
                    items: items

                });

                cart.save()
                    .then(result => {
                        res.status(201).json({
                            message: "Created Cart successfully",
                            createdOrder: {
                                _id: result._id,
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

            } else {
                //second senario
                if (result.restaurant != req.body.restaurant) {
                    res.status(500).json({
                        message: result
                    });
                } else {
                    const yourItems = result.items;
                    const updatedItems = req.body.items;
                    updatedItems = [...updatedItems, yourItems];
                    result.updateOne({ items: updatedItems });
                    res.status(200).json({
                        message: "updated cart successfully"
                    });

                }

            }
        })

}); //end function


// router.get("/restaurant/:resId", (req, res, next) => {
//     const id = req.params.resId;
//     Order.find({ "restaurant": { _id: id } })
//         .exec()
//         .then(result => {
//             console.log(result);
//             res.status(201).json({
//                 Orders: result
//             });
//         });

// });

// router.get("/user/:userId", (req, res, next) => {
//     const id = req.params.userId;
//     Order.find({ "user": { _id: id } })
//         .exec()
//         .then(result => {
//             console.log(result);
//             res.status(201).json({
//                 Orders: result
//             });
//         });

// });


// router.get("/status/:status", (req, res, next) => {
//     const status = req.params.status;
//     Order.find({ status: status })
//         .exec()
//         .then(result => {
//             console.log(result);
//             res.status(201).json({
//                 Orders: result
//             });
//         });

// });

// router.get("/year/:year", (req, res, next) => {
//     const year = req.params.year;
//     Order.find({ year: year })
//         .exec()
//         .then(result => {
//             console.log(result);
//             res.status(201).json({
//                 Orders: result
//             });
//         });

// });
// router.get("/month", (req, res, next) => {
//     const agg = [
//         [{
//             $group: {
//                 _id: '$month',
//                 count: { $sum: 1 }
//             }
//         }]
//     ];
//     Order.aggregate(agg)
//         .exec()
//         .then(result => {
//             console.log(result);
//             res.status(201).json({
//                 Orders: result
//             });
//         });

// });



























// router.delete("/choice/:choId", (req, res, next) => {
//     const id = req.params.choId;
//     Choice.remove({ _id: id })
//         .exec()
//         .then(result => {
//             res.status(200).json({
//                 message: 'Choice deleted'
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });
// });


// router.put("/choice/:choId", (req, res, next) => {
//     const id = req.params.choId;

//     Choice.findOne({ _id: id })
//         .exec()
//         .then(choice => {
//             if (req.body.options) {
//                 const myOptions = [];
//                 const options = req.body.options;
//                 for (option of options) {
//                     myOptions.push(option);
//                 }
//                 choice.options = myOptions
//             }

//             choice.name = req.body.name ? req.body.name : choice.name;
//             choice.status = req.body.status ? req.body.status : choice.status;
//             return choice.save();
//         })
//         .then(result => {
//             res.status(200).json({
//                 myresopnse: result
//             });
//         })
//         .catch(err => {
//             console.log("error message" + err);
//         })
// });



module.exports = router;
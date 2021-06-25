const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Offer = require("../models/offer");
const Restaurant = require("../models/restaurant");
//for img upload*****
const fs = require("fs");
const path = require("path");
require("dotenv/config");
var multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
/**used storage */
var upload = multer({ storage: storage });


//ROUTES****************************************

router.post("/", upload.single("img"), (req, res, next) => {
  const offer = new Offer({
    _id: new mongoose.Types.ObjectId(),
    restaurant: req.body.restaurant,
    name: req.body.name,
    img: req.file.path,
    desc: req.body.desc,
    price: req.body.price,
  });
  offer
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Created offer successfully",
        createdOffer: {
          name: result.name,
          desc: result.desc,
          _id: result._id,
          restaurant: result.restaurant,
          request: {
            type: "GET",
            url: "http://localhost:3000/restaurants/category" + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
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

 Offer.find({restaurant:id})
   .exec()
   .then((doc) => {
     console.log("From database", doc);
     if (doc) {
       res.status(200).json({
         Offers: doc,
       });
     } else {
       res
         .status(404)
         .json({ message: "No valid entry found for provided ID" });
     }
   })
   .catch((err) => {
     console.log(err);
     res.status(500).json({ error: err });
   });
});

router.get("/singleOffer/:offerId", (req, res, next) => {
  const offerId = req.params.offerId;
  const resId = req.params.resId;

  Offer.find({ _id: offerId })
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          Offers: doc,
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});


router.delete("/singleOffer/:offerId", (req, res, next) => {
  const id = req.params.offerId;
  Offer.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Offer deleted' 
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.put("/singleOffer/:offerId", upload.single("img"), (req, res, next) => {
  const id = req.params.offerId;
  
  Offer.findOne({ _id: id })
    .exec()
    .then((offer) => {
      offer.name = req.body.name ? req.body.name : offer.name;
      offer.desc = req.body.desc ? req.body.desc : offer.desc;
      offer.price = req.body.price ? req.body.price : offer.price;
      offer.img = req.file.path ? req.file.path : offer.img;

      return offer.save();
    })
    .then((result) => {
      res.status(200).json({
        myresopnse: result,
      });
    })
    .catch((err) => {
      console.log("error message" + err);
    });
});
module.exports = router;

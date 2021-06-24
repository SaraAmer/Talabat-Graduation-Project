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

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Get req for /restaurants/foods"
    });
});


/////////////POST REQUEST /////////


// router.post("/", upload.single('img'), (req, res, next) => {
//     const food = new Food({
//       _id: new mongoose.Types.ObjectId(),
//       name: req.body.name, 
//       info: req.body.info,
//       desc: req.body.desc, 
//       type: req.body.type,
//       category: req.body.category,
//       website: req.body.website,
//       img: req.file.path ,
//       address: req.body.address,

//     });
//     restaurant
//       .save()
//       .then(result => {
//         console.log(result);
//         res.status(201).json({
//           message: "Created restaurant successfully",
//           createdRestaurant: {
//               name: result.name,
//               info: result.info,
//               img : result.img,
//               _id: result._id,
//               request: {
//                   type: 'GET',
//                   url: "http://localhost:3000/restaurant/" + result._id
//               }
//           }
//         });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json({
//           error: err
//         });
//       });
//   });

module.exports = router;
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
var Restaurant = require('../models/restaurant');
//************ for upload img
const fs = require('fs');
const path = require('path');
require('dotenv/config');
var multer = require('multer');
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
});
/**used storage */
var upload = multer({ storage:storage});

 
router.post("/", upload.single('img'), (req, res, next) => {
  const restaurant = new Restaurant({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name, 
    info: req.body.info,
    desc: req.body.desc, 
    type: req.body.type,
    numberOfBranches: req.body.numberOfBranches,
    category: req.body.category,
    website: req.body.website,
     img: req.file.path ,
    address: req.body.address,
   
  });
  restaurant
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created restaurant successfully",
        createdRestaurant: {
            name: result.name,
            info: result.info,
            img : result.img,
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

router.get("/", (req, res, next) => {
  Restaurant.find().exec()
    .then(docs => {
      const response = {
        count: docs.length,
        restaurants: docs.map(doc => {
          return {
            name: doc.name,
            info: doc.info,
            img: doc.img,
            address: doc.address,
            category: doc.category,
            website: doc.website,
            numberOfBranches: doc.numberOfBranches,
            resImg: doc.img,
             _id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost:3000/products/" + doc._id
            }
          };
        })
      };
     
      res.status(200).json(response);
    
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/:resId", (req, res, next) => {
  const id = req.params.resId;
 
  Restaurant.findById(id)
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
            restaurant: doc,
         
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

router.delete("/:resId", (req, res, next) => {
  const id = req.params.resId;
  Restaurant.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Restaurant deleted' 
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.put("/:resId", upload.single('img') ,(req, res, next) => {
  const id = req.params.resId;
  const name = req.body.name;

console.log("Right Scope"+ req.body.name);

Restaurant.findOne({ _id: id })
.exec()
.then(rest =>{
    rest.name = req.body.name? req.body.name : rest.name;
    rest.desc = req.body.desc? req.body.desc : rest.desc;  
    rest.info= req.body.info? req.body.info : rest.info;
    rest.category= req.body.category? req.body.category : rest.category;
    rest.website = req.body.website? req.body.website : rest.website;
    rest.address = req.body.address? req.body.address : rest.address;
    rest.type = req.body.type? req.body.type : rest.type;
    rest.numberOfBranches = req.body.numberOfBranches? req.body.numberOfBranches : rest.numberOfBranches;
   
    console.log("Request file"+req.file);
    console.log("rest Image"+ rest.img);
    rest.img=  req.file.path ?  req.file.path  : rest.img;
   
        return rest.save();
})
.then(result =>{
    res.status(200).json({
        myresopnse : result 
    });
})
.catch(err=>{
    console.log("error message"+ err);
})
});


module.exports = router;
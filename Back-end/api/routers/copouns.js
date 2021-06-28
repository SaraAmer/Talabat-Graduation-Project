const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Copoun = require("../models/copoun");
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

router.post("/", (req, res, next) => {
  const copoun = new Copoun({
    _id: new mongoose.Types.ObjectId(),
    restaurant: req.body.restaurant,
    limit: req.body.limit,
    desc: req.body.desc,
    code: req.body.code,
    discount: req.body.discount,
  });
  copoun
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Created copoun successfully",
        createdCopoun: {
          code: result.code,
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

router.get("/:resId", (req, res, next) => {
  const id = req.params.resId;

  Copoun.find({ restaurant: id })
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          Copouns: doc,
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

router.delete("/singleCopoun/:copounId", (req, res, next) => {
  const id = req.params.copounId;
  Copoun.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Copoun deleted",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.put(
  "/singleCopoun/:copounId",
  upload.single("img"),
  (req, res, next) => {
    const id = req.params.copounId;

    Copoun.findOne({ _id: id })
      .exec()
      .then((copoun) => {
        copoun.desc = req.body.desc ? req.body.desc : copoun.desc;
        copoun.discount = req.body.discount
          ? req.body.discount
          : copoun.discount;
        copoun.code = req.body.code ? req.body.code : copoun.code;
        copoun.limit = req.body.limit ? req.body.limit : copoun.limit;

        return copoun.save();
      })
      .then((result) => {
        res.status(200).json({
          myresopnse: result,
        });
      })
      .catch((err) => {
        console.log("error message" + err);
      });
  }
);

router.get("/singleCopoun/:copounId", (req, res, next) => {
  const copounId = req.params.copounId;
  const resId = req.params.resId;

  Copoun.find({ _id: copounId })
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          Copouns: doc,
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
module.exports = router;

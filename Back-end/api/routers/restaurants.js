const express = require("express");

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({

        message: "get request for /products"

    });
});

module.exports = router;
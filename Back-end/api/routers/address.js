const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Address = require("../models/address");
const { check, validationResult } = require('express-validator/check');
var crypto = require('crypto');

module.exports = router;
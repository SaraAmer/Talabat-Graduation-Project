const express = require("express");

const app = express();

const restaurantsRoutes = require("./api/routers/restaurants");


app.use('/restaurants', restaurantsRoutes);

module.exports = app;
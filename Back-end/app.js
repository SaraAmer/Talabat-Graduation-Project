const express = require("express");
const morgan = require("morgan");
const app = express();


//to show extra information when making a request
app.use(morgan('dev'));

const restaurantsRoutes = require("./api/routers/restaurants");


app.use('/restaurants', restaurantsRoutes);


//If reaches this line, then there is an error
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;

    next(error);
});
//handel error:
app.use((error, req, res, next) => {

    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });

});



module.exports = app;
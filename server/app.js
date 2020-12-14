require('dotenv').config();
require('./db');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/recipes', require('./apps/recipes/recipes.app'));

app.use('/*', (req, res) => {
    return res.status(404).send({ message: 'Not Found' });
});

// error handler
// next() required for wrap()
// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
    console.error(err.stack);

    res.status(500).send({ message: 'Internal Server Error' });
});

module.exports = app;

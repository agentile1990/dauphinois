const express = require('express');

const app = express();

app.use('/', require('./recipes.routes'));

module.exports = app;

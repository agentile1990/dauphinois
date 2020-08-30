'use strict';

const mongoose = require('mongoose');

const {DB_NAME, DB_USER, DB_PASS} = process.env;

const uri = `mongodb://${DB_USER}:${DB_PASS}@mongo:27017/${DB_NAME}?authSource=admin`;

let db;
mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(function() {
        db =mongoose.connection;
    })
    .catch(function(error) {
        console.error(error);
        process.exit(1);
    });

module.exports = db;

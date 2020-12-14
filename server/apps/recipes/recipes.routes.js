const express = require('express');
const { wrap } = require('@awaitjs/express');
const router = express.Router();

const Recipes = require('./recipes.controller');

router.route('/').get(wrap(Recipes.list)).post(wrap(Recipes.create));

router
    .route('/:id([a-fA-F0-9-]{24})')
    .get(wrap(Recipes.find))
    .put(wrap(Recipes.update))
    .delete(wrap(Recipes.delete));

module.exports = router;

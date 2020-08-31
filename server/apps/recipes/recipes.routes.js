const express = require('express');
const router = express.Router();

const Recipes = require('./recipes.controller');

router.route('/').get(Recipes.list).post(Recipes.create);

router
    .route('/:id')
    .get(Recipes.find)
    .put(Recipes.update)
    .delete(Recipes.delete);

module.exports = router;

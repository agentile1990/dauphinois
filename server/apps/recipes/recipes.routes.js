const express = require('express');
const router = express.Router();

const Recipes = require('./recipes.controller');

router.get('/', Recipes.list);

module.exports = router;
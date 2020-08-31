'use strict';
const _ = require('lodash');

const Recipe = require('./recipe');

class RecipesController {
    static async create(req, res) {
        const body = _.omit(req.body, [
            '_id',
            'createdBy',
            'createdAt',
            'updatedAt',
        ]);

        const recipe = await Recipe.create(body);

        req.params.id = recipe.id;

        return RecipesController.find(req, res);
    }

    static async find(req, res) {
        if (!req.params.id) {
            return res
                .status(400)
                .send({ message: 'id parameter is required' });
        }
        const recipe = await Recipe.findById(req.params.id);

        if (!recipe) {
            return res.status(404).send({
                message: `Could not find recipe with id: ${req.params.id}`,
            });
        }

        return res.send({ recipe });
    }

    static async list(req, res) {
        const recipes = await Recipe.find();

        return res.send(recipes);
    }

    static async update(req, res) {
        const body = _.omit(req.body, ['createdBy', 'createdAt', 'updatedAt']);

        const updated = await Recipe.findOneAndUpdate(body);

        if (!updated) {
            return res.status(404).send({
                message: `Could not find recipe with id: ${req.params.id}`,
            });
        }

        return RecipesController.find(req, res);
    }

    static async delete(req, res) {
        const recipe = await Recipe.findOneAndDelete(req.params.id);

        if (!recipe) {
            return res.status(404).send({
                message: `Could not find recipe with id: ${req.params.id}`,
            });
        }

        return res.status(200).send({});
    }
}

module.exports = RecipesController;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var RecipeSchema = new Schema(
    {
        name: String,
        description: String,
        servingTime: Number, // minutes
        author: String,
        ingredients: [
            {
                name: String,
                amount: String,
                unit: String,
            },
        ],
        instructions: String,
        createdBy: String,
        tags: [
            {
                name: String,
            },
        ],
    },
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt',
        },
    },
);

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;

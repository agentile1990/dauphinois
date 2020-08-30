'use strict';

class RecipesController { 
    static async list(req, res) {
        console.log('RecipesController - list');
        return res.send([]);
    }
}

module.exports = RecipesController;
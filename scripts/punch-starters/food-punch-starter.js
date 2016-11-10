let BasePunchStarter = require('./base-punch-starter.js');

class FoodPunchStarter extends BasePunchStarter {
    constructor(id, name, manufacturer, description, genres,
                targetPrice, ingredients, recipe) {
        super(id, name, manufacturer, description, genres, targetPrice);
        this._ingredients = ingredients;
        this._recipe = recipe;
        this.validate(ingredients, recipe);
    }

    get ingredients() {
        return this._ingredients
    }
    get recipe() {
        return this._recipe;
    }

    validate(ingredients, recipe) {
        if (ingredients.constructor !== Array) {
            throw new TypeError('actors should be an array!')
        } else {
            for(let ingredient of ingredients) {
                if(typeof ingredient !== "string") {
                    throw new TypeError('all actors should be strings');
                }
            }
        }
        if(typeof recipe !== "string") {
            throw new TypeError('director should be string');
        }

    }
}

module.exports = FoodPunchStarter;
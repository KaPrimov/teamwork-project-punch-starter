let BasePunchStarter = require('./base-punch-starter.js');
class CraftsPunchStarter extends BasePunchStarter{
    constructor(id, name, manufacturer, description, genres, targetPrice, resources) {
        super(id, name, manufacturer, description, genres, targetPrice);
        this.validateResources(resources);
        this._resources = resources;
    }

    get resources(){return this._resources}

    validateResources(resources) {
        if (resources.constructor !== Array) {
            throw new TypeError('Resources should be an array!')
        }

        for (let res of resources) {
            if (typeof res != 'string') {
                throw new TypeError('All resources should be strings!')
            }
        }
    }
}

module.exports = CraftsPunchStarter;
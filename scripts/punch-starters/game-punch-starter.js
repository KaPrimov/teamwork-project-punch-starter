let BasePunchStarter = require('./base-punch-starter.js');
class GamePunchStarter extends BasePunchStarter{
	constructor(id, name, manufacturer, description, genres, targetPrice,	technologiesUsed ){
    super(id,name,manufacturer,description,genres,targetPrice);
        this.technologiesUsed =technologiesUsed;
        this.validateTechnologies(technologiesUsed);
    }
    validateTechnologies(technologies) {
        if (technologies.constructor !== Array) {
            throw new TypeError('TechnologiesUsed should be an array!')
        }
        for (let techn of technologies) {
            if (typeof techn != 'string') {
                throw new TypeError('All technologies should be strings!')
            }
        }
    }
}

module.exports = GamePunchStarter;
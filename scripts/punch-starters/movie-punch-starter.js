let BasePunchStarter = require('./base-punch-starter.js');

class MoviePunchStarter extends BasePunchStarter {
    constructor(id, name, manufacturer, description, genres,
                targetPrice, director, actors) {
        super(id, name, manufacturer, description, genres, targetPrice);
        this._director = director;
        this._actors = actors;
        this.validate(this._director, this._actors);
    }

    get director() {
        return this._director
    }
    get actors() {
        return this._actors;
    }

    validate(director, actors) {
        if(typeof director !== "string") {
            throw new TypeError('director should be string');
        }

        if (actors.constructor !== Array) {
            throw new TypeError('actors should be an array!')
        } else {
            for(let actor of actors) {
                if(typeof actor !== "string") {
                    throw new TypeError('all actors should be strings');
                }
            }
        }

    }
}

module.exports = MoviePunchStarter;
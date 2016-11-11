function validateParameters(id, name, manufacturer, description, genres, targetPrice) {
    if (typeof id != 'number') {
        throw new TypeError('Id should be a number!')
    }
    if (typeof name != 'string') {
        throw new TypeError('Name should be a string!')
    }
    if (typeof manufacturer != 'string') {
        throw new TypeError('Manufacturer should be a string!')
    }
    if (typeof description != 'string') {
        throw new TypeError('Description should be a string!')
    }
    if (genres.constructor !== Array) {
        throw new TypeError('Genres should be a array!')
    }
    for (let genre of genres) {
        if (typeof genre != 'string') {
            throw new TypeError('All genres should be a string!')
        }
    }
    if (isNaN(targetPrice)) {
        throw new TypeError('TargetPrice should be a number!')
    }
}

class BasePunchStarter {
    constructor(id, name, manufacturer, description, genres, targetPrice) {
        if (new.target === BasePunchStarter) {
            throw new Error('Cannot instance an abstract class!')
        }
        validateParameters(id, name, manufacturer, description, genres, targetPrice);
        this._id = id;
        this._name = name;
        this._manufacturer = manufacturer;
        this._description = description;
        this._genres = genres;
        this._targetPrice = targetPrice;
        this._accumulatedMoney = 0;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get manufacturer() {
        return this._manufacturer;
    }

    get description() {
        return this._description;
    }

    get genres() {
        return this._genres;
    }

    get targetPrice() {
        return this._targetPrice;
    }

    get accumulatedMoney() {
        return this._accumulatedMoney;
    }

    set accumulatedMoney(value) {
        if (typeof  value != 'number') {
            throw new Error('AccumulatedMoney should be a number!')
        }
        this._accumulatedMoney = value;
    }
}

module.exports = BasePunchStarter;

class PunchStarterModel {
	constructor() {
        this._category = 'Movie';
    }

    get category() {
        return this._category
    }

    set category(category) {
        this._category = category;
    }
}

module.exports = PunchStarterModel;
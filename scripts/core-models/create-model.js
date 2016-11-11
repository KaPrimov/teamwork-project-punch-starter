let MoviePunchStarter = require('../punch-starters/movie-punch-starter.js');
let GamePunchStarter = require('../punch-starters/game-punch-starter.js');
let InnovativePunchStarter = require('../punch-starters/innovative-punch-starter.js');
let FoodPunchStarter = require('../punch-starters/food-punch-starter.js');
let CraftsPunchStarter = require('../punch-starters/crafts-punch-starter.js');

let id = 1;
class CreateModel {
    constructor() {
        this.id = id++;
        this.category = 'Movie'
    }
    get category() {
        return this._category
    }

    set category(category) {
        this._category = category;
    }

    render(categories) {
        let options = '';
        let keys = Object.keys(categories);
        for (let i = 0; i < keys.length; i++) {
            let currentCategory = categories[keys[i]];
            if (currentCategory === 'Movie') {
                options += `<option selected value="${currentCategory}">${currentCategory}</option>`
            } else {
                options += `<option value="${currentCategory}">${currentCategory}</option>`
            }

        }
        let HTML = this.renderCreateMovieModel();

        let html = '';
        html += `<div class="create-title">Create a PunchStarter</div>`;
        html += `<div class="punch-starter-category"><select>${options}</select></div>`;
        html +=
            `<div class="create-form-holder">
    <form>
        <div class="main-parameters">
            <label>Name:</label>
            <div class="input-holder">
                <input class="input-name" type="text" placeholder="Name..." maxlength="20"/>
            </div>
            <label>Manufacturer:</label>     
            <div class="input-holder">
                <input class="input-manufacturer" type="text" placeholder="Manufacturer..." maxlength="20"/>
            </div>
            <label>Description:</label>
            <div class="input-holder"><textarea class="input-description" placeholder="Description..." rows="2"/></div>
        </div>
        <div class="secondary-parameters">
            <label>Genres:</label>
            <div class="list-holder">
            <select class="input-genres"></select>           
            </div>
            <div class="input-holder">
                <input class="new-genre" type="text" placeholder="Add genre...">
            </div>
            <div class="button-holder">
                <button class="add-genre-button">Add</button>
                <button class="remove-genre-button">Remove</button>
            </div>
            <label>Target Price:</label>
            <div class="input-holder" >
            <input class="input-target-price" type="number" placeholder="Target Price..."/>
            </div>
        </div>
        <div class="individual-parameters">
            ${HTML}
        </div>
    </form>
    <div class="submit-button-holder">
        <button>Submit PunchStarter</button>
    </div>
</div>`;

        $('.wrapper main').html(html);
        this.attachEventsCreateMovieModel();
    }

    attachEvents() {
        let that = this;
        $('.punch-starter-category select').on('change', function () {
            let html = '';
            let correctEvent = new Function();
            that.category = $(this).val();
            switch (that.category) {
                case 'Movie':
                    html = that.renderCreateMovieModel();
                    correctEvent = that.attachEventsCreateMovieModel;
                    break;
                case 'Game':
                    html = that.renderCreateGameModel();
                    correctEvent = that.attachEventsCreateGameModel;
                    break;
                case 'Innovative':
                    html = that.renderCreateInnovativeModel();
                    break;
                case 'Food':
                    html = that.renderCreateFoodModel();
                    correctEvent = that.attachEventsCreateFoodModel;
                    break;
                case 'Crafts':
                    html = that.renderCreateCraftsModel();
                    correctEvent = that.attachEventsCreateCraftsModel;
                    break;
            }
            $('.individual-parameters').html(html);
            correctEvent();
        });
        this.addGenres();
        this.submitPunchStarter();
    }

    renderCreateMovieModel() {
        let html = '';
        html +=
            `<label>Director:</label>
            <div class="input-holder">
            <input class="input-director" type="text" placeholder="Director..."/>
            </div>
            <label>Actors:</label>
            <div class="list-holder">
                <select class="input-actors"></select>
            </div>            
            <div class="input-holder">
                <input class="new-actor" placeholder="Add actor...">
            </div>
            <div class="button-holder">
                <button class="add-actor-button">Add</button>
                <button class="remove-actor-button">Remove</button>
            </div>`;

        return html;

    }

    attachEventsCreateMovieModel() {
        $('.add-actor-button').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            let actorName = $('.new-actor').val();
            if (actorName !== '') {
                $('.input-actors').append($(`<option value="${actorName}">${actorName}</option>`))
                $('.new-actor').val('');
            }
        });
        $('.remove-actor-button').on('click', function () {
            event.preventDefault();
            event.stopPropagation();
            let actorName = $('.input-actors').find(':selected').remove();
        })
    }

    renderCreateGameModel() {
        let html = '';
        html +=
            `
            <label>Technologies:</label>
            <div class="list-holder">
                <select class="input-technologies"></select>
            </div>            
            <div class="input-holder">
                <input class="new-technology" placeholder="Add technology...">
            </div>
            <div class="button-holder">
                <button class="add-technology-button">Add</button>
                <button class="remove-technology-button">Remove</button>
            </div>`;

        return html;
    }

    attachEventsCreateGameModel() {
        $('.add-technology-button').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            let technology = $('.new-technology').val();
            if (technology !== '') {
                $('.input-technologies').append($(`<option value="${technology}">${technology}</option>`))
                $('.new-technology').val('');
            }
        });
        $('.remove-technology-button').on('click', function () {
            event.preventDefault();
            event.stopPropagation();
            let technology = $('.input-technologies').find(':selected').remove();
        })
    }

    renderCreateInnovativeModel() {
        return ''
    }

    renderCreateFoodModel() {
        let html = '';
        html +=
            `<label>Ingredients:</label>
            <div class="list-holder">
                <select class="input-ingredients"></select>
            </div>            
            <div class="input-holder">
                <input class="new-ingredient" placeholder="Add ingredient...">
            </div>
            <div class="button-holder">
                <button class="add-ingredient-button">Add</button>
                <button class="remove-ingredient-button">Remove</button>
            </div>
            <label>Recipe:</label>
            <div class="input-holder">
            <textarea class="input-recipe" placeholder="Recipe..." rows="2"/>
            </div>`;

        return html;
    }

    attachEventsCreateFoodModel() {
        $('.add-ingredient-button').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            let ingredient = $('.new-ingredient').val();
            if (ingredient !== '') {
                $('.input-ingredients').append($(`<option value="${ingredient}">${ingredient}</option>`));
                $('.new-ingredient').val('');
            }
        });
        $('.remove-ingredient-button').on('click', function () {
            event.preventDefault();
            event.stopPropagation();
            let ingredient = $('.input-ingredients').find(':selected').remove();
        })
    }

    renderCreateCraftsModel() {
        let html = '';
        html +=
            `
            <label>Resources:</label>
            <div class="list-holder">
                <select class="input-resources"></select>
            </div>            
            <div class="input-holder">
                <input class="new-resource" placeholder="Add resource...">
            </div>
            <div class="button-holder">
                <button class="add-resource-button">Add</button>
                <button class="remove-resource-button">Remove</button>
            </div>`;

        return html;
    }

    attachEventsCreateCraftsModel() {
        $('.add-resource-button').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            let resource = $('.new-resource').val();
            if (resource !== '') {
                $('.input-resources').append($(`<option value="${resource}">${resource}</option>`));
                $('.new-resource').val('');
            }
        });
        $('.remove-resource-button').on('click', function () {
            event.preventDefault();
            event.stopPropagation();
            let ingredient = $('.input-resources').find(':selected').remove();
        })
    }

    addGenres() {
        $('.add-genre-button').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            let genre = $('.new-genre').val();
            if (genre !== '') {
                $('.input-genres').append($(`<option value="${genre}">${genre}</option>`))
                $('.new-genre').val('');
            }
        });
        $('.remove-genre-button').on('click', function () {
            event.preventDefault();
            event.stopPropagation();
            let actorName = $('.input-genres').find(':selected').remove();
        })
    }
    submitPunchStarter() {
        let that = this;
        $('.submit-button-holder button').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            let name = $('.input-name').val() ;
            let manufacturer = $('.input-manufacturer').val();
            let description = $('.input-description').val();
            let genres = [];
            $('.input-genres option').each(function () {
                genres.push($(this).val());
            });
            let targetPrice = $('.input-target-price').val() || 0;
            let punchStarter = {};
            that.validate(name, manufacturer, description);
            if(that.category === 'Movie') {
                let director = $('.input-director').val();
                let actors = [];
                $('.input-actors option').each(function () {
                    actors.push($(this).val());
                });
                that.validate(director);
                punchStarter = new MoviePunchStarter(that.id, name, manufacturer, description, genres, targetPrice, director, actors)
            } else if (that.category === 'Game') {
                let tech = [];
                $('.input-technologies option').each(function () {
                    tech.push($(this).val());
                });
                punchStarter = new GamePunchStarter(that.id, name, manufacturer, description, genres, targetPrice, tech)
            } else if (that.category === 'Innovative') {

                punchStarter = new InnovativePunchStarter(that.id, name, manufacturer, description, genres, targetPrice)
            } else if (that.category === 'Food') {
                let ingredients = [];
                let recipe = $('.input-recipe').val();
                $('.input-ingredients option').each(function () {
                    ingredients.push($(this).val());
                });
                that.validate(recipe);
                punchStarter = new FoodPunchStarter(that.id, name, manufacturer, description, genres, targetPrice, ingredients, recipe)
            } else if (that.category === 'Crafts') {
                let resources = [];
                $('.input-resources option').each(function () {
                    resources.push($(this).val());
                });
                punchStarter = new CraftsPunchStarter(that.id, name, manufacturer, description, genres, targetPrice, resources);
            }
            $('.wrapper main').trigger('createPunchStarter', [punchStarter]);
        })
    }
    validate() {
        for (let i = 0; i < arguments.length; i++) {
            if(arguments[i] === '') {
                throw new TypeError;
            }

        }

    }
}

module.exports = CreateModel;
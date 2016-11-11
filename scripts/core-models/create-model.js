class CreateModel {
    render(categories){
        let options = '';
        let keys = Object.keys(categories);
        for (let i = 0; i < keys.length; i++) {
            let currentCategory = categories[keys[i]];
            if(currentCategory === 'Movie') {
                options += `<option selected value="${currentCategory}">${currentCategory}</option>`
            } else {
                options += `<option value="${currentCategory}">${currentCategory}</option>`
            }

        }
        let movieHTML = this.renderCreateMovieModel();

        let html = '';
        html += `<div class="create-title">Create a PunchStarter</div>`;
        html+= `<div class="punch-starter-category"><select>${options}</select></div>`;
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
                <input class="input-genres" type="text" placeholder="Add genre...">
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
            ${movieHTML}
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
            let category = $(this).val();
            switch (category) {
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
            $('.input-actors').append($(`<option value="${actorName}">${actorName}</option>`))
            $('.new-actor').val('');
        });
        $('.remove-actor-button').on('click', function () {
            event.preventDefault();
            event.stopPropagation();
            let actorName = $('.input-actors').find(':selected').remove();
        })
    }
    renderCreateGameModel() {
        
    }
    attachEventsCreateGameModel(){}
    renderCreateInnovativeModel() {}
    renderCreateFoodModel() {}
    attachEventsCreateFoodModel() {}
    renderCreateCraftsModel() {}
    attachEventsCreateCraftsModel() {}
}

module.exports = CreateModel;
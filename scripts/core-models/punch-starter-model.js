class PunchStarterModel {
	render(punchStarter){
        let html = `
        <div class="punch-starter-wrapper">
            <div class="punch-starter-caption">
                <label>${punchStarter.name}</label>
                <label>${punchStarter.constructor.name.replace('PunchStarter', '')}</label>
            </div>
            <div class="punch-starter-resume">
                <label>Manufacturer</label>
                <p>${punchStarter.manufacturer}</p>
                <label>Description</label>
                <p>${punchStarter.description}</p>
            </div>            
            <div class="punch-starter-lists">                
            </div>
            <div class="punch-starter-progress"></div>
        </div>`;
        $('.wrapper main').html(html);
        this.attachEvents(punchStarter);
        this.renderLists(punchStarter);
        this.renderProgress(punchStarter);
    }

    attachEvents(punchStarter) {
        $('#donate-btn').on('click', function (event) {
            event.preventDefault();
            let valueToAdd = Number($('#donate-value').val());
            punchStarter.accumulatedMoney += valueToAdd;
            $('.wrapper main').trigger('changePage', ['details', punchStarter]);
        })
    }
    renderLists(punchStarter) {
        let lis = '';
        for (let i = 0; i < punchStarter.genres.length; i++) {
            let currentGenre = punchStarter.genres[i];
            lis += `<li>${currentGenre}</li>`
        }
        let html =`<div><label>Genres</label><ul>${lis}</ul></div>`;
        if(punchStarter.constructor.name == 'MoviePunchStarter') {
            let lis = '';
            for (let i = 0; i < punchStarter.actors.length; i++) {
                let currentActor = punchStarter.actors[i];
                lis += `<li>${currentActor}</li>`
            }
            html+= `<div>
                <label>Actors</label>
                <ul>${lis}</ul>
            </div>
            <div>
            <label>Director</label>
            <p>${punchStarter.director}</p>
            </div>`
        } else if(punchStarter.constructor.name == 'GamePunchStarter') {
            let lis = '';
            for (let i = 0; i < punchStarter.technologiesUsed.length; i++) {
                let currentTech = punchStarter.technologiesUsed[i];
                lis += `<li>${currentTech}</li>`
            }
            html += `<div>
                <label>Technologies Used</label>
                <ul>${lis}</ul>
            </div>`
        } else if(punchStarter.constructor.name == 'FoodPunchStarter') {
            let lis = '';
            for (let i = 0; i < punchStarter.ingredients.length; i++) {
                let currentIngredient = punchStarter.ingredients[i];
                lis += `<li>${currentIngredient}</li>`
            }
            html += `<div>
                <label>Ingredients</label>
                <ul>${lis}</ul>
            </div>
            <div>
            <label>Recipe</label>
            <p>${punchStarter.recipe}</p>
            </div>`
        } else if(punchStarter.constructor.name == 'CraftsPunchStarter') {
            let lis = '';
            for (let i = 0; i < punchStarter.resources.length; i++) {
                let currentResource = punchStarter.resources[i];
                lis += `<li>${currentResource}</li>`
            }
            html += `<div>
                <label>Resources</label>
                <ul>${lis}</ul>
            </div>`
        }
          $('.punch-starter-lists').html(html);
    }

    renderProgress(punchStarter) {
        let progress = Math.trunc((punchStarter.accumulatedMoney / punchStarter.targetPrice) * 100);
        if(punchStarter.targetPrice === 0) {
            progress = 100;
        }
        let html ='';
        html += `<p>Progress</p>
                <div class="donate-holder">
                    <div class="progress-bar-outer">
                        <div class="progress-bar-inner">
                            ${progress}%
                        </div>
                    </div>
                    <input type="number" id="donate-value"/>
                <button id="donate-btn">Donate</button>
                </div>`;
        $('.punch-starter-progress').html(html);
        $('.progress-bar-inner').css('width', (progress < 100 ? (progress * 0.7) + 'vw' : '70vw'));
    }
}

module.exports = PunchStarterModel;
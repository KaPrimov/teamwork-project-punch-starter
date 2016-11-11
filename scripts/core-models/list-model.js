class ListModel {
	constructor(){

    }
    
    render(database){
        database.sort(function (a,b) {
            return a.id - b.id;
        });

        let table = '';

        for (let i = 0; i < database.length; i++) {
            let current = database[i];
            let per = (current.accumulatedMoney /current.targetPrice)*100;
        if (current.targetPrice === 0) {
            per = 100;
        }
             table +=`<tr><td>${current.id}</td><td>${current.name}</td><td>${current.manufacturer}</td><td>${current.constructor.name.replace('PunchStarter','')}</td><td>${per.toFixed(2)}%</td></tr>\n`;
        }

        let header = `<tr><th>ID</th><th>Name</th><th>Manufacturer</th><th>Type</th><th>Progress</th></tr>`;
        let html =            `
<div class="punch-starter-list-holder">
    <table class="punch-starter-table">
        ${header}    
        ${table}
    </table>
</div>`;
$('.wrapper main').html(html);
    }

    attachEvents(punchStarterDatabase){
        $('.punch-starter-table tr').each(function (index) {
            if(index !== 0) {
                $(this).on('click', function () {
                    $('.wrapper main').trigger('changePage', ['details', punchStarterDatabase[index-1]] );
                })
            }
        })
    }
}

module.exports = ListModel;
const database = require('../data/database');

function showhunts(req, res) {
    database.getDb().collection('upcominghunts').find().toArray().then(function (hunts) {
        // console.log(hunts);
        let names = [];
        for (let hunt of hunts) {
            // let form = document.getElementById('form');
            // let input1 = document.createElement('p');
            // input1.innerHTML = `${hunt.huntname}`;
            // form.appendChild(input1);
            // console.log(hunt.huntname);
            // res.send(hunt.huntname);

            names.push(hunt.huntname);
        }
        console.log(names);

        res.render('upcomings', {names: names});
        
        
    }).catch(function (err) {
        console.log(err);
    });
}

module.exports = {
    showhunts: showhunts
};
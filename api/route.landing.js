const express = require('express');
const landingRoutes = express.Router();

// Require Landing model in our routes module
let Landing = require('./model.landing');

// Defined store route
landingRoutes.route('/add').post(function (req, res) {
    let landing = new Landing(req.body);
    city.save()
        .then(city => {
            res.status(200).json({'landing': 'landing in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
landingRoutes.route('/').get(function (req, res) {
    Landing.find(function(err, landing){
        if(err){
            console.log(err);
        }
        else {
            res.json(landing);
        }
    });
});

// Defined edit route
landingRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Landing.findById(id, function (err, landing){
        res.json(landing);
    });
});

//  Defined update route
landingRoutes.route('/update/:id').post(function (req, res) {
    Landing.findById(req.params.id, function(err, landing) {
        if (!landing)
            res.status(404).send("data is not found");
        else {
            console.log(landing);
            landing.name = req.body.name;
            landing.image = req.body.image;

            landing.save().then(landing => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
landingRoutes.route('/delete/:id').get(function (req, res) {
    Landing.findByIdAndRemove({_id: req.params.id}, function(err, landing){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = landingRoutes;
const express = require('express');
const citiesRoutes = express.Router();

// Require Cities model in our routes module
let Cities = require('./model.cities');

// Defined store route
citiesRoutes.route('/add').post(function (req, res) {
    let cities = new Cities(req.body);
    cities.save()
        .then(cities => {
            res.status(200).json({'cities': 'cities in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
citiesRoutes.route('/').get(function (req, res) {
    Cities.find(function(err, cities){
        if(err){
            console.log(err);
        }
        else {
            res.json(cities);
        }
    });
});

// Defined edit route
citiesRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Cities.findById(id, function (err, cities){
        res.json(cities);
    });
});

//  Defined update route
citiesRoutes.route('/update/:id').post(function (req, res) {
    Cities.findById(req.params.id, function(err, cities) {
        if (!cities)
            res.status(404).send("data is not found");
        else {
            console.log(cities);
            cities.name = req.body.name;
            cities.image = req.body.image;
            cities.map = req.body.map;

            cities.save().then(cities => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
citiesRoutes.route('/delete/:id').get(function (req, res) {
    Cities.findByIdAndRemove({_id: req.params.id}, function(err, cities){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = citiesRoutes;
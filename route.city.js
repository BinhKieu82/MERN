const express = require('express');
const CityRoutes = express.Router();

// Require City model in our routes module
let City = require('./model.city');

// Defined store route
CityRoutes.route('/add').post(function (req, res) {
    let city = new City(req.body);
    city.save()
        .then(city => {
            res.status(200).json({'city': 'city in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
CityRoutes.route('/').get(function (req, res) {
    City.find(function(err, city){
        if(err){
            console.log(err);
        }
        else {
            res.json(city);
        }
    });
});

// Defined edit route
CityRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    City.findById(id, function (err, city){
        res.json(city);
    });
});

//  Defined update route
CityRoutes.route('/update/:id').post(function (req, res) {
    City.findById(req.params.id, function(err, city) {
        if (!city)
            res.status(404).send("data is not found");
        else {
            console.log(city);
            city.name = req.body.name;            
            city.image = req.body.image;
            city.map = req.body.map;
            city.desc = req.body.desc;

            city.save().then(city => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
CityRoutes.route('/delete/:id').get(function (req, res) {
    City.findByIdAndRemove({_id: req.params.id}, function(err, city){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = CityRoutes;
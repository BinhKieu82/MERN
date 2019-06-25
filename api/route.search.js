const express = require('express');
const searchRoutes = express.Router();

// Require Search model in our routes module
let Search = require('./model.cities');

// Defined get data(index or listing) route
searchRoutes.route('/').get(function (req, res) {
    Search.find(function(err, search){
        if(err){
            console.log(err);
        }
        else {
            let data = res.json(search);
        }
        return data;
    });
});

module.exports = searchRoutes;
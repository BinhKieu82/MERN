const express = require('express');
const iconRoutes = express.Router();

// Require Icon model in our routes module
let Icon = require('./model.icons');

// Defined get data(index or listing) route
iconRoutes.route('/').get(function (req, res) {
    Icon.find(function(err, icons){
        if(err){
            console.log(err);
        }
        else {
            res.json(icons);
        }
    });
});

module.exports = iconRoutes;
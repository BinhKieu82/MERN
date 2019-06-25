const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection (Persons) and schema for Business
let Cities = new Schema(
    {
    name: {
        type: String,
        lowercase: true,
        },
    image: {type: String},
    map: {type: String}
    }, 
    {collection: 'cities'}
);

module.exports = mongoose.model('Cities', Cities);
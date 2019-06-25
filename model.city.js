const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection (Persons) and schema for Business
let City = new Schema(
    {
    name: {
        type: String,
        lowercase: true,
        },
    image: {type: String},
    map: {type: String},
    desc: {type: String}
    }, 
    {collection: 'city'}
);

module.exports = mongoose.model('City', City);
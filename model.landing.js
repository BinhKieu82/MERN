const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Landing = new Schema(
    {
    name: {
        type: String,
        lowercase: true,
        },
    image: {type: String}
    }, 
    {collection: 'landing'}
);

module.exports = mongoose.model('Landing', Landing);
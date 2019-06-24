const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Icons
let Icons = new Schema({
    name: {
        type: String  
        },
    image: {
        type: String
        }
    },
    {
    collection: 'icons'
    }
);

module.exports = mongoose.model('Icons', Icons);
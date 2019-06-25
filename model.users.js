const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Login/Signup
let Users = new Schema({
    username: {
        type: String,
        lowercase: true,
        },
    email: {
        type: String,
        required: true,
        unique: true
        },
    password: {
        type: String        
        },
    photo: {
        type: String
        },
    firstname: {
        type: String,
        lowercase: true,
        },
    lastname: {
        type: String,
        lowercase: true,
        },
    country: {
        type: String,
        lowercase: true,
        }
    }, 
    {
    collection: 'users'
    }
);

module.exports = mongoose.model('Users', Users);
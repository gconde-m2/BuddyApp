const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({

    username: {
        type: String, 
        required: true,
        default: 'username',
        trim: true
    },

    password: {
        type: String,
        required: true,
        default: 'password',
        minlength: 5,
        trim: true
    },

    associationName: {
        type: String,
    },

    cif: {
        type: String,
        maxlength: 9,
        minlength: 9
    },

    image: {
        type: String,
    },

    email: {
        type: String,
        required: true,
        default: 'Email-needed',
        trim: true
    }


},
    {
        timestamps: true
        
    })


const User = mongoose.model('User', userSchema)

module.exports = User
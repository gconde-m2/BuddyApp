const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dogSchema = new Schema({

    name: {
        type: String,
        required: true,
        default: 'dog',
    },

    age: {
        type: String,
        required: true,
        default: 'To be noticed'
    },

    race: {
        type: String,
    },

    gender: {
        type: String,
        trim: true,
        required: true,
        default: 'To be noticed'
    },

    description: {
        type: String
    },

    imageUrl: {               
        type: [String]
    },

    // owner: {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     rel: 'User'
    // }

},
    {
        timestamps: true
        
    })

    
const Dog = mongoose.model('Dog', dogSchema)

module.exports = Dog
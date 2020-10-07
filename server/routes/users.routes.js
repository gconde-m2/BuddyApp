const express = require('express')
const router = express.Router()

const User = require('../models/user.model')

//Endpoints

router.get('getUsers', (req, res) => {

    User.find()
        .then(response => res.json(response))
        .catch(error => console.log('Error!', error))
})

module.exports = router
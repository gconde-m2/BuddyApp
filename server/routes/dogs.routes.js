const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Dog = require('../models/dog.model')

// Endpoints
router.get('/getDogs', (req, res) => {

    Dog.find()
        .then(response => res.json(response))
        .catch(error => console.log('Error!', error))
})

router.get('/getOneDog/:dog_id', (req, res) => {

    const id = req.params.dog_id

    Dog.findById(id)
        .then(response => res.json(response))
        .catch(error => console.log('Error!', error))
})

module.exports = router

const express = require('express')
const router = express.Router()

const Dog = require('../models/dog.model')

// Endpoints
router.get('/getDogs', (req, res) => {

    Dog.find()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

router.get('/getOneDog/:dog_id', (req, res) => {

    const id = req.params.dog_id

    Dog.findById(id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

router.post('/newDog', (req, res) => {

    Dog.create(req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


router.put('/editDog/:dog_id', (req, res) => {
    const id = req.params.dog_id
    Dog.findByIdAndUpdate(id, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


router.post('/:dog_id/delete', (req, res) => {
    const id = req.params.dog_id
    Dog.findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

module.exports = router

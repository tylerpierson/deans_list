const express = require('express')
const router = express.Router()
const userCtrl = require('../../controllers/api/users')

// Create
router.post('/', userCtrl.create, userCtrl.jsonUser)

// Read
    //Index All
router.get('/', userCtrl.indexUsers, userCtrl.jsonUser)
    //Index Individual
router.get('/:id', userCtrl.showUser, userCtrl.jsonUser)
// Update
router.put('/:id', userCtrl.updateUser, userCtrl.jsonUser)

// Delete
router.delete('/:id', userCtrl.deleteUser, userCtrl.jsonUser)

module.exports = router
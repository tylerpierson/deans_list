const express = require('express')
const router = express.Router()
const userCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const checkToken = require('../../config/checkToken')

// Create
router.post('/admin', userCtrl.createAdmin, userCtrl.jsonUser)

router.post('/', checkToken, ensureLoggedIn, userCtrl.createUser, userCtrl.jsonUser)

// Login
router.post('/login', userCtrl.login, userCtrl.jsonUser)

// Read
    //Index All
router.get('/', userCtrl.indexUsers, userCtrl.jsonUser)
    //Index Individual
router.get('/:id', userCtrl.showUser, userCtrl.jsonUser)
// Update
router.put('/:id', checkToken, ensureLoggedIn, userCtrl.updateUser, userCtrl.jsonUser)

// Delete
router.delete('/:id', checkToken, ensureLoggedIn, userCtrl.deleteStudentOrParent, userCtrl.jsonUser)

module.exports = router
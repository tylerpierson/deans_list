const express = require('express')
const router = express.Router()
const userCtrl = require('../../controllers/api/users')

// Create
router.post('/', userCtrl.create, userCtrl.jsonUser)

// Read
    //Index
router.get('/', userCtrl.index, userCtrl.jsonUser)
module.exports = router
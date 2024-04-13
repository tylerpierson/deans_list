const express = require('express')
const router = express.Router()
const assignmentCtrl = require('../../controllers/api/assignments')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// Create
router.post('/', checkToken, ensureLoggedIn, assignmentCtrl.teacherRole, assignmentCtrl.create, assignmentCtrl.jsonAssignment)

// Read
    //Index All
router.get('/', assignmentCtrl.indexAssignments, assignmentCtrl.jsonAssignment)
    //Index Individual
router.get('/:id', assignmentCtrl.showAssignment, assignmentCtrl.jsonAssignment)
// Update
router.put('/:id', checkToken, ensureLoggedIn, assignmentCtrl.updateAssignment, assignmentCtrl.jsonAssignment)

// Delete
router.delete('/:id', checkToken, ensureLoggedIn, assignmentCtrl.deleteAssignment, assignmentCtrl.jsonAssignment)

module.exports = router
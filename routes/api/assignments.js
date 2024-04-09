const express = require('express')
const router = express.Router()
const assignmentCtrl = require('../../controllers/api/assignments')

// Create
router.post('/', assignmentCtrl.create, assignmentCtrl.jsonAssignment)

// Read
    //Index All
router.get('/', assignmentCtrl.indexAssignments, assignmentCtrl.jsonAssignment)
    //Index Individual
router.get('/:id', assignmentCtrl.showAssignment, assignmentCtrl.jsonAssignment)
// Update
router.put('/:id', assignmentCtrl.updateAssignment, assignmentCtrl.jsonAssignment)

// Delete
router.delete('/:id', assignmentCtrl.deleteAssignment, assignmentCtrl.jsonAssignment)

module.exports = router
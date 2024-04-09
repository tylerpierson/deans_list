const express = require('express')
const router = express.Router()
const campusCtrl = require('../../controllers/api/campuses')

// Create
router.post('/', campusCtrl.create, campusCtrl.jsonCampus)

// Read
    //Index All
router.get('/', campusCtrl.indexCampuses, campusCtrl.jsonCampus)
    //Index Individual
router.get('/:id', campusCtrl.showCampus, campusCtrl.jsonCampus)
// Update
router.put('/:id', campusCtrl.updateCampus, campusCtrl.jsonCampus)

// Delete
router.delete('/:id', campusCtrl.deleteCampus, campusCtrl.jsonCampus)

module.exports = router
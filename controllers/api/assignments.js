const Assignment = require('../../models/assignment')


module.exports = {
    create,
    indexAssignments,
    showAssignment,
    updateAssignment,
    deleteAssignment,
    jsonAssignments,
    jsonAssignment,
    teacherRole
}

// teacherRole middleware to prevent students from accessing certain datasets
async function teacherRole(req, res, next){
    if(req.user.role !== 'teacher') {
        res.status(401).json('Permission Denied')
        return
    }
    next()
}

// jsonAssignments jsonAssignment
// viewControllers

function jsonAssignment (_, res) {
    res.json(res.locals.data.assignment)
}

function jsonAssignments (_, res) {
    res.json(res.locals.data.assignments)
}

/****** C - Create *******/
async function create(req, res, next){
    try {
        const assignment = await Assignment.create(req.body)
        console.log(assignment)
        res.locals.data.assignment = assignment
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/****** R - Read *******/
    /****** Index All Assignments *******/
async function indexAssignments(req, res, next){
    try {
        const assignment = await Assignment.find({})
        console.log(assignment)
        res.locals.data.assignment = assignment
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

    /****** Index Individual Assignment *******/
async function showAssignment(req, res, next){
    try {
        const assignment = await Assignment.findById({_id: req.params.id})
        console.log(assignment)
        res.locals.data.assignment = assignment
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/****** U - Update *******/
async function updateAssignment(req, res, next) {
    try {
        const assignment = await Assignment.findOneAndUpdate(
            { _id: req.params.id }, // Filter: Find the assignment by ID
            req.body, // Update: Update with the request body
            { new: true } // Options: Return the modified document
        );
        res.locals.data.assignment = assignment;
        next();
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

/****** D - Delete *******/
async function deleteAssignment(req ,res,next) {
    try {
        await Assignment.findOneAndDelete({_id : req.params.id})
        res.json({ message: `Assignment@${req.params.id} has been deleted successfully.` })
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
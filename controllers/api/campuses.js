const Campus = require('../../models/campus')


module.exports = {
    create,
    indexCampuses,
    showCampus,
    updateCampus,
    deleteCampus,
    jsonCampuses,
    jsonCampus
}

// jsonCampuses jsonCampus
// viewControllers

function jsonCampus (_, res) {
    res.json(res.locals.data.assignment)
}

function jsonCampuses (_, res) {
    res.json(res.locals.data.assignments)
}

/****** C - Create *******/
async function create(req, res, next){
    try {
        const assignment = await Campus.create(req.body)
        console.log(assignment)
        res.locals.data.assignment = assignment
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/****** R - Read *******/
    /****** Index All Campuses *******/
async function indexCampuses(req, res, next){
    try {
        const assignment = await Campus.find({})
        console.log(assignment)
        res.locals.data.assignment = assignment
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

    /****** Index Individual Campus *******/
async function showCampus(req, res, next){
    try {
        const assignment = await Campus.findById({_id: req.params.id})
        console.log(assignment)
        res.locals.data.assignment = assignment
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/****** U - Update *******/
async function updateCampus(req, res, next) {
    try {
        const assignment = await Campus.findOneAndUpdate(
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
async function deleteCampus(req ,res,next) {
    try {
        await Campus.findOneAndDelete({_id : req.params.id})
        res.json({ message: `Campus@${req.params.id} has been deleted successfully.` })
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
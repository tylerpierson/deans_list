const User = require('../../models/user')


module.exports = {
    create,
    jsonUsers,
    jsonUser
}

// jsonUsers jsonUser
// viewControllers

function jsonUser (_, res) {
    res.json(res.locals.data.user)
}

function jsonUsers (_, res) {
    res.json(res.locals.data.users)
}

/****** C - Create *******/
async function create(req, res, next){
    try {
        const user = await User.create(req.body)
        console.log(user)
        res.locals.data.user = user
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
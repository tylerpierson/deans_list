const User = require('../../models/user')
const Campus = require('../../models/campus')


module.exports = {
    create,
    indexUsers,
    showUser,
    updateUser,
    deleteUser,
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
async function create(req, res, next) {
    try {
        // Check if the campus exists with the provided campusNum and name
        const campus = await Campus.findOne({
            campusNum: req.body.campusNum,
            campus: req.body.name
        });

        // If campus doesn't exist, return an error
        if (!campus) {
            return res.status(400).json({ msg: "Invalid campus information provided" });
        }

        // If campus exists, proceed with creating the admin user
        const user = await User.create(req.body);

        // Push the user's ID into the admins array of the corresponding campus
        if (user.role === 'admin') {
            campus.admins.push(user._id);
            await campus.save();
        }

        // Push the user's ID into the teachers array of the corresponding campus
        if (user.role === 'teacher') {
            campus.teachers.push(user._id);
            await campus.save();
        }

        // Push the user's ID into the students array of the corresponding campus
        if (user.role === 'student') {
            campus.students.push(user._id);
            await campus.save();
        }

        console.log(user);
        res.locals.data.user = user;
        next();
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}


/****** R - Read *******/
    /****** Index All Users *******/
async function indexUsers(req, res, next){
    try {
        const user = await User.find({})
        console.log(user)
        res.locals.data.user = user
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

    /****** Index Individual User *******/
async function showUser(req, res, next){
    try {
        const user = await User.findById({_id: req.params.id})
        console.log(user)
        res.locals.data.user = user
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/****** U - Update *******/
async function updateUser(req, res, next) {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.id }, // Filter: Find the user by ID
            req.body, // Update: Update with the request body
            { new: true } // Options: Return the modified document
        );
        res.locals.data.user = user;
        next();
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

/****** D - Delete *******/
async function deleteUser(req, res, next) {
    try {
        // Find the user to be deleted
        const user = await User.findOneAndDelete({ _id: req.params.id });

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        // Remove the user ID from the admins array of the corresponding campus
        await Campus.updateMany({ admins: user._id }, { $pull: { admins: user._id } });

        // Remove the user ID from the teachers array of the corresponding campus
        await Campus.updateMany({ teachers: user._id }, { $pull: { teachers: user._id } });

        // Remove the user ID from the students array of the corresponding campus
        await Campus.updateMany({ students: user._id }, { $pull: { students: user._id } });

        res.json({ message: `User @${req.params.id} has been deleted successfully.` });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}
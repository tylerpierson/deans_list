const User = require('../../models/user')
const Campus = require('../../models/campus')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const checkToken = (req, res) => {
    console.log('req.user', req.user)
    res.json(req.exp)
  }

module.exports = {
    checkToken,
    login,
    createStudentsOrParents,
    indexUsers,
    showUser,
    updateUser,
    deleteStudentOrParent,
    jsonUsers,
    jsonUser,
    staffPermissions
}

// jsonUsers jsonUser
// viewControllers
function jsonUser (_, res) {
    res.json(res.locals.data.user)
}

function jsonUsers (_, res) {
    res.json(res.locals.data.users)
}

// middleware to allow all staff members certain permissions
async function staffPermissions(req, res, next) {
    if(req.user.role === 'student' || req.user.role === 'parent') {
        res.status(401).json('Permission Denied')
        return
    }
    next()
}


/****** C - Create a Student or Parent as a Staff member *******/
async function createStudentsOrParents(req, res, next) {
    try {
        // Check if the campus exists with the provided campusNum and name
        const campus = await Campus.findOne({
            campusNum: req.body.campusNum,
            campus: req.body.name
        });

        const currentUser = await User.findById(req.user._id);

        // If campus doesn't exist, return an error
        if (!campus) {
            return res.status(400).json({ msg: "Invalid campus information provided" });
        }

        // Hash the user password before saving it to the database
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 is the saltRounds
        req.body.password = hashedPassword;

        // If campus exists, proceed with creating the user
        const user = await User.create(req.body);

        // Push the user's ID into the corresponding campus array
        if (user.role === 'student') {
            campus.students.push(user._id);
        } else if (user.role === 'parent') {
            campus.parents.push(user._id);
        }

        // Save the campus document after pushing the user's ID
        await campus.save();

        if (currentUser.role === 'admin') {
            user.admins.push(currentUser._id)
            if(user.role === 'teacher'){
                currentUser.teachers.push(user._id)
            } else if (user.role === 'student'){
                currentUser.students.push(user._id)
            } else if (user.role === 'parent') {
                currentUser.parents.push(user._id)
            }
            await currentUser.save()
            await user.save()
        } else if (currentUser.role === 'teacher') {
            user.teachers.push(currentUser._id)
            user.admins.push(currentUser.admins)
            if(user.role === 'student'){
                currentUser.students.push(user._id)
            } else if (user.role === 'parent'){
                currentUser.parents.push(user._id)
            }
            await currentUser.save()
            await user.save()
        }

        console.log('User created:', user);
        res.locals.data.user = user;
        next();
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}



/****** Login *******/
async function login(req, res, next) {
    try {
        const { email, password } = req.body;
        console.log('Login request received for email:', email);

        const user = await User.findOne({ email });
        console.log('User found:', user);

        if (!user) {
            console.log('User not found');
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const match = await bcrypt.compare(password, user.password);
        console.log('Password match:', match);

        if (!match) {
            console.log('Password does not match');
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = createJWT(user);

        console.log('Login successful for user:', user, token);
        res.locals.data.user = user;
        res.locals.data.token = createJWT(user);
        next();
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
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
async function deleteStudentOrParent(req, res, next) {
    try {
        // Fetch the current user (admin)
        const currentUser = await User.findById(req.user._id);

        // Check if the current user exists and is an admin
        if (!currentUser || currentUser.role !== 'admin') {
            return res.status(403).json({ msg: "Unauthorized to delete users" });
        }

        // Find the user to be deleted
        const user = await User.findOneAndDelete({ _id: req.params.id });

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        // Remove the user from associated campuses
        await Campus.updateMany(
            { $or: [{ admins: user._id }, { teachers: user._id }, { students: user._id }] },
            { $pull: { admins: user._id, teachers: user._id, students: user._id } }
        );

        // Remove the user from other users' arrays
        const usersToUpdate = await User.find({ $or: [{ admins: user._id }, { teachers: user._id }, { students: user._id }, { parents: user._id }] });

        for (const otherUser of usersToUpdate) {
            try {
                if (otherUser.admins.includes(user._id)) {
                    otherUser.admins.pull(user._id);
                }
                if (otherUser.teachers.includes(user._id)) {
                    otherUser.teachers.pull(user._id);
                }
                if (otherUser.students.includes(user._id)) {
                    otherUser.students.pull(user._id);
                }
                if (otherUser.parents.includes(user._id)) {
                    otherUser.parents.pull(user._id);
                }
                await otherUser.save();
            } catch (error) {
                console.error(`Error removing user ID ${user._id} from other user ${otherUser._id}: ${error.message}`);
                continue;
            }
        }

        res.json({ message: `${user.firstName} ${user.lastName} @${req.params.id} has been deleted successfully.` });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}




/* -- Helper Functions -- */

function createJWT (user) {
    return jwt.sign(
      // data payload
      {  user },
      process.env.SECRET,
      { expiresIn: '24h' }
    )
  }
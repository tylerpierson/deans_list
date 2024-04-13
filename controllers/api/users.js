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

        // Hash the user password before saving it to the database
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 is the saltRounds
        req.body.password = hashedPassword;

        // If campus exists, proceed with creating the user
        const user = await User.create(req.body);

        // Push the user's ID into the corresponding campus array
        if (user.role === 'admin') {
            campus.admins.push(user._id);
        } else if (user.role === 'teacher') {
            campus.teachers.push(user._id);
        } else if (user.role === 'student') {
            campus.students.push(user._id);
        }

        // Save the campus document after pushing the user's ID
        await campus.save();

        // If the user who is creating the new user is an admin, 
        // add their ID to the new user's "admins" array
        if (req.user.role === 'admin' && user.role === 'teacher') {
            req.user.teachers.push(user._id)
            user.admins.push(req.user._id);
            await user.save();
        }

        console.log(req.user.teachers)
        console.log(user.admins)
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

/* -- Helper Functions -- */

function createJWT (user) {
    return jwt.sign(
      // data payload
      {  user },
      process.env.SECRET,
      { expiresIn: '24h' }
    )
  }
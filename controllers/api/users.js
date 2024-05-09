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
    createAdmin,
    createUser,
    indexUsers,
    showUser,
    updateUser,
    deleteStudentOrParent,
    jsonUsers,
    jsonUser,
}

// jsonUsers jsonUser
// viewControllers
function jsonUser (_, res) {
    res.json(res.locals.data.user)
}

function jsonUsers (_, res) {
    res.json(res.locals.data.users)
}

/****** C - Create an initial Admin User *******/
async function createAdmin(req, res, next) {
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

        if(req.body.role !== 'admin'){
            return res.status(400).json({ msg: "Invalid user role" })
        }

        // Check if there are any existing administrators in the campus
        if (!campus.admins) {
            campus.admins = []; // Initialize admins array if it's undefined
        } else if (campus.admins.length > 0) {
            return res.status(400).json({ msg: "Initial Administrator already exists" });
        }

        // Hash the user password before saving it to the database
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 is the saltRounds
        req.body.password = hashedPassword;

        // If campus exists, proceed with creating the user
        const user = await User.create(req.body);

        // Generate authentication token
        const token = await user.generateAuthToken();

        // Save the user object with the token
        await user.save();

        // Push the user's ID into the corresponding campus array
        if (user.role === 'admin') {
            campus.admins.push(user._id);
        }

        if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password || !req.body.campusNum) {
            return res.status(400).json({ msg: "Missing required fields" });
        }
        // Save the campus document after pushing the user's ID
        await campus.save();

        console.log('Request body:', req.body);
        res.locals.data.user = user;

        res.json({ user, token })
        return
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}


async function createUser(req, res, next) {
    try {
        const currentUser = await User.findById(req.user._id);

        if(!req.body.campus && !req.body.campusNum){
            req.body.campus = currentUser.campus
            req.body.campusNum = currentUser.campusNum
        }
        // Check if the campus exists with the provided campusNum and name
        const campus = await Campus.findOne({
            campusNum: req.body.campusNum,
            campus: req.body.name
        });

        // Check if the user to be created is a teacher
        if (currentUser.role === 'teacher' && req.body.role === 'teacher') {
            return res.status(400).json({ msg: "Not authorized to create a teacher" });
        } else if (currentUser.role === 'student' || currentUser.role === 'parent') {
            return res.status(400).json({ msg: "Not authorized to create a user" });
        }

        // Hash the user password before saving it to the database
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 is the saltRounds
        req.body.password = hashedPassword;

        // If campus exists, proceed with creating the user
        const user = await User.create(req.body);

        // If campus doesn't exist, return an error
        if (!campus) {
            return res.status(400).json({ msg: "Invalid campus information provided" });
        }

        // Push the user's ID into the corresponding campus array
        if (user.role === 'student') {
            campus.students.push(user._id);
        } else if (user.role === 'parent') {
            campus.parents.push(user._id);
        }

        // Save the campus document after pushing the user's ID
        await campus.save();

        if (currentUser.role === 'admin') {
            user.admins.push(currentUser._id);
            if (user.role === 'admin') {
                currentUser.admins.push(user._id);
                user.teachers.push(...currentUser.teachers);
                user.students.push(...currentUser.students);
                user.parents.push(...currentUser.parents);
            } else if (user.role === 'teacher') {
                currentUser.teachers.push(user._id);
                user.admins.push(...currentUser.admins);
                // Update other admin users' teachers array
                const admins = await User.find({ role: 'admin', _id: { $in: currentUser.admins } });
                for (const admin of admins) {
                    admin.teachers.push(user._id);
                    await admin.save();
                }
            } else if (user.role === 'student') {
                currentUser.students.push(user._id);
                user.admins.push(...currentUser.admins);
                // Update other admin users' students array
                const admins = await User.find({ role: 'admin', _id: { $in: currentUser.admins } });
                for (const admin of admins) {
                    admin.students.push(user._id);
                    await admin.save();
                }
                // Update teachers' students arrays
                if (req.body.teachers && req.body.teachers.length > 0) {
                    // Loop through each teacher in the req body
                    for (const teacherId of req.body.teachers) {
                        // Find the teacher in the database
                        const teacher = await User.findById(teacherId);
                        // If teacher is found, push the new student's ID to their students array
                        if (teacher) {
                            teacher.students.push(user._id);
                            await teacher.save();
                        }
                    }
                }
                // Update parents' students arrays
                if (req.body.parents && req.body.parents.length > 0) {
                    // Loop through each teacher in the req body
                    for (const parentId of req.body.parents) {
                        // Find the parent in the database
                        const parent = await User.findById(parentId);
                        // If parent is found, push the new student's ID to their students array
                        if (parent) {
                            parent.students.push(user._id);
                            await parent.save();
                        }
                    }
                }
            } else if (user.role === 'parent') {
                currentUser.parents.push(user._id);
                user.admins.push(...currentUser.admins);
                // Update other admin users' parents array
                const admins = await User.find({ role: 'admin', _id: { $in: currentUser.admins } });
                for (const admin of admins) {
                    admin.parents.push(user._id);
                    await admin.save();
                }
                // Update teachers' students arrays
                if (req.body.teachers && req.body.teachers.length > 0) {
                    // Loop through each teacher in the req body
                    for (const teacherId of req.body.teachers) {
                        // Find the teacher in the database
                        const teacher = await User.findById(teacherId);
                        // If teacher is found, push the new student's ID to their students array
                        if (teacher) {
                            teacher.parents.push(user._id);
                            await teacher.save();
                        }
                    }
                }
                // Update parents' students arrays
                if (req.body.parents && req.body.parents.length > 0) {
                    // Loop through each teacher in the req body
                    for (const parentId of req.body.parents) {
                        // Find the parent in the database
                        const parent = await User.findById(parentId);
                        // If parent is found, push the new student's ID to their students array
                        if (parent) {
                            parent.parents.push(user._id);
                            await parent.save();
                        }
                    }
                }
                // Update teachers' arrays for the new parent
                if (req.body.students && req.body.students.length > 0) {
                    // Loop through each student in the req body
                    for (const studentId of req.body.students) {
                        // Find the student in the database
                        const student = await User.findById(studentId);
                        // If student is found, push their teachers' IDs to the new parent's teachers array
                        if (student && student.teachers && student.teachers.length > 0) {
                            // Loop through each teacher of the student
                            for (const teacherId of student.teachers) {
                                // Check if the teacher already exists in the parent's teachers array
                                if (!user.teachers.includes(teacherId)) {
                                    // If not, add the teacher to the parent's teachers array
                                    user.teachers.push(teacherId);
                                }
                            }
                        }
                    }
                }
            }
            await currentUser.save();
            await user.save();
        }
         

        if (currentUser.role === 'teacher') {
            user.teachers.push(currentUser._id);
            if (user.role === 'student') {
                currentUser.students.push(user._id);
                user.admins.push(...currentUser.admins);
                // Update other admin users' students array
                const admins = await User.find({ role: 'admin', _id: { $in: currentUser.admins } });
                for (const admin of admins) {
                    admin.students.push(user._id);
                    await admin.save();
                }
            } else if (user.role === 'parent') {
                currentUser.parents.push(user._id);
                user.admins.push(...currentUser.admins);
                // Update other admin users' parents array
                const admins = await User.find({ role: 'admin', _id: { $in: currentUser.admins } });
                for (const admin of admins) {
                    admin.parents.push(user._id);
                    await admin.save();
                }
            }
            await currentUser.save();
            await user.save();
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

        const token = await user.generateAuthToken()
        res.json({ user, token })

        console.log('Login successful for user:', user, token);
        res.locals.data.user = user;
        res.locals.data.token = token;
        return
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
        const user = await User.findById({_id: req.params.id}).populate("admins teachers students parents")
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
            { $or: [{ admins: user._id }, { teachers: user._id }, { students: user._id }, { parents: user._id }] },
            { $pull: { admins: user._id, teachers: user._id, students: user._id, parents: user._id } }
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
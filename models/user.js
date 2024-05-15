const mongoose = require('mongoose');
const { Schema } = mongoose;
const jwt = require('jsonwebtoken')

const userSchema = new Schema({
    firstName: { required: true, type: String },
    lastName: { required: true, type: String },
    email: { required: true, type: String, unique: true },
    password: { type: String, required: true },
    campusNum: String,
    campus: String,
    role: {
        type: String,
        enum: ['admin', 'teacher', 'student', 'parent'],
        default: 'admin'
    },
    subjects: [String],
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    switchTeachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    gradeLevel: String,
    assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' }],
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    studentId: String,
    parents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, {
    timestamps: true
});

userSchema.methods.generateAuthToken = async function() {
    const token = jwt.sign({ _id: this._id, user: this }, process.env.SECRET)
    return token
  }

const User = mongoose.model('User', userSchema);

module.exports = User;
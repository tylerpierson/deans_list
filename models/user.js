const { model, Schema } = require('mongoose')


const userSchema = new Schema ({
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
    students: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    studentId: String,
    teachers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    gradeLevel: { type: String, required: true },
    assignments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Assignment'}],
}, {
    timestamps: true
})

const User = model('User', userSchema)

module.exports = User
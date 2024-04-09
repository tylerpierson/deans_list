const mongoose = require('mongoose');
const { Schema } = mongoose;

const assignmentSchema = new Schema({
    title: { required: true, type: String },
    subject: { required: true, type: String },
    gradeLevel: { required: true, type: String },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    score: String,
}, {
    timestamps: true
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
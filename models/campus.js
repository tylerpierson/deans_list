const mongoose = require('mongoose');
const { Schema } = mongoose;

const campusSchema = new Schema({
    name: { required: true, type: String },
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    score: String,
}, {
    timestamps: true
});

const Campus = mongoose.model('Campus', campusSchema);

module.exports = Campus;
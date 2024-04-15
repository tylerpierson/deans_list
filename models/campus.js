const mongoose = require('mongoose');
const { Schema } = mongoose;

const campusSchema = new Schema({
    name: { required: true, type: String },
    campusNum: String,
    district: { required: true, type: String },
    state: { required: true, type: String },
    city: { required: true, type: String },
    address: { required: true, type: String },
    zipCode: { required: true, type: String },
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    parents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    score: String,
}, {
    timestamps: true
});

const Campus = mongoose.model('Campus', campusSchema);

module.exports = Campus;
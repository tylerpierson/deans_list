const { model, Schema } = require('mongoose')


const userSchema = new Schema ({
    title: { required: true, type: String },
    completed: { required: true, type: Boolean }
}, {
    timestamps: true
})

const User = model('User', userSchema)

module.exports = User
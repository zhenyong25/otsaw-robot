const mongoose = require('mongoose')

// User Schema
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true},
    password: { type: String, required: true, select: false}, 
    isAdmin: { type: Boolean, required: true, default: false}
})

module.exports = mongoose.model("User", UserSchema)


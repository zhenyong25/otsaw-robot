const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// User Schema
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true, select: false}, 
    isAdmin: { type: Boolean, required: true, default: false}
})

// static login method
UserSchema.statics.login = async function(email, password) {

    if (!email || !password) {
      throw Error('All fields must be filled')
    }
  
    const user = await this.findOne({ email })
    if (!user) {
      throw Error('Incorrect email')
    }
  
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw Error('Incorrect password')
    }
  
    return user
  }

module.exports = mongoose.model("User", UserSchema)



import mongoose from "mongoose";

// User Schema
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true},
    password: { type: String, required: true, select: false}, 
    isAdmin: { type: Boolean, required: true, default: false}
})

export const UserModel = mongoose.model("User", UserSchema)


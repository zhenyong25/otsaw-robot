import mongoose from "mongoose";

// Robot Schema
const RobotSchema = new mongoose.Schema({
    name: { type: String, required: true},
    model: { type: String, required: true},
    manufacturingDt: { type: Date, required: true}, 
    status: { type: String, required: true}, 
    currentLoc: { type: String, required: true}
})

export const RobotModal = mongoose.model("Company", RobotSchema)

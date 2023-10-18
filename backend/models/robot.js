
const mongoose = require('mongoose')

// Robot Schema
const RobotSchema = new mongoose.Schema({
    name: { type: String, required: true},
    model: { type: String, required: true},
    manufacturingDt: { type: String, required: true}, 
    status: { type: String, required: true}, 
    currentLoc: { type: String, required: true}, 
    companyId: {type: Number }
})

module.exports = mongoose.model("Robot", RobotSchema)




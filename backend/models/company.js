const mongoose = require('mongoose')

// Company Schema
const CompanySchema = new mongoose.Schema({
    name: { type: String, required: true},
    address: { type: String, required: true}, 
    robots: { type: [String] }
})

module.exports = mongoose.model("Company", CompanySchema)



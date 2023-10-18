import mongoose from "mongoose";

// Company Schema
const CompanySchema = new mongoose.Schema({
    name: { type: String, required: true},
    address: { type: String, required: true, select: false}, 
})

export const CompanyModal = mongoose.model("Company", CompanySchema)

const Company = require('../models/company')
const mongoose = require('mongoose')

// GET all companies
const getCompanies = async(req,res) => {
    const companies = await Company.find({}).sort({createdAt: -1})
    res.status(200).json(companies)
}

// GET one robot 
const getCompany = async(req,res) => {
    const {id} = req.params

    // Check the validity of id 
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such company"})
    }
    const company = await Company.findById(id)

    if (!company) {
        return res.status(404).json({error: 'No such company'})
    }
}

// POST a new company
const createCompany = async(req,res) => {
    const {name,address} = req.body
    try {
        // Creating new document 
        const company = await Company.create({name,address}) 
        res.status(200).json(company)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

// DELETE a company
const deleteCompany = async (req,res) => {
    const {id} = req.params
    // Check the validity of id 
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"})
    }
    const company = await Company.findOneAndDelete({_id})

    if (!company) {
        return res.status(404).json({error: 'No such workout'})
    } 
    res.status(200).json(workout)
}


// UPDATE a robot 
const updateCompany = async (req,res) => {
    const {id} = req.params
    // Check the validity of id 
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such company"})
    }
    const company = await Company.findOneAndUpdate({_id:id}, {
        ...req.body 
    })
    if (!company) {
        return res.status(404).json({error: 'No such company'})
    } 
    res.status(200).json(company)
}

module.exports = {
    getCompanies, 
    getCompany,
    createCompany,
    deleteCompany,
    updateCompany
}
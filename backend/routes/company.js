const express = require('express')
const {
    getCompanies, 
    getCompany,
    createCompany,
    deleteCompany,
    updateCompany
} = require('../controllers/company')

const router = express.Router()

// GET all workouts
router.get('/', getCompanies)

// GET a single workout
router.get('/:id', getCompany)

// POST a new workout
router.post('/', createCompany)

// DELETE a workout
router.delete('/:id', deleteCompany)

// UPDATE a workout
router.patch('/:id', updateCompany)

module.exports = router
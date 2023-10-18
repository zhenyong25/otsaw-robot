const express = require('express')
const {
    getCompanies, 
    getCompany,
    createCompany,
    deleteCompany,
    updateCompany
} = require('../controllers/company')


const requireAuth = require('../middleware/requireAuth')
const router = express.Router()
router.use(requireAuth)

const { authRole } = require('../middleware/roleAuth')

// GET all workouts
router.get('/', authRole(), getCompanies)

// GET a single workout
router.get('/:id', authRole(), getCompany)

// POST a new workout
router.post('/', authRole(),createCompany)

// DELETE a workout
router.delete('/:id', authRole(),deleteCompany)

// UPDATE a workout
router.patch('/:id', authRole(),updateCompany)

module.exports = router
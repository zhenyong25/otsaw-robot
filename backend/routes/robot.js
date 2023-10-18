
const express = require('express')
const {
    getRobots, 
    getRobot,
    createRobot,
    deleteRobot,
    updateRobot
} = require('../controllers/robot')

const router = express.Router()

// GET all workouts
router.get('/', getRobots)

// GET a single workout
router.get('/:id', getRobot)

// POST a new workout
router.post('/', createRobot)

// DELETE a workout
router.delete('/:id', deleteRobot)

// UPDATE a workout
router.patch('/:id', updateRobot)

module.exports = router
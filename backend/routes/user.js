const express = require('express')

// controller functions
const {loginUser} = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)
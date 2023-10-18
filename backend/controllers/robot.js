const Robot = require('../models/robot')
const mongoose = require('mongoose')

// GET all robots
const getRobots = async(req,res) => {
    const robots = await Robot.find({}).sort({createdAt: -1})
    res.status(200).json(robots)
}

// GET one robot 
const getRobot = async(req,res) => {
    const {id} = req.params
    // Check the validity of id 
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such robot"})
    }
    const robot = await Robot.findById(id)
    if (!robot) {
        return res.status(404).json({error: 'No such robot'})
    }
}

// POST a new robot 
const createRobot = async(req,res) => {
    const {name, model, manufacturingDt, status, currentLoc, companyId} = req.body
    try {
        const robot = new Robot({
            name: name,
            model: model,
            manufacturingDt: manufacturingDt,
            status: status,
            currentLoc: currentLoc,
            companyId: companyId
          });
        
          const savedRobot = await robot.save();
          res.status(200).json(savedRobot.toObject());
    } catch (error){
        res.status(408).json({error: error.message})
    }
}

// DELETE a robot 
const deleteRobot = async (req,res) => {
    const {id} = req.params
    // Check the validity of id 
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such robot"})
    }
    const robot = await Robot.findOneAndDelete({_id})
    if (!robot) {
        return res.status(404).json({error: 'No such robot'})
    } 
    res.status(200).json(robot)
}


// UPDATE a robot 
const updateRobot = async (req,res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such robot"})
    }

    const robot = await Robot.findOneAndUpdate({_id:id}, {
        ...req.body 
    })

    if (!robot) {
        return res.status(404).json({error: 'No such robot'})
    } 
    res.status(200).json(robot)
}

module.exports = {
    getRobots, 
    getRobot,
    createRobot,
    deleteRobot,
    updateRobot
}
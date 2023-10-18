const cors = require('cors')
const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')
app.use(express.json())

require('dotenv').config()

// routes 
const robotRoutes = require('./routes/robot')
const companyRoutes = require('./routes/company')

// mongodb connection and listening to port 
const mongoose = require('mongoose'); 
mongoose.connect(process.env.MONGO_DB)
    .then(()=>{
        // listen for requests
        app.listen(process.env.PORT,()=> {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error)=> {
        console.log(error)
    }); 
mongoose.connection.on('connected', () => {console.log('MongoDB connected');});
mongoose.connection.on("error", () => console.log('Not Connected!'));

// middleware
app.use(express.json())
app.use((req,res,next)=> {
    console.log(req.path, req.method)
    res.header('Access-Control-Allow-Origin', '*');
    next()
})

// routes 
app.use('/robot', robotRoutes)
app.use('/company', companyRoutes)
app.use(cors(
    {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
));
// app.use("/", router());



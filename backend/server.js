
const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')
app.use(express.json())

require('dotenv').config()

// mongodb connection 
const mongoose = require('mongoose'); 
mongoose.connect(process.env.MONGO_DB); 
mongoose.connection.on('connected', () => {console.log('MongoDB connected');});
mongoose.connection.on("error", () => console.log('Not Connected!'));


app.get('/users',(req,res) => {
    res.json(users)
})

// jwt token 
app.post('/', (req,res) => {
    // Authenticate User 
    res.json()

    const username = req.body.username
    const user = { name: username }

    //serialize the user 
    // const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    // res.json({ accessToken: accessToken })

    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    refreshToken.push() 
    res.json({ accessToken: accessToken })


})

// middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split('')[1]

    // check whether the token is null 
    if (token == null) 
        return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user) => {

        // token no longer valid 
        if (err)
            return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.get('/posts', authenticateToken, (req,res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})

app.delete('logout', (req, res)=> {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
})

app.post('/token', (req,res) => {
    const refreshToken = req.body.token 
    if (refreshToken ==null)
        return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken))
        return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err,user) => {
        if (err) 
            return res.sendStatus(403)
        const accessToken = generateAccessToken({name: user.name})
        res.json({accessToken: accessToken})
    })
})

function generateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' })
}

app.listen(4000)
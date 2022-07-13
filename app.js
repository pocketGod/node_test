const express = require('express')
require('dotenv').config()
const users = require('./routes/users')

const app = express()


const PORT = process.env.PORT || 9999


const logger = (req,res,next)=>{
    console.log(`Logged: ${req.url}, ${req.method}`)
    next()
}

app.use(logger)
app.use(express.json());

app.use('/api/users', users)

// app.get('/',(req, res)=>{
//     res.send('Welcome To The Server')
// })

// app.get('*', (req,res)=>{
//     res.send('404 NOT FOUND')
// })

app.listen(PORT, ()=>{
    console.log(`server has started in port: ${PORT}`);
})
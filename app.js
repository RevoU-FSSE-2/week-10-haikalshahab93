//  Package
const express = require('express')
const bodyParser = require('body-parser')
const openApiValidator = require('express-openapi-validator')
const yaml = require('yaml')
const swaggerUi = require('swagger-ui-express')

// Router
const authRouter = require('./routes/auth.js')
// const transferReqRouter = require('./routes/transfer-req.js')


const app = express()
const port = process.env.PORT || 3000

// parses ke json 
app.use(bodyParser.json())

// user
app.use('/v1/auth', authRouter)

app.use('/',(req,res)=>{
    console.log("berhasil")
    res.send("Welcome To Website Haikal")
})


app.listen(port, ()=>{
    console.log(`Server Running On Port ${port}`)
})
//  Package
const express = require('express')
const bodyParser = require('body-parser')
const openApiValidator = require('express-openapi-validator')
const yaml = require('yaml')
const swaggerUi = require('swagger-ui-express')


const app = express()
const port = process.env.PORT || 3000

app.use('/',(req,res)=>{
    console.log("berhasil")
    res.send("Welcome To Website Haikal")
})


app.listen(port, ()=>{
    console.log(`Server Running On Port ${port}`)
})
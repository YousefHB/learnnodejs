const express = require('express');
const app=express();
const mongoose = require("./database");
const bodyParser = require("body-parser")
var port= 8080
const productRoute = require('./routes/productRoute')
app.use([bodyParser.urlencoded({ extended: true }),express.json()]);

app.use('/product',productRoute)





const server = app.listen(port,()=>{
    console.log("code running in port"+ port);
})
module.exports=app;
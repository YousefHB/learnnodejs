const express = require('express');
const app=express();
const mongoose = require("./database");
const bodyParser = require("body-parser");
const http = require('http');
const port= process.env.port || 3003;
const server=http.createServer(app);
const productRoute = require('./routes/productRoute')
app.use([bodyParser.urlencoded({ extended: true }),express.json()]);

app.use('/product',productRoute)





 server.listen(port,()=>{
    console.log("code running in port"+ port);
})
module.exports=app;
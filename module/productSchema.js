const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const products=new Schema({
    name:{type:String,required:true},
    price : Number,
    desc : String,
    age : Number,
})
var product = mongoose.model('PRODUCT', products);
module.exports = product;
 const mongoose = require('mongoose')


 var admin=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:String

 },{ timestamps: true })


 var Ad=mongoose.model('admindb',admin)
 module.exports=Ad
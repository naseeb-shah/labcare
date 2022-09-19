const mongoose = require('mongoose')



var client=mongoose.Schema({
    name:String,
    age:Number,
    mobile:Number,
    test:Object,
    add:String,
    time:String,
    reference:String,
   
    
})

var report=mongoose.model('report',client)

module.exports=report
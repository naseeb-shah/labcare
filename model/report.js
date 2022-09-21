const mongoose = require('mongoose')



var client=mongoose.Schema({
    name:String,
    age:Number,
    mobile:Number,
    test:Object,
    add:String,
    date:String,
    reference:String,
    gender:String,
    address:String,
    techname:String,
    time:String,
    
},{ timestamps: true })

var report=mongoose.model('report',client)

module.exports=report
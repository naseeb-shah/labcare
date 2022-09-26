const mongoose = require('mongoose')



var client=mongoose.Schema({
    name:String,
    age:Number,
    mobile:Number,
    test:{type:Object, require:true},
    add:String,
    date:String,
    reference:String,
    gender:String,
    address:String,
    techname:String,
    time:String,
    payment:{s:Boolean,am:Number}
    
})

var report=mongoose.model('report',client)

module.exports=report
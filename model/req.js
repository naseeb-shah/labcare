const mongoose=  require('mongoose')



var Req= mongoose.Schema({
    name:String,
    type:String,
    mobile:{type:Number,maxLength:10},
    msg:String,
    address:String,
    done:{type:Boolean,default:false}
    
},{ timestamps: true })

const request=mongoose.model("request",Req)
module.exports=request
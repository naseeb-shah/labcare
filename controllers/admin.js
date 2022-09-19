const express= require('express')
const  Ad= require('../model/admin')
const js= require('jsonwebtoken')
const admin= express.Router()
var bcrypt = require('bcryptjs');


admin.post('/',async(req,res)=>{



 const {name,email,password}=req.body
  var user= await Ad.findOne({email:email})
if(user){
  return  res.send({
        "status":"error",
        "response":"Email alredy registered"
        })
}

Ad.create({
name:name,
email:email,
password:bcrypt.hashSync(password,10)
}).then(e=>{
    res.send({
        "status":"Sucessfull",
        "response":"Welcome to aashirwad labs"
        })
}).catch(err=>{
    res.send({
        "status":"error",
        "response":err
        })
})

    // res.send("admin router")
})





admin.post('/log',async(req,res)=>{
    const {name,email,password}=req.body


    var user= await Ad.findOne({email:email})
    if(!user){
      return  res.send({
            "status":"error",
            "response":"User not Found"
            })
    }

var matehd=bcrypt.compareSync(password,user.password)

if(matehd){
     return   res.send({
            "status":"Successfully ",
            "response": {
                name:user.name,
                email:user.email,
                id:user._id
            }
        })
}else{
 return   res.send({
        "status":"error",
        "response":"Credainls Invalid"
        })
}

  
})


module.exports=admin
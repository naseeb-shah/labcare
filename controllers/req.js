const express= require('express')
const  Rmodel= require('../model/req')
const js= require('jsonwebtoken')
const Req= express.Router()


Req.post('/',(req,res)=>{
    const {type,
        mobile,
        msg,
        address,name}=req.body



        Rmodel.create({type:type,
            mobile:mobile,
            msg:msg,
            address:address,name:name})
            .then(e=>{
                return res.send({
                    "status":"sucesfully",
                    "reports":e
                  })
            }).catch(e=>{
        
                return    res.send({
                    "status":'error',
                    "response":e
                })
            })
})

Req.get('/',(req,res)=>{
     Rmodel.find().sort({updatedAt: -1})
     .then(e=>{
        return res.send({
            "status":"sucesfully",
            "reports":e
          })
    }).catch(e=>{

        return    res.send({
            "status":'error',
            "response":e
        })
    })
})
Req.get('/id/:id',(req,res)=>{
     const {id}=req.params

    Rmodel.find({_id:id})
    .then(e=>{
       return res.send({
           "status":"sucesfully",
           "reports":e
         })
   }).catch(e=>{

       return    res.send({
           "status":'error',
           "response":e
       })
   })
})





Req.patch('/updated/:id',(req,res)=>{
    const {id}=req.params
    console.log(id)
    Rmodel.findOneAndUpdate({"_id":id},{'done':true})
    .then(e=>{
       return res.send({
           "status":"sucesfully",
           "reports":e
         })
   }).catch(e=>{

       return    res.send({
           "status":'error',
           "response":e
       })
   })
})



module.exports=Req
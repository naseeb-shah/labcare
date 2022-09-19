const express= require('express')
const  Re= require('../model/report')
const js= require('jsonwebtoken')
const Report= express.Router()


Report.post('/',async(req,res)=>{    
const {name,mobile,age,address,reference,tests,time}=req.body
if(true){
 await Re.create({
    name:name,
    mobile:mobile,  
    age:age,
    address:address,
    reference:reference,
    test:tests,
    time:time,
    payment:{default:false}
 }).then(e=>{
    return res.send({
        "status":"Sucessful",
        "response":`${e.name} the report was created successfully`
        
    })
 }).catch(err=>{
    return   res.send({
        "status":'error',
        "response":err
    })
 })
}else{
    return    res.send({
        "status":'error',
        "response":"Please  fill all data"
    })
}


                       })
Report.get('/m/:mobile',async(req,res)=>{
  await  Re.find({mobile:req.params.mobile}).then((e)=>{
  return res.send({
    "status":"sucesfully",
    "reports":e
  })
    }).catch(e=>{

        return res.send({
            "status":'error',
            "response":"No reports found"
        })
    })

})


Report.get('/id/:id',async(req,res)=>{
    Re.find({_id:req.params.id}).then((e)=>{
  return res.send({
    "status":"sucesfully",
    "reports":e
  })
    }).catch(e=>{

        return    res.send({
            "status":'error',
            "response":"No reports found"
        })
    })

})
Report.get('/allreport',async(req,res)=>{
    Re.find({}).then((e)=>{
  return res.send({
    "status":"sucesfully",
    "reports":e
  })
    }).catch(e=>{

        return    res.send({
            "status":'error',
            "response":"No reports found"
        })
    })

})
Report.delete('/allreport/:id',async(req,res)=>{
    Re.findOneAndDelete({_id:req.params.id}).then(e=>{
        return res.send({
            "status":"sucesfully",
            "reports":e
          })
    }).catch(e=>{

        return    res.send({
            "status":'error',
            "response":"No reports found"
        })
    })

})





module.exports=Report
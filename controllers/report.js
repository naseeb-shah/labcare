const express= require('express')
const  Re= require('../model/report')
const js= require('jsonwebtoken')
const Report= express.Router()


Report.post('/',async(req,res)=>{    
const {name,mobile,age,address,reference,tests,time,techname,gender,date,payment}=req.body
if(true){
    
 await Re.create({
    name:name,
    mobile:mobile,  
    age:age,
    address:address,
    reference:reference,
    test:tests,
    time:time,
date: +new Date(date),
    gender:gender,
    payment:payment,
    techname:techname,

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

Report.post('/pay',(req,res)=>{
    Re.findByIdAndUpdate(req.body.id,{ payment:{s:true,am:req.body.am}})
    .then(e=>{
        return res.send({
            "status":"sucesfully",
            "response":e
          })
            }).catch(e=>{
        
                return res.send({
                    "response":'Something Went wrong'
                    
                })
            })
        
    })
// })


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
Report.post('/time',async(req,res)=>{
    var  {start,end}=req.body
console.log(req.body)
   start= +(new Date(start))
   end= +(new Date(end))
   console.log(start,end)
    Re.find({"date":{$gte:start,$lte:end}}).then((e)=>{
        
  return res.send({
    "status":"sucesfully",
    "reports":e,
    "len":e.length
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
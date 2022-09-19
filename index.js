 const express= require('express')
 const   bodyparser= require('body-parser')
 const cors=require("cors")
 const admin= require('./controllers/admin')
 const Report= require('./controllers/report')
 const dataconnect= require('./model/index')
console.log(dataconnect)
 
const app=express()
app.use(bodyparser.json())
app.use(cors())

app.get('./',(req,res)=>{
    res.send("server is started")
})
app.use('/admin',admin)
app.use('/report',Report)






dataconnect().then((res)=>{
    app.listen('4000',(err)=>{
        console.log(err||"server has started")
    }
    )
}).catch(err=>console.log(err))



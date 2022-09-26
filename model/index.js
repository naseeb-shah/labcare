const mongoose = require('mongoose')


async function condatabase(){
    return new Promise((resolve, reject)=>{

        const url='mongodb+srv://deenshah:Deenshah@cluster0.f3dzadd.mongodb.net/labs?retryWrites=true&w=majority'
>>>>>>> a07f927ca1b25f22fb834c4c086be95b1f5dbe19
    // const url='mongodb://localhost:27017/deen'
      mongoose.connect(url,(err)=>{

           if(err){
               console.log(err)
               return reject(err);
           }

           console.log("database connceted")
           resolve()
       })

    })
}

module.exports=condatabase

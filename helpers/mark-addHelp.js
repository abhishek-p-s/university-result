const db=require('../config/connection')

module.exports={
    markAdd:(marks,callback)=>{
        console.log(marks)
        db.get().collection('marks').insertOne(marks).then((data)=>{

            callback(true)
        })


    },
    getMarks:()=>{
        return new Promise(async(resolve,reject)=>{
            let marks=await db.get().collection('marks').find().toArray();
            resolve(marks);
        })
    }
}
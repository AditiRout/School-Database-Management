
const mongo=require('mongoose')

const connectDB=async(DATABASE_URL)=>{
    try{
        const opt={
            dbName:"School",

        }
        await mongo.connect(DATABASE_URL,opt)
        console.log("success")
    }
    catch(err){
        console.log('cannot connect')
    }
}
module.exports={ connectDB}
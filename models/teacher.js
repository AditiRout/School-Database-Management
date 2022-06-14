const { default: mongoose } = require('mongoose')
const mongo=require('mongoose')

const teacherSchema=new mongo.Schema({
    name:{type:String,trim:true,required:true},
    email:{type:String,required:true},
    dept:{type:String,required:true},
    salary:{type:mongo.Types.Decimal128,required:true,validate:(v)=>v>=5000}
    
})

const teacherModel=mongo.model('teacher',teacherSchema)

module.exports=teacherModel
const { default: mongoose } = require('mongoose')
const mongo=require('mongoose')

const studentSchema=new mongo.Schema({
    name:{type:String,trim:true,required:true},
    email:{type:String,required:true},
    fees:{type:mongo.Types.Decimal128,required:true,validate:(v)=>v>=5000}
    
})

const StudentModel=mongo.model('student',studentSchema)

module.exports=StudentModel
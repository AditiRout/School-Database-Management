const StudentModel = require("../models/student.js")


class studentController{
    static getAllDoc=async(req,res)=>{
        try{
            const result=await StudentModel.find();
            res.render("index",{data : result})

        }
        catch(err){
            console.log(error)
        }
        
    }
    static createDoc=async(req,res)=>{  
        try{
            const {name,email,fees}=req.body;
            console.log(req.body.email)
            const doc=new StudentModel({
                name:name,
                email:email,
                fees:fees
            })
            const result=await doc.save()
            console.log(result)
            res.redirect("/student")

        }
        catch(err){
            console.log(err)
        }
       
    }
    static getUpdate=async(req,res)=>{
        console.log(req.params)
        try{
            const result=await StudentModel.findById(req.params.id)
            res.render("edit",{data:result})

        }
        catch(err){
            console.log(err)
        }

       
    }
    static UpdateDocById=async(req,res)=>{
        try{
            const {name,email,fees}=req.body;
            const result=await StudentModel.findByIdAndUpdate(req.params.id,req.body)
            res.redirect("/student")
        }catch(err){
            console.log(err)
        }
        
    }
    static deleteDoc=async(req,res)=>{
        try{
            const result= await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect("/student")

        }
        catch(err){
            console.log(err)
        }
        
    }
}

module.exports={studentController}
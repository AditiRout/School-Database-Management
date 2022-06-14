const teacherModel = require("../models/teacher.js")


class teacherController{
    static getAllDoc=async(req,res)=>{
        try{
            const result=await teacherModel.find();
            res.render("indexTeach",{data : result})

        }
        catch(err){
            console.log(error)
        }
        
    }
    static createDoc=async(req,res)=>{  
        try{
            const {name,email,dept,salary}=req.body;
            console.log(req.body.email)
            const doc=new teacherModel({
                name:name,
                email:email,
                dept:dept,
                salary:salary
            })
            const result=await doc.save()
            console.log(result)
            res.redirect("/teacher")

        }
        catch(err){
            console.log(err)
        }
       
    }
    static getUpdate=async(req,res)=>{
        console.log(req.params)
        try{
            const result=await teacherModel.findById(req.params.id)
            res.render("editteach",{data : result})

        }
        catch(err){
            console.log(err)
        }

       
    }
    static UpdateDocById=async(req,res)=>{
        try{
            const {name,email,dept,salary}=req.body;
            const result=await StudentModel.findByIdAndUpdate(req.params.id,req.body)
            res.redirect("/teacher")
        }catch(err){
            console.log(err)
        }
        
    }
    static deleteDoc=async(req,res)=>{
        try{
            const result= await teacherModel.findByIdAndDelete(req.params.id)
            res.redirect("/teacher")

        }
        catch(err){
            console.log(err)
        }
        
    }
}

module.exports={teacherController}
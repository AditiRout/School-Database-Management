

class studentController{
    static getAllDoc=(req,res)=>{

        res.render("index")
    }
    static createDoc=(req,res)=>{
        res.redirect("/student")
    }
    static getUpdate=(req,res)=>{
        res.render("edit")
    }
    static UpdateDocById=(req,res)=>{
        res.redirect("/student")
    }
    static deleteDoc=(req,res)=>{
        res.redirect("/student")
    }
}

module.exports={studentController}
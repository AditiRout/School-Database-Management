const dotenv=require('dotenv')
dotenv.config()
const {join}=require('path')
const express=require('express')
const app=express()
const port=process.env.PORT || 5000
const DB_URL=process.env.DB_URL
const {connectDB} =require('./db/connect.js')
const {homy}=require('./controllers/homecontrol.js')
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use('/', express.static(join(process.cwd(),'public')))
app.use('/teacher', express.static(join(process.cwd(),'public')))
app.use('/teacher/edit', express.static(join(process.cwd(),'public')))
app.use('/student', express.static(join(process.cwd(),'public')))
app.use('/student/edit', express.static(join(process.cwd(),'public')))


const web=require('./routes/web.js')
const web2=require('./routes/web2.js')

connectDB(DB_URL)

app.use("/student",web)
app.use("/teacher",web2)
app.listen(port,()=>{
    console.log('connected at the port')
})

app.get('/',homy)

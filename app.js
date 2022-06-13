const dotenv=require('dotenv')
dotenv.config()
const {join}=require('path')
const express=require('express')
const app=express()
const port=process.env.port
const DB_URL=process.env.DB_URL
const {connectDB} =require('./db/connect.js')
const {homy}=require('./controllers/homecontrol.js')

app.set('view engine','ejs')

app.use('/', express.static(join(process.cwd(),'public')))
app.use('/student', express.static(join(process.cwd(),'public')))
app.use('/student/edit', express.static(join(process.cwd(),'public')))


const web=require('./routes/web.js')

connectDB(DB_URL)

app.use("/student",web)
app.listen(port,()=>{
    console.log('connected at the port')
})

app.get('/',homy)

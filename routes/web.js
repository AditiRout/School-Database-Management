const express=require('express')
const router=express.Router()
const {studentController} =require('../controllers/studentController.js')

router.get('/',studentController.getAllDoc)
router.get('/edit/:id',studentController.getUpdate)
router.post('/',studentController.createDoc)
router.post('/update/:id',studentController.UpdateDocById)
router.post('/delete/:id',studentController.deleteDoc)
module.exports=router
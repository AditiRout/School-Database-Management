const express=require('express')
const router=express.Router()
const {teacherController} =require('../controllers/teacherController.js')

router.get('/',teacherController.getAllDoc)
router.get('/edit/:id',teacherController.getUpdate)
router.post('/',teacherController.createDoc)
router.post('/update/:id',teacherController.UpdateDocById)
router.post('/delete/:id',teacherController.deleteDoc)
module.exports=router
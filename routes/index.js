var express = require('express');
var router = express.Router();
var helpers=require('../helpers/mark-addHelp')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/result',(req,res)=>{
  helpers.getMarks().then((marks)=>{
    res.render('result/Student-result',{marks});
  })

 

})
router.get('/admin',(req,res)=>{

  res.render('admin/mark-adding')

})
router.post('/mark-adding',(req,res)=>{

  console.log(req.body);
  helpers.markAdd(req.body,(result)=>{
    res.render('admin/mark-adding')

  })
  
})
module.exports = router;

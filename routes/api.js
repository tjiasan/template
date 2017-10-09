var express = require('express');
var router = express.Router();
var Model = require('../models/health-model');

router.get('/', (req, res)=>{
    res.send('api working');
})


router.post('/blog', (req, res) =>{
  /**
    Model.find(req.body, function(err, docs){
      if (err){
        res.send(err)
      }
      res.json({message: docs})
    })
     */
  })
  
  module.exports = router
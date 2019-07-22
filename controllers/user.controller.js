const mongoose=require('mongoose');

const User=require('../models/user.model');

module.exports.register=(req,res,next)=>{
    var user=new User({

        fullName:req.body.fullName,
        email:req.body.email,
        password:req.body.password
    });
    
  
    user
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "User created"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

}
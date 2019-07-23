const _ = require('lodash');
const User=require('../models/user.model');
const passport=require('passport');

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



module.exports.authenticate = (req, res, next) => {
  // call for passport authentication
  passport.authenticate('local', (err, user, info) => {
      // error from passport middleware
      if (err) return res.status(404).json(err);
      // registered user
      if (user) return res.status(200).json({ "token": user.generateJwt() });
      // unknown user or wrong password
      else return res.status(401).json(info);
  })(req, res);
}



 
module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['fullName','email']) });
        }
    );
}




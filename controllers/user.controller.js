const _ = require('lodash');
const User = require('../models/user.model');
const passport = require('passport');

//########### USER API calls################################

module.exports.register = (req, res, next) => {
  var user = new User({

    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
    mobile: '',
    imageURL: ''
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
      if (err.name == 'ValidationError') {
        res.status(501).json({
          error: err
        });

      }
      res.status(501).json({
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




module.exports.userProfile = (req, res, next) => {
  User.findOne({ _id: req._id },
    (err, user) => {
      if (!user)
        return res.status(404).json({ status: false, message: 'User record not found.' });
      else
        return res.status(200).json({ status: true, user: _.pick(user, ['fullName', 'email', '_id', 'imageURL', 'mobile']) });
    }
  );
}




module.exports.updateProfile = (req, res, next) => {

  User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec().then(
    result => {
      res.status(200).json(result);
    }
  ).catch(err => console.log(err));

}

module.exports.verifyCurrentPassword = (req, res, next) => {

  console.log(req.params.id+" "+req.body.password);

  User.findOne({ _id:req.params.id }, (err, user) => {
  console.log(user);
  if(user.password===req.body.password)
   {
       res.status(200).json("Authentication successful");
   }

   else
      res.status(200).json("Please enter correct password");
});



}




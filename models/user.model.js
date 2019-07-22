const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const userSchema=mongoose.Schema({
    fullName:{
        type:String,
        required:'Full name can\'t be empty'
    },
    email:{
        type:String,
        required:'Email can\'t be empty',
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password:{
        type:String,
        required:'Password can\'t be empty',
        minlength:[4,'Password must be atleast 4 characters'],
        
    },
    saltSecret:String
});



// Events
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});




module.exports=mongoose.model('User', userSchema);
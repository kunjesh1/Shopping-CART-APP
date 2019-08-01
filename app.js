require('./config/config');
require('./config/passportConfig');


const express=require('express');
var app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const rtsIndex=require('./routes/index.router');
const mongoose=require('mongoose');
const passport=require('passport');
const morgan=require('morgan');



mongoose.connect(process.env.MONGODB_URI,
{ useNewUrlParser: true }).then((res)=>{ console.log("Connected to database successfully");}).catch(err=>{
    console.log("Connection with database failed");
});




app.use((req,res,next)=>{

    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','*');

    if(req.method==='OPTIONS'){

        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});

    }
    next();

});
//middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api',rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

app.listen(process.env.PORT,()=>{console.log(`Server started at port ":${process.env.PORT}`)});
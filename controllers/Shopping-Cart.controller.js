const Cart=require('../models/shopping-cart.model');

module.exports.create=(req,res,next)=>{

    var cart=new Cart({
       dateCreated:req.body.dateCreated
    });

    cart.save().then(docs=>{
        res.status(201).json(docs);
    })
    .catch(err=>{
        res.status(501).json(err);
    });
}

const Product=require('../models/product.model');

module.exports.products=(req,res,next)=>{



    var product=new Product({
        title:req.body.title,
        price:req.body.price,
        category:req.body.category,
        imageURL:req.body.imageURL

    });
    product.save().then(docs=>{
        res.status(200).json(docs);
    }).catch(err=>console.log(err));
}

module.exports.fetch=(req,res,next)=>{

    Product.find()
           .select("_id title price category imageUrl")
            .exec()
            
            .then(docs=>{
                res.status(200).json(docs);
            })
            .catch(err=>{
                res.status(401).json(err);
            });


}

module.exports.getParticular=(req,res,next)=>{
    var id=req.params.id;
    Product.findById(id).exec()
           .then(docs=>
            res.status(200).json(docs)
           ).catch(
               err=>res.status(300).json(err)
           );



}

module.exports.deleteProduct=(req,res,next)=>{
    var id=req.params.id;
    
    Product.deleteOne({_id:id}).exec()
           .then(docs=>
            res.status(200).json(docs)
           ).catch(
               err=>res.status(300).json(err)
           );

}

module.exports.putProduct=(req,res,next)=>{

    var id=req.params.id;


    Product.updateOne({_id:id}, {
        $set:req.body
    }, { new: true })
        .exec()
        .then(result => {

            res.status(200).json(result);


        }
        ).catch(err => console.log(err));

    }
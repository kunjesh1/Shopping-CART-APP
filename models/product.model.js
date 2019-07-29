const mongoose=require('mongoose');

const ProductSchema=mongoose.Schema({
        title:{type:String},
        price:{type:Number},
        category:{type:String},
        imageURL:{type:String}

});

module.exports=mongoose.model("Product",ProductSchema);
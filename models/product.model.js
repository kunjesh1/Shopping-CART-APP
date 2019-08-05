const mongoose=require('mongoose');

const ProductSchema=mongoose.Schema({
        title:{type:String,
        required:'Title cannot be empty'},
        price:{type:Number, required:'Price cannot be empty'},
        category:{type:String, required:'Price cannot be empty'},
        imageUrl:{type:String}

});

module.exports=mongoose.model("Product",ProductSchema);
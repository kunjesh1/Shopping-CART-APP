const mongoose=require('mongoose');

const CartSchema=mongoose.Schema(
    {
      dateCreated:{type :String}

    }
);

module.exports=mongoose.model('Cart',CartSchema);
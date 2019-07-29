
const Categories=require('../models/categories.model');

module.exports.categories=(req,res,next)=>{

    Categories.find()
              .exec()
              .then(docs=>{
                  return res.status(200).json(docs);
              })
              .catch(err=>{
                  return res.status(400).json("Error"+err);
              });




}
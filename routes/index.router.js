const express = require('express');
const router = express.Router();
const multer = require('multer');


//###############MULTER configuration###################
const uploadPath='/home/kunjesh/Desktop/uploads/';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});


const filefilter = (req, file, cb) => {

    //reject the file

    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {

    }
    cb(null, false);
    cb(null, true);

}

var upload = multer({storage:storage}).single('productImage');

//#########Routes Defined####################################

const ctrlUser = require('../controllers/user.controller');
const jwtHelper = require('../config/jwtHelper');
const ctrlcategories = require('../controllers/categories.controller');
const ctrlProducts = require('../controllers/product.controller');



router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/categories', ctrlcategories.categories);
router.post('/products', ctrlProducts.products);
router.get('/fetch/products', ctrlProducts.fetch);
router.get('/getParticular/:id', ctrlProducts.getParticular);
router.delete('/deleteProduct/:id', ctrlProducts.deleteProduct);
router.patch('/putProduct/:id', ctrlProducts.putProduct);
router.post('/updateProfile', async(req, res) => {
   
    await upload(req,res,function(err){
    if(err){
        console.log(err);
        return res.status(501).json({error:err});
    }
       
    console.log(req.body);
    return res.status(200).json(req.file.path.substring(1)); 
    
}); 


});


module.exports = router;
const express=require('express');
const router=express.Router();

const ctrlUser=require('../controllers/user.controller');
const jwtHelper = require('../config/jwtHelper');
const ctrlcategories=require('../controllers/categories.controller');
const ctrlProducts=require('../controllers/product.controller');

router.post('/register',ctrlUser.register);
router.post('/authenticate',ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/categories',ctrlcategories.categories);
router.post('/products',ctrlProducts.products);
router.get('/fetch/products',ctrlProducts.fetch);
router.get('/getParticular/:id',ctrlProducts.getParticular);
router.delete('/deleteProduct/:id',ctrlProducts.deleteProduct);
router.patch('/putProduct/:id',ctrlProducts.putProduct);

module.exports=router;
const express =  require('express');
const router =  express.Router();
const {getProduct,insertProduct,deleteProduct,getProductID}= require('../controller/productController');

router.get('/',getProduct);
router.get('/:id',getProductID);

router.post('/',insertProduct);
router.delete('/:id',deleteProduct);


module.exports=router;
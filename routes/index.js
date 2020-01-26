const getProduct = require ('../controller/controller.js');
const express =  require ('express');
const router = express.Router();

//get all products
router.get('/products', getProduct.getAllProducts);



//get a single product using id
router.get('/product/:id', getProduct.getSingleProduct);

module.exports = router;
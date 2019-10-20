const path = require('path');
const express = require('express');

const adminController = require('../controllers/admin');

const productController = require('../controllers/shop');

const router = express.Router(); 

// /admin/add-product => GET 
router.get('/add-product', adminController.getAddProduct);
// /admin/products => GET
router.get('/products', adminController.getAddProduct);

// /admin/add-products => POST 
router.post('/add-product', adminController.postAddProduct);
 
module.exports = router;
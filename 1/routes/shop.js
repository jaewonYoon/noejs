const path = require('path');

const express= require('express');

const shopController = require('../controllers/shop');

const router= express.Router();

router.get('/',shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart');

router.get('/checkout');

router.get('/orders', shopController.getOrder);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
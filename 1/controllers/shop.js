const Product = require('../models/product');

exports.getProducts = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list',{
            prods:products,
            pageTitle: 'Product',
            path: '/product-list',
            hasProducts: products.length > 0,
            activeShop: true,
            productCss: true
        })
    })
    // view engine으로 pug설정을 했기 때문에 shop.pug
    // 가 아니라 shop이라고만 적어도 된다.  
}; 

exports.getIndex = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/index',{
            prods:products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCss: true
        })
    })
}

exports.getCart = (req,res,next) => {
    res.render('shop/cart',{
        path: '/cart',
        pageTitle: 'Your Cart'
    })
}

exports.getOrder = (req,res,next) => {
    res.render('shop/orders',{
        path: '/orders',
        pageTitle: 'Your Orders'
    });
}

exports.getCheckout = (req,res,next) => {
    res.render('shop/checkout', {
        path: '/checkout', 
        pageTitle: 'Checkout'
    })
}
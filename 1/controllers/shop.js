const Product = require('../models/product');
const Cart = require('../models/cart');
exports.getProducts = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list',{
            prods:products,
            pageTitle: 'Product',
            path: '/products',
        })
    })
    // view engine으로 pug설정을 했기 때문에 shop.pug
    // 가 아니라 shop이라고만 적어도 된다.  
}; 

exports.getProduct = (req,res,next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product-detail', {
            product: product,
            pageTitle: product.title,
            path: "/products"
        })
    })
}

exports.getIndex = (req,res,next) => {
    Cart.getCart(cart => {
        Product.fetchAll(products => {
            res.render('shop/index',{
                prods:products,
                pageTitle: 'Shop',
                path: '/',
            })
        })
    });
}

exports.getCart = (req,res,next) => {
    res.render('shop/cart',{
        path: '/cart',
        pageTitle: 'Your Cart'
    })
}

exports.postCart = (req,res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
}

exports.getOrders = (req,res,next) => {
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
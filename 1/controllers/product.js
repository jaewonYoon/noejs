const Product = require('../models/product');

exports.getAddProduct = (req,res,next) => {
    res.render('admin/add-product',{
        pageTitle: 'Add product',
        path: 'admin/add-product'
    });
};

exports.postAddProduct = (req,res,next) => {
    const product = new Product(req.body.title);
    product.save(); 
    res.redirect('/'); 
};

exports.getProducts = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list',{
            prods:products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCss: true
        })
    })
    // view engine으로 pug설정을 했기 때문에 shop.pug
    // 가 아니라 shop이라고만 적어도 된다.  
    
}; 


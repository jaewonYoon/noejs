const Product = require('../models/product');

exports.getAddProduct = (req,res,next) => {
    res.render('add-product',{
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
    const products = Product.fetchAll(); 
    // view engine으로 pug설정을 했기 때문에 shop.pug
    // 가 아니라 shop이라고만 적어도 된다.  
    res.render('shop',{
        prods:products,
        path: '/',
        pageTitle: 'Shop'
    });
}; 


const Product = require('../models/product');

exports.getAddProduct = (req,res,next) => {
    res.render('admin/add-product',{
        pageTitle: 'Add product',
        path: '/admin/products'
    });
};

exports.postAddProduct = (req,res,next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    Product.create({
        title: title,
        price: price,
        imageUrl: imageUrl,
        description: description
    })
    .then((result) => {
        console.log(result);
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.getProducts = (req,res,next) => {
    Product.fetchAll(products => {
        res.render('admin/products',{
            prods: products,
            pageTitle: 'Admin',
            path: '/admin/products',
        })
    });
}
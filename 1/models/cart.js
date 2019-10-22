const fs = require('fs'); //파일 시스템 사용 
const path = require('path'); //express 경로 모듈 사용 
const rootDir = require('../util/path'); // 루트 디렉토리 util 폴더에 설정해 놓은거 사용 

const p = path.join(
    rootDir,
    'data',
    'cart.json'
); //사용할 json 파일 설정 

//Cart 클래스 정의 
module.exports = class Cart {
    static addProduct(id,productPrice) {
        //Fetch the previous cart
        fs.readFile(p, (err,fileContent) => {
            let cart = {products: [], totalprice: 0};
            if(!err){
                cart = JSON.parse(fileContent);
            }
            //Analyze the cart => Find existing product
            const existingProductIndex = cart.products.findIndex(
                prod => prod.id === id
            );
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            if(existingProduct){ // product 존재하면 
                updatedProduct = {...existingProduct}; // 기존에 있던 product 담고 
                updatedProduct.qty = updatedProduct.qty +1; // 해당 프로덕트의 수량을 1 증가시킨다.
                cart.products = [...cart.products]; // 
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = {id: id, qty: 1};
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err); 
            });
        })
    }

    static deleteProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) => {
            if(err){
                return;
            }
            const updatedCart ={...JSON.parse(fileContent)};
            const product = updatedCart.products.find(prod => prod.id === id);
            if(!product) {
                return;
            }    
            const productQty = product.qty;
        })
    }
}

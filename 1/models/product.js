const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');
module.exports = class Products { 
    constructor(t){
        this.title = t;
    }

    save() {
        const p = path.join(rootDir,
            'data',
            'products.json');
        fs.readFile(p, (err, fileContent) => {
                let products = [];  
                if(!err){
                    products = JSON.parse(fileContent);
                }
                products.push(this);
                fs.writeFile(p, JSON.stringify(products),(err)=>{
                    console.log(err);
                })
        });  
        products.push(this);
        fs.writeFile(p,JSON.stringify(products), (err) =>{
            console.log(err);
        });
    }

    static fetchAll(){
        return products;
    }
}
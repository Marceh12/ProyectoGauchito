const path = require('path');
const fs = require('fs');


const productsJSON = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));

const productsController = {
    
    productsCategory: function(req,res){
        let category = req.params.category;
        let productsFilter = products.filter(product => product.category == category)
        
        res.render('products',{
            productsArray : productsFilter,
            category : category,
        })
    }
}

module.exports = productsController;
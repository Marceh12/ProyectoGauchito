const path = require('path');
const fs = require('fs');
let db = require('../src/database/models')

const productsController = {
    productsCategory: function(req,res){
        db.Product.findAll({
            where:{category: req.params.category}
        })
        .then((products)=>
            res.render('products', {products: products})
        )
        },
    
    productdetail: function (req,res){
        db.Product.findByPk(req.params.id)
        .then (product => res.render('productDetail',{product : product}))
    }

}

module.exports = productsController;
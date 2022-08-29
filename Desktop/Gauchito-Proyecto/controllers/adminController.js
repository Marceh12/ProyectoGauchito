const path = require('path');
const fs = require('fs');
let db = require('../src/database/models')

const adminController = {
    productsAll: function(req,res){
        db.Products.findAll()
        .then((products)=>
            res.render('panelAdmin', {products: products})
        )
        },
    
    create: function(req,res){
        res.render('create');
    },

    'newProduct': function(req,res){
        let product = {
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            description: req.body.description,
            image: req.file.filename,
            stock: req.body.stock
        }
        db.Products.create(product)
        res.redirect('/panelAdmin')
    },

    edit: (req,res) => {
    },

    delete: function (req,res){
        ////logica
        res.render('panelAdmin');
    }

    }


    module.exports = adminController;
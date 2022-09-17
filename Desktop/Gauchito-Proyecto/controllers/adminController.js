const path = require('path');
const fs = require('fs');
let db = require('../src/database/models')
const {validationResult} = require ('express-validator');

const adminController = {
    productsAll: function(req,res){
        db.Product.findAll()
        .then((products)=>
            res.render('panelAdmin', {product: products})
        )
        },
    
    // CREATE CONTROLLERS
    
    create: function(req,res){
        res.render('create');
    },

    newProduct: function(req,res){
        let product = {
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            description: req.body.description,
            image: req.file ? req.file.filename : null,
            stock: req.body.stock
        }

        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0){
            res.render('create', 
            {errors : resultValidation.mapped(), 
            oldData: req.body})
        }
        else{
            db.Product.create(product)
            res.redirect('/panelAdmin')
        }
        
    },

    edit: (req,res) => {
        db.Product.findByPk(req.params.id)
        .then (product => {
            res.render('edit',{productToEdit : product})})
        
    },

    // UPDATE CONTROLLERS

    update: (req,res) => {
        console.log(req.body)
        
        let product = {
            name: req.body.name? req.body.name : req.body.dataViejaName,
            category: req.body.category? req.body.category : req.body.dataViejaCategory,
            price: req.body.price? req.body.price : req.body.dataViejaPrice,
            description: req.body.description? req.body.description : req.body.dataViejaDescription,
            image: req.file? req.file.filename : req.body.dataViejaImage,
            stock: req.body.stock? req.body.stock : req.body.dataViejaStock
        }
        

        db.Product.update(product,
            {where:{id: req.params.id}}
            )
        .then (product=> {res.redirect('/panelAdmin')})
        
    },

     // DESTROY CONTROLLER.


    delete: function (req,res){
        db.Product.destroy({where: {id: req.params.id}})
        res.redirect('/panelAdmin')
    }

    }


    module.exports = adminController;
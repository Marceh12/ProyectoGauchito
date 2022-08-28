const path = require('path');
const fs = require('fs');
let db = require('../src/database/models')


// const productsJSON = path.resolve(__dirname, '../data/productos.json');
// let products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));

const adminController = {
    
    create: function(req,res){
        res.render('create');
    },

    newProduct: function (req,res){
        // let products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));
        // let id = Math.random(1+ Math.random)

    },

    newProduct: function(req,res){
        let products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));
        let newProduct = {
            id: id,
            name: req.body.name,
            description: req.body.description,
            image: req.file.originalname,
            category: req.body.category,
            price: req.body.price,

        }        
        products.push(newProduct);
        products = JSON.stringify(products, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), products);
        res.redirect('/panelAdmin');
    },

    productsAll: function(req,res){
        let products = JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));
            res.render("panelAdmin", {products})
        },

    edit: (req,res) => {
        let productsToedit= JSON.parse(fs.readFileSync(productsJSON, 'utf-8'));
        let id = req.params.id;
        let product = products.findIndex(product => product.id == id);
        products[product] = productEdit

        productEdit= {
            id: productEdit.id,
            ...req.body,
            image: productEdit.image,
        };
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), products);
        res.redirect('panelAdmin/edit');
    },





    delete: function (req,res){
        ////logica
        res.render('panelAdmin');
    }

    }


    module.exports = adminController;
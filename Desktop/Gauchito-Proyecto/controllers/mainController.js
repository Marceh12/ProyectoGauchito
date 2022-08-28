const path = require('path');
const fs = require('fs');
const productsJson = path.join(__dirname, '../data/productos.json');
const products = JSON.parse(fs.readFileSync(productsJson, 'utf-8'));


const controller =  {
    index: (req, res) => {
        res.render('index')
    },

    register: (req, res) => {
        res.render('register')  
    },

    login: (req, res) => {
        res.render('login')
    },

    panelAdmin: (req, res) => {
        res.render ('panelAdmin')
    },

    loginAdmin: (req, res) => {
        res.render ('loginAdmin')
    },

    create: (req, res) => {
        res.render ('create')
    },

    edit: (req, res) => {
        res.render ('edit')
    }
}

module.exports = controller;
const fs = require ('fs');
const path = require ('path');
const {validationResult} = require ('express-validator');
let db = require('../src/database/models')
var bcrypt = require('bcryptjs');


const user = {

    getData: function(req,res){
        db.User.findAll()   
        .then(usuarios=> console.log(usuarios))    
    },

    login: (req, res) => {
        res.render('login')
    },

    loginAdmin: (req, res) => {
        res.render ('loginAdmin')
    },

    panelAdmin: (req, res) => {
        res.render ('panelAdmin')
    },

    findAll: function(){
        return this.getData()
    },

    findByPk: function(id){
    },
    
    register: (req, res) => {
        res.render('register')  
    },

    create: function (req, res) {
        let user = {
            name: req.body.name,
            email: req.body.email,
            image: req.file.filename,
            password: bcrypt.hashSync(req.body.password, 10)
        }
        console.log (user)
        db.User.create(user)
        res.redirect('/')
    },

    delete: function(req,res){
        
    }
}


module.exports = user;
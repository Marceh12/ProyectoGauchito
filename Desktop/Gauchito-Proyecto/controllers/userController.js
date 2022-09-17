const fs = require ('fs');
const path = require ('path');
let db = require('../src/database/models')
var bcrypt = require('bcryptjs');
const {validationResult} = require ('express-validator');

const user = {

    getData: function(req,res){
        db.User.findAll()
        .then(usuarios=> console.log(usuarios))
    },

    vistaLogin: (req, res) => {
        res.render ('login')
    },

    login: (req, res) => {
        db.User.findOne({
        where: {email: req.body.email}
        })
        .then (user=>{
            if (user){
                let pass = bcrypt.compareSync(req.body.password, user.password)

                if(pass){
                    delete user.password
                    //login
                    //render vista
                    res.send(user)
                }
                else{
                    res.render('login')
                }
            }
            else{
                res.render('login')
            }
        } )

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
            image: req.file? req.file.filename : null,
            password: bcrypt.hashSync(req.body.password, 10)
        }
        const validations = validationResult(req);

        if (validations.errors.length > 0){
            return res.render('register',
            {errors: validations.mapped(),
            oldData: req.body
            })
        }

        else{
            db.User.create(user)
            res.redirect('/')}


    },

    delete: function(req,res){

    }
}


module.exports = user;
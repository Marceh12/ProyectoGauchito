const fs = require ('fs');
const path = require ('path');
let db = require('../src/database/models')
var bcrypt = require('bcryptjs');
const {validationResult} = require ('express-validator');
const { log } = require('console');

const user = {

    getData: function(req,res){
        // db.User.findAll()
        // .then(usuarios=> console.log(usuarios))
    },

    vistaLogin: (req, res) => {
        res.render ('login')
    },

    login: (req, res) => {
        const validations = validationResult(req);

        if (validations.errors.length > 0){
            return res.render('login',
            {errors: validations.mapped(),
            oldData: req.body
            })
        }

        db.User.findOne({
        where: {email: req.body.email}
        })
        .then (user=>{
            if (user){
                let pass = bcrypt.compareSync(req.body.password, user.password)

                if(pass){
                    delete user.password
                    req.session.userLogged = user;
                    console.log(user);
                
                    res.redirect('/users/profile')
                }
                else{
                    res.render('login', {
                        errors:{   
                            password: {
                                msg: 'la contraseña es incorrecta'
                            }
                        },
                        oldData: req.body    
                    })
                }
            }
            else{
                res.render('login',{
                    errors:{   
                        email: {
                            msg: 'El Email no se encuentra registrado'
                        }
                    }
                })
            }
        } )

    },

    logout:  (req, res) => {
        req.session.destroy();
        return res.redirect('/')
    },

    userProfile:  (req, res) => {
        console.log(req.cookies.userEmail)
        res.render ('userProfile',{
            user: req.session.userLogged
        })
    },

    editProfile:  (req, res) => {
        db.User.findByPk(req.params.id)
        .then (user => {
            res.render('profileEdit',{userToEdit : user})})
    },

    profileEditProccess: (req,res) =>{
        let user = {
            name: req.body.name? req.body.name : req.body.dataViejaName,
            email: req.body.email? req.body.email : req.body.dataViejaEmail,
            image: req.file? req.file.filename : req.body.dataViejaImage,
            
        }
        console.log(user)
        db.User.update(user,
            {where:{id: req.params.id}}
            )
        .then (user=> {res.redirect('/')})
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
        
        const validations = validationResult(req);

        if (validations.errors.length > 0){
            return res.render('register',
            {errors: validations.mapped(),
            oldData: req.body
            })
        }

        db.User.findOne({
            where: {email: req.body.email}
            })
            .then (user=>{
                if (user){      
                        return res.render('register', {
                                errors: {
                                    email: {
                                        msg: 'Este email ya esta  registrado'
                                        }
                                },
                                oldData: req.body
                            })
                    
                }
                else{
                    let user = {
                        name: req.body.name,
                        email: req.body.email,
                        image: req.file? req.file.filename : null,
                        password: bcrypt.hashSync(req.body.password, 10)
                    }

                        db.User.create(user)
                        res.redirect('/')
                    }
                })
    }
} 


module.exports = user;
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admincontroller');
const userController = require('../controllers/userController')
const multer = require ('multer');
const uploadFile = require ('../middlewares/multerUser')
const path = require ('path');
const { Console } = require('console');

const { body } = require('express-validator')

const validations = [
    body('name').notEmpty().withMessage('Tenes que escribir un nombre'),
    body('email').notEmpty().withMessage('Tenes que escribir un email').bail()
    .isEmail().withMessage('el correo ingresasdo no es valido'),
    body('password').notEmpty().withMessage('Tenes que escribir un password'),
    body('password2').notEmpty().withMessage('El campo no puede estar vacio'),
    body('inputImg').custom((value,{ req })=>{
        let file = req.file;
        if (!file){
            throw new Error('Tienes que subir una imagen')
        }
        return true
    }),
]

// Login aministrador
router.get("/loginAdmin",userController.loginAdmin);

// Login Usuarios
router.get("/login", userController.vistaLogin);
router.post("/login", userController.login);

/*Rutas para registro de usuarios*/
router.get("/register", userController.register);
router.post('/register',uploadFile.single('inputImg'),validations, userController.create);


module.exports = router;
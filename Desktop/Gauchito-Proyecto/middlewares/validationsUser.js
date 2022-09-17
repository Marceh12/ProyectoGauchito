const { body } = require('express-validator');
const fs = require ('fs');

module.exports= [
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
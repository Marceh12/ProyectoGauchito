const { body } = require('express-validator');
const fs = require ('fs');

module.exports= [
    body('name').notEmpty().withMessage('Tenes que escribir un nombre').isLength({min:3, max: 20}).withMessage('El nombre no puede tener menos de 3 caracteres'),
    body('email').notEmpty().withMessage('Tenes que escribir un email').bail()
    .isEmail().withMessage('el correo ingresasdo no es valido'),
    body('password').notEmpty().withMessage('Tenes que escribir un password')
    .isLength({min:6, max: 12}).withMessage('Tu password debe tener entre 6 y 12 caracteres'),
    // body('password2').notEmpty().withMessage('El campo no puede estar vacio'),
    body('inputImg').custom((value,{ req })=>{
        let file = req.file;
        if (!file){
            throw new Error('Tienes que subir una imagen')
        }
        return true
    }),
]
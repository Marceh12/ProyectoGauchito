const { body } = require('express-validator');
const fs = require ('fs');

module.exports= [
    body('email').notEmpty().withMessage('Ingresa tu Email').isEmail().withMessage('Ingresa un email valido'),
    body('password').notEmpty().withMessage('Ingresa tu password')
    
]
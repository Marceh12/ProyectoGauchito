const { body } = require('express-validator');
const fs = require ('fs');

module.exports= [
    body('email').notEmpty().withMessage('Ingresa tu Email'),
    body('password').notEmpty().withMessage('Ingresa tu password')
    
]
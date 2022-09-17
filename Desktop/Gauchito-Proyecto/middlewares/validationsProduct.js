const { body } = require('express-validator');
const fs = require ('fs');

module.exports= [
    body('name').notEmpty().withMessage('El producto debe tener un nombre').isLength({min:4, max: 40}).withMessage('El producto debe tener entre 4 y 40 caracteres'),
    body('description').notEmpty().withMessage('Debes añadir una descripcion al producto'),
    body('price').notEmpty().withMessage('Debes poner precio al producto').isFloat({min:0, max: 1000000}),
    body('stock').notEmpty().withMessage('Ingresa la cantidad de productos disponibles').isFloat({min:0, max: 5000}),
    body('productImage').custom((value,{ req })=>{
        let file = req.file;
        let acceptedExtensions = ['.jpg','.png','.jpeg'];
        if (file == undefined){
            throw new Error('Adjunta la imagen del producto en formato ' + acceptedExtensions)
        }
        return true
    }),
]
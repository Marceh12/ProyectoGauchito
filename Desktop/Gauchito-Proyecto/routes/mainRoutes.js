const express = require("express");
const router = express.Router();
const {body} = require('express-validator');
const mainController = require("../controllers/mainController");
const userController = require('../controllers/userController');


const validations = [
    body('name').notEmpty().withMessage('Tenes que escribir un nombre'),
    body('email').notEmpty().withMessage('Tenes que escribir un email'),
    body('password').notEmpty().withMessage('Tenes que escribir un password'),
    body('password2').notEmpty().withMessage('El campo no puede estar vacio'),
]

router.get("/", mainController.index);




module.exports = router;

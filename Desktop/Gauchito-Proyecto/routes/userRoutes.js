const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admincontroller');
const userController = require('../controllers/userController')
const multer = require ('multer');
const uploadFile = require ('../middlewares/multerUser')
const path = require ('path');
const validationsUser = require ('../middlewares/validationsUser')
const validacionesLogin = require ('../middlewares/validacionesLogin')

const { body } = require('express-validator')



// Login aministrador
router.get("/loginAdmin",userController.loginAdmin);

// Login Usuarios
router.get("/login", userController.vistaLogin);
router.post("/login",validacionesLogin,  userController.login);

/*Rutas para registro de usuarios*/
router.get("/register", userController.register);
router.post('/register',uploadFile.single('inputImg'),validationsUser, userController.create);


module.exports = router;
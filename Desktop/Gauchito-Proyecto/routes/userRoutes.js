const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admincontroller');
const userController = require('../controllers/userController')
const multer = require ('multer');
const path = require ('path');
const uploadFile = require ('../middlewares/multerUser')

/*MIDDLEWARES*/
const validationsUser = require ('../middlewares/validationsUser');
const validacionesLogin = require ('../middlewares/validacionesLogin');
const guestMiddleware = require ('../middlewares/guestmiddleware');
const authMiddleware = require ('../middlewares/authMiddleware');

const { body } = require('express-validator')



// Login aministrador
router.get("/loginAdmin",userController.loginAdmin);

// Login Usuarios
router.get("/login",guestMiddleware, userController.vistaLogin);
router.post("/login",validacionesLogin,  userController.login);
router.get("/profile",authMiddleware, userController.userProfile);

// Logout

router.get('/logout', userController.logout)

/*Rutas para registro de usuarios*/
router.get("/register",guestMiddleware,  userController.register);
router.post('/register',uploadFile.single('inputImg'),validationsUser, userController.create);


module.exports = router;
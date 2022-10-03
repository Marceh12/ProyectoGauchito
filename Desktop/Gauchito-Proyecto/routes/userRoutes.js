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
const adminFilter = require ('../middlewares/adminMiddleware');
const multerUser = require('../middlewares/multerUser')

const { body } = require('express-validator')





router.get('/panelAdmin',adminFilter, adminController.productsAll);


// Login Usuarios
router.get("/login",guestMiddleware, userController.vistaLogin);
router.post("/login",validacionesLogin,  userController.login);
router.get("/profile",authMiddleware, userController.userProfile);
router.get("/profile/:id", userController.editProfile);
router.put("/profile/:id",uploadFile.single('image'), userController.profileEditProccess);

// Carrito

router.get("/cart", userController.vistaCarrito);

// Logout

router.get('/logout', userController.logout)

/*Rutas para registro de usuarios*/
router.get("/register",guestMiddleware,  userController.register);
router.post('/register',uploadFile.single('inputImg'),validationsUser, userController.create);


module.exports = router;
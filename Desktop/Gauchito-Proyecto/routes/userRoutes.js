const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admincontroller');
const userController = require('../controllers/userController')
const multer = require ('multer');
const path = require ('path');
const { Console } = require('console');

let storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images') )
    },
    filename: (req, file, cb) => {
        console.log(file)
        const userName = file.originalname;
        cb(null,  userName)
    }
});

const upload = multer({storage})

// Login aministrador
router.get("/loginAdmin",userController.loginAdmin);

// Login Usuarios
router.get("/login", userController.login);

/*Rutas para registro de usuarios*/
router.get("/register", userController.register);
router.post('/register',upload.single('inputImg'), userController.create);


module.exports = router;
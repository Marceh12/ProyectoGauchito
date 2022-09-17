const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admincontroller');
const multer = require ('multer');
const path = require ('path');
const uploadFile = require ('../middlewares/multerProduct')



router.get('/', adminController.productsAll)

//ruta para crear registros
router.get('/create', adminController.create);
router.post('/create',uploadFile.single('productImage'), adminController.newProduct);

//ruta editar productos
router.get('/edit/:id', adminController.edit);
router.put('/edit/:id',uploadFile.single('productImage'), adminController.update);

//ruta para borrar productos
router.delete('/delete/:id', adminController.delete);




module.exports = router;
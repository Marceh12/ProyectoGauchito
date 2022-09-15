const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admincontroller');
const multer = require ('multer');
const path = require ('path');

let storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images') )
    },
    filename: (req, file, cb) => {
        console.log(file)
        const prodctName = file.originalname;
        cb(null,  prodctName)
    }
});

const upload = multer({storage})

router.get('/', adminController.productsAll)

//ruta para crear registros
router.get('/create', adminController.create);
router.post('/create',upload.single('productImage'), adminController.newProduct);

//ruta editar productos
router.get('/edit/:id', adminController.edit);
router.put('/edit/:id',upload.single('productImage'), adminController.update);

//ruta para borrar productos
router.delete('/delete/:id', adminController.delete);




module.exports = router;
const express = require("express");
const productsController = require("../controllers/productsController");
const router = express.Router();
const multer = require ('multer');
const path = require('path');





router.get('/:category', productsController.productsCategory);
router.get('/:id', productsController.productdetail)






module.exports = router;




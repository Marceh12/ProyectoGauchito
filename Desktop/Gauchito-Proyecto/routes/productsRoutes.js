const express = require("express");
const productsController = require("../controllers/productsController");
const router = express.Router();


router.get('/:category', productsController.productsCategory);
router.get('/detail/:id', productsController.productdetail);



module.exports = router;




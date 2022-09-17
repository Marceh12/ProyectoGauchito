const express = require("express");
const router = express.Router();
const {body} = require('express-validator');
const mainController = require("../controllers/mainController");
const userController = require('../controllers/userController');




router.get("/", mainController.index);




module.exports = router;

const express = require("express")
const router = express()

const controllerAPIS = require("../controllers/controllerAPIS")


// PRODUCTOS
router.get("/productos",controllerAPIS.todosProductos)
router.get("/productos/:id",controllerAPIS.productoId)

// USUARIOS

router.get("/usuarios",controllerAPIS.todosUsuarios)
router.get("/usuarios/:id",controllerAPIS.usuarioId)

module.exports = router;
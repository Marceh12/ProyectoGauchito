const { urlencoded } = require("express");
const express = require("express");
const app = express();
const path = require ('path')
const session = require('express-session');
const cookieParser = require('cookie-parser');

//depencia para los metodos put y delete
const methodOverride = require('method-override');

// ver
const { json } = require('express');
// ver
const { ppid } = require('process');

//rutas
const mainRoutes = require("./routes/mainRoutes");
const productsRoutes = require("./routes/productsRoutes");
const adminRoutes = require('./routes/adminRoutes');

//para requerir css
app.use(express.static(path.resolve(__dirname, 'public')));

//urlencoded permite capturar informacion enviada en un formulario via POST mediante el metodo req.body
app.use (express.urlencoded({extended: false}));
app.use (express.json());

app.set ('views', path.join (__dirname, 'views'));
app.set("view engine", "ejs");

//correcion ruta para css
app.use(express.static(path.resolve(__dirname, 'public')));

//para metodos put and delete
app.use(methodOverride('_method'));

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/panelAdmin', adminRoutes);




// //Aqui coloco el Middleware para activar lo referido a las cookies
// app.use(cookieParser());

// //Middleware de aplicación que se encarga de controlar si el usuario está logueado o no.
// app.use(access);

//inicio de server
app.listen(process.env.PORT || 3050, function () {
  console.log("servidor corriendo en el puerto 3050");
});



/////nuevo
//capturar datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express(json));





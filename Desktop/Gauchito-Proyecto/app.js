const { urlencoded } = require("express");
const express = require("express");
const app = express();
const path = require ('path')
const session = require('express-session');
const cookies = require('cookie-parser');

// Middleware de aplicacion para usuario logeado

const userLoggedmiddleware = require('./middlewares/userLoggedMiddleware');

//depencia para los metodos put y delete
const methodOverride = require('method-override');

// ver
const { json } = require('express');

//rutas
const mainRoutes = require("./routes/mainRoutes");
const productsRoutes = require("./routes/productsRoutes");
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');


app.set ('views', path.join (__dirname, 'views'));
app.set("view engine", "ejs");

// Override para utilizar PUT y DELETE
app.use(methodOverride('_method'))
//correcion ruta para css
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.use(session({
  secret: 'es un secreto',
  resave: false,
  saveUninitialized:false
}))
app.use(cookies());

app.use(userLoggedmiddleware);


//inicio de server
app.listen(process.env.PORT || 3050, function () {
  console.log("servidor corriendo en el puerto 3050");
});

/////nuevo
//capturar datos del formulario

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/panelAdmin', adminRoutes);
app.use('/users', userRoutes);



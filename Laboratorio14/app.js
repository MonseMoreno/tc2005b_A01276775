const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');


const rutas_juegos = require('./routes/juegos.routes');
const rutas_mascota = require('./routes/mascota.routes');
const rutas_animalitos = require('./routes/animalitos.routes');
const rutas_users = require('./routes/user.routes');
const rutas_principal = require('./routes/principal.routes');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));


app.use(cookieParser());
app.use(session({
    secret: 'Hi, Monse!', 
    resave: false, 
    saveUninitialized: false, 
}));


//Para login
app.use('/users', rutas_users);
//Para videojuegos
app.use('/juegos', rutas_juegos);
//Para mascota
app.use('/mascota', rutas_mascota);
//Para animalitos
app.use('/animalitos', rutas_animalitos);
//Middleware página principal
// app.use((request, response, next) => {
//     response.render('index');
//     next();
// });


//Middleware página principal
app.use((request, response, next) => {
    response.redirect('/users');
    next();
});


app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('Aquí no hay nada'); //Manda la respuesta
});

app.listen(3000);
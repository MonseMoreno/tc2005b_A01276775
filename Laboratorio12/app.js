const express = require('express');
const bodyParser = require('body-parser');

const rutas_juegos = require('./routes/juegos.routes');
const rutas_mascota = require('./routes/mascota.routes');
const rutas_animalitos = require('./routes/animalitos.routes');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/mascota', rutas_mascota);
app.use('/juegos', rutas_juegos);
app.use('/animalitos', rutas_animalitos);


//Middleware
app.use((request, response, next) => {
    response.render('index');
    next();
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.render('lista.ejs'); //Manda la respuesta
});

app.listen(3000);
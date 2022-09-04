const express = require('express');

const router = express.Router();

//fs: filesystem
const fs = require('fs');

var peliculas = [];
var series = [];
var caricaturas = [];
var videojuegos = [];
var personajes = [];


//Para leer videojuegos
fs.readFile('./tops/videojuegos.json', (err, data) => {
    if (err) throw err;
    videojuegos = JSON.parse(data);
    console.log(videojuegos)

});

//Para leer personajes
fs.readFile('./tops/videojuegos.json', (err, data) => {
    if (err) throw err;
    personajes = JSON.parse(data);
    console.log(personajes)

});


//Para videojuegos
router.get('/nuevoVideojuego', (request, response, next) => {
    console.log('GET /nuevoVideojuego');
    response.render('nuevoVideojuego');
});

router.post('/nuevoVideojuego', (request, response, next) => {
    console.log('POST /nuevoVideojuego');;
    console.log(request.body);
    videojuegos.push(request.body);
    let videojuego = JSON.stringify(videojuegos);
    fs.writeFileSync('./tops/videojuegos.json', videojuego, 'utf8');
    response.redirect('/juegos');

});



//Para personajes
router.get('/nuevoPersonaje', (request, response, next) => {
    console.log('GET /nuevoPersonaje');
    response.render('nuevoPersonaje');
});

router.post('/nuevoPersonaje', (request, response, next) => {
    console.log('POST /nuevoPersonaje');;
    console.log(request.body);
    personajes.push(request.body);
    let personaje = JSON.stringify(personajes);
    fs.writeFileSync('./tops/personajes.json', personaje, 'utf8');
    response.redirect('/juegos');

});


router.use('/', (request, response, next) => {
    console.log('Ruta Principal');
    response.render('listaJuegos', {peliculas: peliculas, series:series, caricaturas:caricaturas, videojuegos:videojuegos, personajes:personajes})
});

module.exports = router;
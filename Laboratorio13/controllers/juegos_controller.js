const path = require('path');

const Videojuegos = require('../models/videojuegos');
const Personajes = require('../models/personajes');



// PERSONAJES
exports.get_nuevo_personaje = (request, response, next) => {
    console.log('GET /juegos/nuevoPersonaje');
    response.render('nuevoPersonaje');
};

exports.post_nuevo_personaje = (request, response, next) => {
    console.log('POST /juegos/nuevoPersonaje');
    console.log(request.body);
    let personaje = new Personajes(request.body.nombre);
    personaje.save();
    response.redirect('/juegos');
};


//VIDEOJUEGOS 
exports.get_nuevo_videojuego = (request, response, next) => {
    console.log('GET /juegos/nuevoVideojuego');
    response.render('nuevoVideojuego');
};

exports.post_nuevo_videojuego = (request, response, next) => {
    console.log('POST /juegos/nuevoVideojuego');
    console.log(request.body);
    let juego = new Videojuegos(request.body.nombre);
    juego.save();
    response.redirect('/juegos');
};



exports.principal = (request, response, next) => {
    console.log('Ruta principal');
    response.render('listaJuegos', {personajes: Personajes.fetchAllCPersonajes(), videojuegos: Videojuegos.fetchAllCVideojuegos()})
}


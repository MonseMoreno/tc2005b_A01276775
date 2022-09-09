const path = require('path');

const Videojuegos = require('../models/videojuegos');
const Personajes = require('../models/personajes');



// PERSONAJES
exports.get_nuevo_personaje = (request, response, next) => {
    Personajes.fetchAllCPersonajes()
    .then(([rows, fieldData]) => {
        response.render('nuevoPersonaje', {
            personajes: rows,
            username: request.session.username ? request.session.username : '',
        })
    })
    .catch(err => console.log(err));
};

exports.post_nuevo_personaje = (request, response, next) => {    
    const persona = new Personajes(request.body.nombre, request.body.descripcion,request.body.imagen);
    persona.save().then(() => {
        response.setHeader('Set-Cookie', 'ultimo_personaje='+ persona.nombre +'; HttpOnly', 'utf8');
        response.render('index')
    }).catch(err => console.log(err));
    
};

// Videojuegos
exports.get_nuevo_videojuego = (request, response, next) => {
    Videojuegos.fetchAllVideojuegos()
    .then(([rows, fieldData]) => {
        response.render('nuevoVideojuego', {
            videojuegos: rows,
            username: request.session.username ? request.session.username : '',
        })
    })
    .catch(err => console.log(err));
};

exports.post_nuevo_videojuego = (request, response, next) => {
    console.log('POST /juegos/nuevoVideojuego');
    console.log(request.body);
    const juego = new Videojuegos(request.body.nombre, request.body.descripcion,request.body.imagen);
    juego.save().then(() => {
        response.setHeader('Set-Cookie', 'ultimo_videojuego ='+ juego.nombre +'; HttpOnly', 'utf8');
        response.render('index')
    }).catch(err => console.log(err));
};


exports.principal = (request, response, next) => {
    Videojuegos.fetchAllVideojuegos()
    .then(([videojuegos, fieldData]) => {
        Personajes.fetchAllCPersonajes()
        .then(([personajes,fieldData]) =>{
                response.render('listaJuegos', {
                    videojuegos: videojuegos,
                    personajes:personajes,
                    username: request.session.username ? request.session.username : '',
                    ultimo_videojuego: request.cookies.ultimo_videojuego ? request.cookies.ultimo_videojuego : '',
                    ultimo_personaje: request.cookies.ultimo_personaje ? request.cookies.ultimo_personaje : ''
                })
            }).catch(error => {
                console.log(error);
            });
        }).catch(error =>{
            console.log(error);
        });       
}




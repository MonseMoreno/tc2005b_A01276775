const path = require('path');

const Videojuegos = require('../models/videojuegos');
const Personajes = require('../models/personajes');



// PERSONAJES
exports.get_nuevo_personaje = (request, response, next) => {
    Personajes.fetchAllPersonajes()
    .then(([rows, fieldData]) => {
        response.render('nuevoPersonaje', {
            personajes: rows,
            username: request.session.username ? request.session.username : '',
        })
    })
    .catch(err => console.log(err));
};

exports.post_nuevo_personaje= (request, response, next) => {    
    const persona = new Personajes(request.body.nombre, request.body.sinopsis,request.body.imagen);
    persona.save().then(() => {
        response.setHeader('Set-Cookie', 'ultimo_personaje=' + persona.nombre + '; HttpOnly', 'utf8');
        response.render()
    }).catch(err => console.log(err));
    
};


// exports.post_nuevo_personaje = (request, response, next) => {
//     console.log('POST /juegos/nuevoPersonaje');
//     console.log(request.body);
//     let personaje = new Personajes(request.body.nombre);
//     personaje.save();
//     response.setHeader('Set-Cookie', 'ultimo_personaje ='+personaje.nombre+'; HttpOnly', 'utf8');
//     response.redirect('/juegos');
// };


//VIDEOJUEGOS 
// exports.get_nuevo_videojuego = (request, response, next) => {
//     console.log('GET /juegos/nuevoVideojuego');
//     response.render('nuevoVideojuego', {
//         username: request.session.username ? request.session.username : ''
//     }); 
// };

// VIDEOJUEGOS
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
    const juego = new Videojuegos(request.body.nombre, request.body.sinopsis,request.body.imagen);
    juego.save().then(() => {
        response.setHeader('Set-Cookie', 'ultimo_videojuego='+ juego.nombre +'; HttpOnly', 'utf8');
        response.render()
    }).catch(err => console.log(err));
    
};



// exports.post_nuevo_videojuego = (request, response, next) => {
//     console.log('POST /juegos/nuevoVideojuego');
//     console.log(request.body);
//     let juego = new Videojuegos(request.body.nombre);
//     juego.save();
//     response.setHeader('Set-Cookie', 'ultimo_videojuego='+juego.nombre+'; HttpOnly','utf8');
//     response.redirect('/juegos');
// };



// exports.principal = (request, response, next) => {
//     console.log('Ruta principal');
//     response.render('listaJuegos', {personajes: Personajes.fetchAllCPersonajes(), videojuegos: Videojuegos.fetchAllCVideojuegos(), 
//         username: request.session.username ? request.session.username : '',
//         ultimo_videojuego: request.cookies.ultimo_videojuego ? request.cookies.ultimo_videojuego : '',
//         ultimo_personaje: request.cookies.ultimo_personaje ? request.cookies.ultimo_personaje : ''
//     })
// }



exports.principal = (request, response, next) => {
    Videojuegos.fetchAllPeliculas()
    .then(([videojuegos, fieldData]) => {
        Personajes.fetchAllPersonajes()
        .then(([personajes,fieldData]) =>{
                response.render('listaVisual', {
                    videojuegos: videojuegos,
                    personajes: personajes, 

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



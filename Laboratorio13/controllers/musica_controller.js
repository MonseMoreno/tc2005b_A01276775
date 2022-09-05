const path = require('path');
const Artistas = require('../models/musica/artistas');
const Bandas = require('../models/musica/bandas');


exports.get_nuevo_artista = (request, response, next) => {
    console.log('GET /musica/nuevoArtista');
    response.render('nuevoArtista');
};

exports.post_nuevo_artista = (request, response, next) => {
    console.log('POST /musica/nuevoArtista');
    console.log(request.body);
    let artista = new Artistas(request.body.nombre);
    artista.save();
    response.redirect('/musica');
};

exports.get_nueva_banda = (request, response, next) => {
    console.log('GET /musica/nuevaBanda');
    response.render('nuevaBanda');
};

exports.post_nueva_banda = (request, response, next) => {
    console.log('POST /musica/nuevaBanda');
    console.log(request.body);
    let banda = new Bandas(request.body.nombre);
    banda.save();
    response.redirect('/musica');
};


exports.principal = (request, response, next) => {
    console.log('Ruta principal Música');
    response.render('listaMusica', {artistas: Artistas.fetchAllArtistas(),bandas : Bandas.fetchAllBandas()})
}
const path = require('path');

const Animalitos = require('../models/animalitos');



exports.principal = (request, response, next) => {
    console.log('Ruta principal');
    response.render('animalitos', {animalitos: Animalitos.fetchAllCAnimalitos()})
}

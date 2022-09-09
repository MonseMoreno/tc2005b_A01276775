const path = require('path');

const Animalitos = require('../models/animalitos');



// exports.principal = (request, response, next) => {
//     console.log('Ruta principal');
//     response.render('animalitos', {animalitos: Animalitos.fetchAllCAnimalitos()})
// }
exports.principal = (request, response, next) => {
    console.log('Ruta principal animalitos');
            Animalitos.fetchAllAnimalitos()
            .then(([animalitos,fieldData]) => {
                response.render('animalitos', {
                    animalitos: animalitos,
                    username: request.session.username ? request.session.username : '',
                })
            }).catch(error => {
                console.log(error);
            });
}
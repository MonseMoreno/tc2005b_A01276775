const express = require('express');
const path = require('path');

const router = express.Router();

//fs: filesystem
const fs = require('fs');
const readline = require('readline');

var animalitos = [];


//Para leer los artistas
fs.readFile('./tops/animalitos.json', (err, data) => {
    if (err) throw err;
    animalitos = JSON.parse(data);
    console.log(animalitos)

});

//Pagina principal animalitos
router.use('/', (request, response, next) => {
    console.log('Ruta Principal');
    response.render('animalitos', {animalitos: animalitos});
});

module.exports = router;
const express = require('express');
const router = express.Router();


const fs = require('fs');
const readline = require('readline');

//VARIABLES 
const animalitos = [];

//Función para leer archivos
function LeerArchivos (txt,array){
    const readInterface = readline.createInterface({
    input: fs.createReadStream(txt),
    output: process.stdout,
    console: false
});

readInterface.on('line', function(line) {
    array.push(line)
});
}

//Añadir datos nuevos al txt
function  DatoNuevo(txt,dato){
fs.appendFile(txt, dato + "\n", (err) => {
    if (err) throw err;
    console.log(dato + "Ha sido agregado!")
});
}

//Leer los archivos

LeerArchivos('animalitos.txt',animalitos);

//numero = Math.floor(Math.random() * 5) + 1;


router.use('/', (request, response, next) => {
    console.log('Use Ruta /animalitos');
    let respuesta = '<!DOCTYPE html> <html lang="es"> <head> <meta charset="utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"> <title> A01276775_Lab10 </title> </head> <body> <header> <nav id = "navbar"> <div class="nav-wrapper purple lighten-3">';
    respuesta += '<img src="https://cdn-icons-png.flaticon.com/512/2325/2325325.png" alt="" width="65" height="60" class="d-inline-block align-text-top" > <ul id="nav-mobile" class="right hide-on-med-and-down"> <li> &nbsp Monserrat Karime Moreno Casas A01276775 &nbsp </li></ul></div></nav></header>';
    respuesta += '<div class="Contenido "> <h1><FONT COLOR="purple"><center> Un animalito para ti! </center> </h1></FONT></h1></div>';
    //for (let i in comida) {
    respuesta +='  <div align="center"> <img  src = ' + animalitos[Math.floor(Math.random() * 5) + 1] + ' width = 400px height = 250px; alt = "Imagen Animalito"/> </div>';
   // } 
    
    response.send(respuesta); 
});

module.exports = router;
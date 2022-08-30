const express = require('express');
const router = express.Router();


const fs = require('fs');
const readline = require('readline');

//VARIABLES 
const videojuegos = [];


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

LeerArchivos('videojuegos.txt',videojuegos);


router.get('/Videojuegos', (request, response, next) => {
    console.log('GET /principal/Videojuegos');
    
    let respuesta = '<!DOCTYPE html>';
    respuesta += '<head>';
    respuesta += '<title> A01276775_Lab10 </title>';
    respuesta += '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">';
    respuesta += '<link rel="stylesheet" href="css/style.css" media="screen,projection"/>';
    respuesta += '<meta charset="utf-8" />';
    respuesta += '</head>';
    respuesta += '<body>';
    respuesta += '<nav class="navbar is-black" role="navigation" aria-label="main navigation">';
    respuesta += '<div class="navbar-brand">  ';         
    respuesta += '<a class="navbar-item " href="https://bulma.io">';
    respuesta += '<img src="https://images.vexels.com/media/users/3/144097/isolated/preview/3dedcd235214cdde6b4e171fdbf66c9d-icono-de-corazon.png"';
    respuesta += 'alt="Just a hearth" width="40" height="28">';
    respuesta += '</a> ';          
    respuesta += '<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">';
    respuesta += '<span aria-hidden="true"></span>';
    respuesta += '<span aria-hidden="true"></span>';
    respuesta += '<span aria-hidden="true"></span> </a> </div>';
    respuesta += '</nav>';
    respuesta += '<header>';      
    respuesta += '<div id=Content>';
    respuesta += '<img id="logo" src="https://i.pinimg.com/564x/c6/80/7a/c6807aeee472af3d95ea0e2c9821f1d1.jpg" alt="Imagen Anya"><br>';
    respuesta += '<br>';           
    respuesta += '<H2> <center> Laboratorio 10 </center>  <br>';
    respuesta += '<center>  Rutas y formas </center> <br>';
    respuesta += '</H2>';
    respuesta += '</header>';
    respuesta += '<hr>';
    respuesta += '<h1><FONT COLOR="purple"><center>NUEVO VIDEOJUEGO FAVORITO!!! </center> </h1></FONT></h1>';
    respuesta += '<h4>Ingresar...</h4></div>';
    respuesta += '<form action="/Principal/Videojuegos" method="POST">';
    respuesta += '<label for="nombre">Nombre: </label> ';
    respuesta += '<input type="text" id="nombre" name="nombre" placeholder="Diablo III"';
    respuesta += '<br><br>';
    respuesta += '<a href=""><input type ="submit" value="Enviar"></a>';
    respuesta += '</form>';
    respuesta += '<br><br>';
    respuesta += ' <a href="/Principal"> <button class="button is-danger is-light">Pagina Inicial</button></a>';
    respuesta += '</div>';
    respuesta += '</body>';

    
    response.send(respuesta); 
});


router.post('/Videojuegos', (request, response, next) => {
    console.log('POST /principal/Videojuegos');
    let dato = request.body.nombre
    videojuegos.push(dato);
    
    
    console.log(videojuegos);
    console.log(dato);
    console.log('Verificando el string de los videojuegos');
    console.log(videojuegos);
    response.redirect('/Principal');
    DatoNuevo('videojuegos.txt', dato);
    
});


router.use('/', (request, response, next) => {

    let respuesta = '<!DOCTYPE html>';
    respuesta += '<head>';
    respuesta += '<title> A01276775_Lab10 </title>';
    respuesta += '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">';
    respuesta += '<link rel="stylesheet" href="css/style.css" media="screen,projection"/>';
    respuesta += '<meta charsetrespuesta charset="utf-8" />';
    respuesta += '</head>';
    respuesta += '<body>';
    respuesta += '<nav class="navbar is-black" role="navigation" aria-label="main navigation">';
    respuesta += '<div class="navbar-brand">  ';         
    respuesta += '<a class="navbar-item " href="https://bulma.io">';
    respuesta += '<img src="https://images.vexels.com/media/users/3/144097/isolated/preview/3dedcd235214cdde6b4e171fdbf66c9d-icono-de-corazon.png"';
    respuesta += 'alt="Just a hearth" width="40" height="28">';
    respuesta += '</a> ';          
    respuesta += '<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">';
    respuesta += '<span aria-hidden="true"></span>';
    respuesta += '<span aria-hidden="true"></span>';
    respuesta += '<span aria-hidden="true"></span>';
    respuesta += '</a>';
    respuesta += '</div>';
    respuesta += '</nav>';
    respuesta += '<header>';      
    respuesta += '<div id=Content>';
    respuesta += '<img id="logo" src="https://i.pinimg.com/564x/c6/80/7a/c6807aeee472af3d95ea0e2c9821f1d1.jpg" alt="Imagen Anya"><br>';
    respuesta += '<br>';           
    respuesta += '<H2> <center> Laboratorio 10 </center>  <br>';
    respuesta += '<center>  Rutas y formas </center> <br>';
    respuesta += '</H2>';
    respuesta += '</header>';
    respuesta += '<hr>';
    respuesta += '<div id="Datos">';
    respuesta += 'Nombre: Monserrat Karime Moreno Casas <br>';
    respuesta += 'Edad: 20 años <br>';
    respuesta += 'Matricula : A01276775 <br>';
    respuesta += 'Correo electrónico: A01276775@tec.mx<br>';
    respuesta += '</div>';      
    respuesta += '<hr>';
    respuesta += '<div id="Sobre mi">';
    respuesta += '<H3 align="center"><em> Conóceme </em></H3>';
    respuesta += '<div class="card">';
    respuesta += '<div class="card-content">';
    respuesta += '<div class="media">';
    respuesta += '<div class="media-left">';
    respuesta += '<figure class="image is-48x48">';
    respuesta += '<img src="yo.jpg" alt="Placeholder image">';
    respuesta += '</figure>';
    respuesta += '</div>';
    respuesta += '<div class="media-content">';
    respuesta += '<p class="title is-4">Monserrat Moreno</p>';
    respuesta += '<p class="subtitle is-6">@MonseCa</p>';
    respuesta += '</div></div> ';              
    respuesta += '<div class="content">';
    respuesta += '<p align="justify"> Hola mi nombre es <strong> Monserrat Karime Moreno Casas </strong> una estudiante de ITC en el';
    respuesta += 'Tecnológico de Monterrey campus Querétaro';
    respuesta += 'me considero una persona reservada, incluso tímida, pero también soy una persona graciosa, comprometida,';
    respuesta += 'comprensiva, tolerante y responsable.';
    respuesta += 'Mi comida favorita es la milanesa y la barbacoa, mi animal favorito es el lobo, mis pasatiempos';
    respuesta += 'actualmente son escribir, jugar videojuegos (mi favorito actualmente es Valorant),';
    respuesta += 'también me gusta mucho la ilustración digital donde he trabajado para la creación de emotes o banners';
    respuesta += 'para creadores de contenidos pequeños y actualmente';
    respuesta += 'actualmente los softwares que sé utilizar son <a href=https://www.systemax.jp/en/sai />Paint Tool';
    respuesta += 'Sai</a> y <a href=https://procreate.art>Procreate</a>.';
    respuesta += '</p>';
    respuesta += '<br>';
    respuesta += '<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>';
    respuesta += '</div></div></div><br>';
    respuesta += '<H3 align="center"><em> Mis videojuegos favoritos </em></H3>';

    for (let i in videojuegos) {
        respuesta += '<li>' + videojuegos[i] + '</li>';
    } 


    respuesta += '<div class="card">';
    respuesta += '<a href="/Principal/Videojuegos"> <button class="button is-danger is-light">Añadir otro</button></a>';
    respuesta += '</div></div><br>  <br>';
    respuesta += '</div><br><br><hr>';
    respuesta += '<div class="container ">';
    respuesta += '<center> ';
    respuesta += '<a href="/Mascota"> <button class="button is-danger is-light"> Conoce mi mascota</button></a>';
    respuesta += '<a href="/Animalitos"> <button class="button is-danger is-light"> Mira animalitos</button></a>';
    respuesta += '</center>';
    respuesta += '</div>';
    respuesta += '<footer> Editor de html: Visual Studio Code <a href="https://code.visualstudio.com/"> Link </a> <br>';
    respuesta += '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"';
    respuesta += 'width="30"';
    respuesta += 'height="40">';
    respuesta += '</footer>';
    respuesta += '</div>';
    respuesta += '</body>';
    respuesta += '</html>';  
    
    
    response.send(respuesta); 

});







module.exports = router;
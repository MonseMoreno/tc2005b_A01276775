const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));


//RUTAS
const rutas_principal = require('./routes/principal.routes');
const rutas_mascota = require('./routes/mascota.routes');
const rutas_animalitos = require('./routes/animalitos.routes');

app.use('/Principal', rutas_principal);
app.use('/Mascota', rutas_mascota);
app.use('/animalitos', rutas_animalitos);


// app.use((request, response, next) => {
//     respuesta = '<!DOCTYPE html> <html lang="es"> <head> <meta charset="utf-8"/>';
//     respuesta += '<title> A01276775_Lab1 </title> </head> <body>   <div id = "Content">  <header> <H2> Laboratorio 11 <br> Express <br> </H2> </header> <hr> <div id = "Datos"> Nombre: Monserrat Karime Moreno Casas <br>';
//     respuesta += 'Edad: 19 años <br> Matricula : A01276775 <br> Semestre: 4to<br>    Correo electrónico: A01276775@tec.mx<br> </div>';
//     respuesta += '<div id = "about"> <a href = http://localhost:3000/favoritos > Página de videojuegos!!! </a>. <a href = http://localhost:3000/comida > Página de comidas!! </a>.  <a href = http://localhost:3000/animalitos > Ver animalitos! </a>';
//     respuesta += '</div>  </div> <hr> <footer> Editor de html: Visual Studio Code <a href = "https://code.visualstudio.com/" > Link </a>  </footer> </div> </body>';
//     response.send(respuesta);
//     next();
// });


app.use((request, response,next) => {
    console.log("Error 404")
    response.statusCode = 404;
    response.send("Esta página de videojuegos no existe :("); //Manda la respuesta
});


app.listen(3000);
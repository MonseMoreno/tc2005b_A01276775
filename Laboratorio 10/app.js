/*
Sigue la demostración del profesor en la sesión de clase.
Utilizando alguno de tus laboratorios anteriores (o si lo prefieres empieza de 0), elabora una aplicación web con las siguientes características:
La aplicación debe poder responder al menos a 3 rutas diferentes, y mandar una respuesta HTTP 404 cuando la ruta no existe.
En alguna de las rutas, la aplicación debe contener al menos 1 forma que debe enviar datos al servidor por POST.
El servidor debe reaccionar ante este envío y guardar los datos en un archivo de texto dentro del mismo servidor.
*/

const fs = require('fs');
const readline = require('readline');


//Variables
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


const http = require('http');

const server = http.createServer( (request, response) => {

    if (request.url === '/'){
        console.log('funciona el node pagina inicial ');
        response.write('<!DOCTYPE html>');
        response.write('<head>');
        response.write('<title> A01276775_Lab10 </title>');
        response.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">');
        response.write('<link rel="stylesheet" href="css/style.css" media="screen,projection"/>');
        response.write('<meta charset="utf-8" />');

        response.write('</head>');
        response.write('<body>');
        response.write('<nav class="navbar is-black" role="navigation" aria-label="main navigation">');
        response.write('<div class="navbar-brand">  ');         
        response.write('<a class="navbar-item " href="https://bulma.io">');
        response.write('<img src="https://images.vexels.com/media/users/3/144097/isolated/preview/3dedcd235214cdde6b4e171fdbf66c9d-icono-de-corazon.png"');
        response.write('alt="Just a hearth" width="40" height="28">');
        response.write('</a> ');          
        response.write('<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">');
        response.write('<span aria-hidden="true"></span>');
        response.write('<span aria-hidden="true"></span>');
        response.write('<span aria-hidden="true"></span>');
        response.write('</a>');
        response.write('</div>');
        response.write('</nav>');
        response.write('<header>');      
        response.write('<div id=Content>');
        response.write('<img id="logo" src="https://i.pinimg.com/564x/c6/80/7a/c6807aeee472af3d95ea0e2c9821f1d1.jpg" alt="Imagen Anya"><br>');
        response.write('<br>');           
        response.write('<H2> <center> Laboratorio 10 </center>  <br>');
        response.write('<center>  Rutas y formas </center> <br>');
        response.write('</H2>');
        response.write('</header>');
        response.write('<hr>');
        response.write('<div id="Datos">');
        response.write('Nombre: Monserrat Karime Moreno Casas <br>');
        response.write('Edad: 20 años <br>');
        response.write('Matricula : A01276775 <br>');
        response.write('Correo electrónico: A01276775@tec.mx<br>');
        response.write('</div>');      
        response.write('<hr>');
        response.write('<div id="Sobre mi">');
        response.write('<H3 align="center"><em> Conóceme </em></H3>');
        response.write('<div class="card">');
        response.write('<div class="card-content">');
        response.write('<div class="media">');
        response.write('<div class="media-left">');
        response.write('<figure class="image is-48x48">');
        response.write('<img src="yo.jpg" alt="Placeholder image">');
        response.write('</figure>');
        response.write('</div>');
        response.write('<div class="media-content">');
        response.write('<p class="title is-4">Monserrat Moreno</p>');
        response.write('<p class="subtitle is-6">@MonseCa</p>');
        response.write('</div></div> ');              
        response.write('<div class="content">');
        response.write('<p align="justify"> Hola mi nombre es <strong> Monserrat Karime Moreno Casas </strong> una estudiante de ITC en el');
        response.write('Tecnológico de Monterrey campus Querétaro');
        response.write('me considero una persona reservada, incluso tímida, pero también soy una persona graciosa, comprometida,');
        response.write('comprensiva, tolerante y responsable.');
        response.write('Mi comida favorita es la milanesa y la barbacoa, mi animal favorito es el lobo, mis pasatiempos');
        response.write('actualmente son escribir, jugar videojuegos (mi favorito actualmente es Valorant),');
        response.write('también me gusta mucho la ilustración digital donde he trabajado para la creación de emotes o banners');
        response.write('para creadores de contenidos pequeños y actualmente');
        response.write('actualmente los softwares que sé utilizar son <a href=https://www.systemax.jp/en/sai />Paint Tool');
        response.write('Sai</a> y <a href=https://procreate.art>Procreate</a>.');
        response.write('</p>');
        response.write('<br>');
        response.write('<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>');
        response.write('</div></div></div><br>');
        response.write('<H3 align="center"><em> Mis videojuegos favoritos </em></H3>');

        for (let i in videojuegos) {
            response.write('<li class="collection-item ">' + videojuegos[i] + '</li>');
        }


        response.write('<div class="card">');
        response.write('<a href="/Videojuegos"> <button class="button is-danger is-light">Añadir otro</button></a>');
        response.write('</div></div><br>  <br>');

        response.write ('</div><br><br><hr>');


        response.write('<div class="container ">');
        response.write('<center> ');
        response.write('<a href="/Mascota"> <button class="button is-danger is-light"> Conoce mi mascota</button></a>');
        response.write('<a href="/Mascota"> <button class="button is-danger is-light"> Conoce mi trabajo</button></a>');
        response.write('</center>');
        response.write('</div>');
        response.write('<footer> Editor de html: Visual Studio Code <a href="https://code.visualstudio.com/"> Link </a> <br>');
        response.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"');
        response.write('width="30"');
        response.write('height="40">');
        response.write('</footer>');
        response.write('</div>');
        response.write('</body>');
        response.write('</html>');  
        
    

        response.end();
    }


    
    else if (request.url === '/Mascota'){
        response.write('<!DOCTYPE html>');
        response.write('<head>');
        response.write('<title> A01276775_Lab10 </title>');
        response.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">');
        response.write('<link rel="stylesheet" href="css/style.css" media="screen,projection"/>');
        response.write('<meta charset="utf-8" />');

        response.write('</head>');
        response.write('<body>');
        response.write('<nav class="navbar is-black" role="navigation" aria-label="main navigation">');
        response.write('<div class="navbar-brand">  ');         
        response.write('<a class="navbar-item " href="https://bulma.io">');
        response.write('<img src="https://images.vexels.com/media/users/3/144097/isolated/preview/3dedcd235214cdde6b4e171fdbf66c9d-icono-de-corazon.png"');
        response.write('alt="Just a hearth" width="40" height="28">');
        response.write('</a> ');          
        response.write('<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">');
        response.write('<span aria-hidden="true"></span>');
        response.write('<span aria-hidden="true"></span>');
        response.write('<span aria-hidden="true"></span>');
        response.write('</a>');
        response.write('</div>');
        response.write('</nav>');
        response.write('<header>');      
        response.write('<div id=Content>');
        response.write('<img id="logo" src="https://i.pinimg.com/564x/c6/80/7a/c6807aeee472af3d95ea0e2c9821f1d1.jpg" alt="Imagen Anya"><br>');
        response.write('<br>');           
        response.write('<H2> <center> Laboratorio 10 </center>  <br>');
        response.write('<center>  Rutas y formas </center> <br>');
        response.write('</H2>');
        response.write('</header>');
        response.write('<hr>');
        response.write('<div id="Datos">');
        response.write('Nombre: Monserrat Karime Moreno Casas <br>');
        response.write('Edad: 20 años <br>');
        response.write('Matricula : A01276775 <br>');
        response.write('Correo electrónico: A01276775@tec.mx<br>');
        response.write('</div>');      
        response.write('<hr>');
        response.write('<div id="Sobre mi">');

        response.write('<div class="box">');
        response.write('<article class="media">');
        response.write('<div class="media-left">');
        response.write('<figure class="image is-96x96">');
        response.write('<img src="imagenes/haku1.jpeg" alt="Image">');
        response.write('</figure>');
        response.write('</div>');
        response.write('<div class="media-content">');
        response.write('<div class="content">');
        response.write('<p><br><br><br>     ');                     
        response.write('El es <strong>Haku</strong>! Un animalito muy cariñoso tiene cuatro meses, le gusta mucho el pollo y las croquetas. ');
        response.write('Prefiere dormir en el piso que en su cama, le gusta mucho correr y meterse en las cajas. ');
        response.write('<br><br><br><br>');
        response.write('</p>');
        response.write('</div>');
        response.write('</div>');
        response.write('</article>');
        response.write('</div>');
        response.write('</div><br><br><hr>');
        response.write('<center> ');
        response.write('<img src="imagenes/Haku2.jpeg" width="200" height="200">');
        response.write('<img src="imagenes/Haku3.jpeg" width="200" height="200">');
        response.write('<img src="imagenes/Haku5.jpeg" width="150" height="200">');
        response.write('<img src="imagenes/Haku4.jpeg" width="150" height="200">');
        response.write('</center>');
        response.write('<center> ');
        response.write('<button class="button is-danger is-light"> Volver al inicio</button>');
        response.write('</center> <br><hr><br> ');
        response.write('<footer> Editor de html: Visual Studio Code <a href="https://code.visualstudio.com/"> Link </a> <br>');
        response.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"');
        response.write('width="30"');
        response.write('height="40">');
        response.write('</footer>');
        response.write('</div>');
        response.write('</body>');
        response.write('</html>');
        response.end();
    }

    else if (request.url === '/Videojuegos' && request.method === 'GET') {

        console.log('funciona el node videojuego favorito');
        response.write('<!DOCTYPE html>');
        response.write('<head>');
        response.write('<title> A01276775_Lab10 </title>');
        response.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">');
        response.write('<link rel="stylesheet" href="css/style.css" media="screen,projection"/>');
        response.write('<meta charset="utf-8" />');

        response.write('</head>');
        response.write('<body>');
        response.write('<nav class="navbar is-black" role="navigation" aria-label="main navigation">');
        response.write('<div class="navbar-brand">  ');         
        response.write('<a class="navbar-item " href="https://bulma.io">');
        response.write('<img src="https://images.vexels.com/media/users/3/144097/isolated/preview/3dedcd235214cdde6b4e171fdbf66c9d-icono-de-corazon.png"');
        response.write('alt="Just a hearth" width="40" height="28">');
        response.write('</a> ');          
        response.write('<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">');
        response.write('<span aria-hidden="true"></span>');
        response.write('<span aria-hidden="true"></span>');
        response.write('<span aria-hidden="true"></span>');
        response.write('</a>');
        response.write('</div>');
        response.write('</nav>');
        response.write('<header>');      
        response.write('<div id=Content>');
        response.write('<img id="logo" src="https://i.pinimg.com/564x/c6/80/7a/c6807aeee472af3d95ea0e2c9821f1d1.jpg" alt="Imagen Anya"><br>');
        response.write('<br>');           
        response.write('<H2> <center> Laboratorio 10 </center>  <br>');
        response.write('<center>  Rutas y formas </center> <br>');
        response.write('</H2>');
        response.write('</header>');
        response.write('<hr>');
        response.write('<h1><FONT COLOR="purple"><center>NUEVO VIDEOJUEGO FAVORITO!!! </center> </h1></FONT></h1>');
        response.write('<h4>Ingresar...</h4></div>');
        response.write('<form action="/Videojuegos" method="POST">');
        response.write('<label for="nombre">Nombre: </label> ');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="Diablo III"');
        response.write('<br><br>');
        response.write('<a href=""><input type ="submit" value="Enviar"></a>')
        response.write('</form>');
        response.write('<br><br>');
        response.write(' <a href="/"> <button class="button is-danger is-light">Pagina Inicial</button></a>');
        response.write('</div>')
        response.write('</body>');
        response.end();
    } 
    
    else if (request.url === '/Videojuegos' && request.method === 'POST') {  
        console.log("POST");
        let datos = [];
        request.on('data', (dato) => {
            //console.log(dato);
            datos.push(dato);
        });
    
        return request.on('end', () => {
            console.log(datos);
            let datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            let nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            videojuegos.push(nuevo_dato);
            DatoNuevo('videojuegos.txt', nuevo_dato);
            console.log(videojuegos);
            
            response.write('<!DOCTYPE html>');
            response.write('<head>');
            response.write('<title> A01276775_Lab10 </title>');
            response.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">');
            response.write('<link rel="stylesheet" href="css/style.css" media="screen,projection"/>');
            response.write('<meta charset="utf-8" />');
    
            response.write('</head>');
            response.write('<body>');
            response.write('<nav class="navbar is-black" role="navigation" aria-label="main navigation">');
            response.write('<div class="navbar-brand">  ');         
            response.write('<a class="navbar-item " href="https://bulma.io">');
            response.write('<img src="https://images.vexels.com/media/users/3/144097/isolated/preview/3dedcd235214cdde6b4e171fdbf66c9d-icono-de-corazon.png"');
            response.write('alt="Just a hearth" width="40" height="28">');
            response.write('</a> ');          
            response.write('<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">');
            response.write('<span aria-hidden="true"></span>');
            response.write('<span aria-hidden="true"></span>');
            response.write('<span aria-hidden="true"></span>');
            response.write('</a>');
            response.write('</div>');
            response.write('</nav>');
            response.write('<header>');      
            response.write('<div id=Content>');
            response.write('<img id="logo" src="https://i.pinimg.com/564x/c6/80/7a/c6807aeee472af3d95ea0e2c9821f1d1.jpg" alt="Imagen Anya"><br>');
            response.write('<br>');           
            response.write('<H2> <center> Laboratorio 10 </center>  <br>');
            response.write('<center>  Rutas y formas </center> <br>');
            response.write('</H2>');
            response.write('</header>');
            response.write('<hr>');
            response.write('<div id="Datos">');
            response.write('Nombre: Monserrat Karime Moreno Casas <br>');
            response.write('Edad: 20 años <br>');
            response.write('Matricula : A01276775 <br>');
            response.write('Correo electrónico: A01276775@tec.mx<br>');
            response.write('</div>');      
            response.write('<hr>');
            response.write('<div id="Sobre mi">');
            response.write('<H3 align="center"><em> Conóceme </em></H3>');
            response.write('<div class="card">');
            response.write('<div class="card-content">');
            response.write('<div class="media">');
            response.write('<div class="media-left">');
            response.write('<figure class="image is-48x48">');
            response.write('<img src="yo.jpg" alt="Placeholder image">');
            response.write('</figure>');
            response.write('</div>');
            response.write('<div class="media-content">');
            response.write('<p class="title is-4">Monserrat Moreno</p>');
            response.write('<p class="subtitle is-6">@MonseCa</p>');
            response.write('</div></div> ');              
            response.write('<div class="content">');
            response.write('<p align="justify"> Hola mi nombre es <strong> Monserrat Karime Moreno Casas </strong> una estudiante de ITC en el');
            response.write('Tecnológico de Monterrey campus Querétaro');
            response.write('me considero una persona reservada, incluso tímida, pero también soy una persona graciosa, comprometida,');
            response.write('comprensiva, tolerante y responsable.');
            response.write('Mi comida favorita es la milanesa y la barbacoa, mi animal favorito es el lobo, mis pasatiempos');
            response.write('actualmente son escribir, jugar videojuegos (mi favorito actualmente es Valorant),');
            response.write('también me gusta mucho la ilustración digital donde he trabajado para la creación de emotes o banners');
            response.write('para creadores de contenidos pequeños y actualmente');
            response.write('actualmente los softwares que sé utilizar son <a href=https://www.systemax.jp/en/sai />Paint Tool');
            response.write('Sai</a> y <a href=https://procreate.art>Procreate</a>.');
            response.write('</p>');
            response.write('<br>');
            response.write('<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>');
            response.write('</div></div></div><br>');
            response.write('<H3 align="center"><em> Mis videojuegos favoritos </em></H3>');
    
            for (let i in videojuegos) {
                response.write('<li class="collection-item ">' + videojuegos[i] + '</li>');
            }
    
    
            response.write('<div class="card">');
            response.write('<a href="/Videojuegos"> <button class="button is-danger is-light">Añadir otro</button></a>');
            response.write('</div></div><br>  <br>');
            response.write('<footer> Editor de html: Visual Studio Code <a href="https://code.visualstudio.com/"> Link </a> <br>');
            response.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"');
            response.write('width="30"');
            response.write('height="40">');
            response.write('</footer>');
            response.write('</div>');
            response.write('</body>');
            response.write('</html>');       
            response.end();
        });
    }


    
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<meta charset="utf-8">');
        response.write('<title>Lab10 Not found</title>');
        response.write('</head><body>');
        response.write('<h1 id="Error">Esta página de videojuegos no existe :(</h1>');
        response.write('<img src="https://i.pinimg.com/236x/ff/53/93/ff53935e6607a7fa92c7dce5e8748c88.jpg" alt="" width="400" height="400" class="d-inline-block align-text-top"')
        response.write('</body>');
        response.end();
    }

    
});


server.listen(3000);
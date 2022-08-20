//-------------------------------------- PREGUNTAS -------------------------------------------------------------

function Mostrar_pregunta() {
    let div_pregunta = document.getElementById("Pregunta");
    let pregunta = "<h5>¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor? </h5> <br>";
    let respuesta = "Porque en caso de que se requiera realizar un input con los datos insertados por usuario y este cometa algun error se le pueda comunicar de manera inmediata en vez de esperar alguna respuesta del servidor";
    respuesta += "<br><br><br>"
    div_pregunta.innerHTML = pregunta + respuesta;
    document.getElementById("Pregunta1").onclick = Vaciar_pregunta;
}

document.getElementById("Pregunta2").onclick = () => {
    let div_pregunta = document.getElementById("Pregunta");
    let pregunta = "<h5>¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript? </h5> <br>";
    let respuesta = "Simplemente introduciendo un par de palabras reservadas en el código HTML utilizando la consola del desarrollador deL navegador. Igualmente basta con deshabilitar el javascript en el navegador o hacer directamente el form.submit";
    respuesta += "<br><br><br>"
    div_pregunta.innerHTML = pregunta + respuesta;

}

document.getElementById("Pregunta3").onclick = () => {
    let div_pregunta = document.getElementById("Pregunta");
    let pregunta = "<h5>Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica?</h5> <br>";
    let respuesta = "Es buena practica porque como ya se menciono tiene la utilidad de notificarle al usuario si existe algun error en los datos de manera inmediata. Pero también es buena práctica utilizar algoritmos de encriptacion para evitar que cualquier usuario tenga acceso a la informacion  de las variables.";
    respuesta += "<br><br><br>"

    div_pregunta.innerHTML = pregunta + respuesta;
}


//-------------------------------------- VERIFICACIÓN DE CONTRASEÑAS -------------------------------------------

const BotonVerificar = document.getElementById("Boton_Verificar");

BotonVerificar.onclick  = () => {
    console.log("Click! Verificar!")
    verificar_password();
}

function verificar_password() {
    let verificacion = document.getElementById('Contraseña_verificada');
    const _Usuario = document.getElementById('Usuario').value; 
    const _Contraseña1 = document.getElementById('Contraseña1').value; 
    const _Contraseña2 = document.getElementById('Contraseña2').value; 

    if (_Contraseña1 == _Contraseña2 && _Contraseña1 != "" &&  _Usuario != ""){
        verificacion.innerHTML = '<br>  <div class="col s9 m3"> <div class="card-panel teal lighten-4"> <span> Hola! ' +  _Usuario  + '<br> Contraseña correctamente verificada!!</span></div></div>'
    }

    else if (_Contraseña1 != _Contraseña2 && _Contraseña1 != ""  &&  _Usuario != ""){
        verificacion.innerHTML = ' <br> <div class="col s9 m3"> <div class="card-panel red lighten-3"> <span> Hola! ' +  _Usuario  + '<br> Las contraseñas no son iguales!! :(</span></div></div>'
        
    }

    else{
        verificacion.innerHTML = '<br>  <div class="col s9 m3"> <div class="card-panel blue lighten-4"> <span> Por favor, rellene todos los datos</span></div></div>'
    }

}

//-------------------------------------- VENTA DE PRODUCTOS  -------------------------------------------

//Variables 
var cantidad_Takis = 0;
var cantidad_Chips = 0;
var cantidad_Doritos = 0;

//Precios

var precio_Takis = 18;
var precio_Chips = 16;
var precio_Doritos = 17;


var iva = .07;

const BotonComprar = document.getElementById("Boton_Compra");

BotonComprar.onclick  = () => {
    console.log("Click! Comprar!")
    Calcular_precio();
}


function Guardar_cantidad(){
    cantidad_Takis = document.getElementById("cantidad_takis").value;
   // console.log("cantidad takis: " + cantidad_Takis);
}

document.getElementById("cantidad_chips").onchange = () => {
    cantidad_Chips = document.getElementById("cantidad_chips").value;
    //console.log("cantidad chips: " + cantidad_Chips);
}


document.getElementById("cantidad_doritos").onchange = () => {
    cantidad_Doritos = document.getElementById("cantidad_doritos").value;
    //console.log("cantidad doritos: " + cantidad_Doritos);
}

function Calcular_precio(){
    
    console.log("cantidad takis: " + cantidad_Takis);
    console.log("cantidad chips: " + cantidad_Chips);
    console.log("cantidad doritos: " + cantidad_Doritos);

    let precio_producto = (cantidad_Takis * precio_Takis) + (cantidad_Chips * precio_Chips) + (cantidad_Doritos * precio_Doritos);
    let precio_total = precio_producto + (precio_producto * iva);
    console.log(precio_producto);
    console.log(precio_total);

    let div_pregunta = document.getElementById ("precio");
    div_pregunta.innerHTML =  "<h4> El total de su compra es: $" + precio_total + " MXN</h4> <br>" ;
    Mostrar_compra();

}





function Mostrar_compra(){

    let div_compra = document.getElementById ("compra");
    div_compra.innerHTML = "<br> <h5> " + cantidad_Takis + " x" + " Takis  </h5> <br>" + "<h5> " + cantidad_Chips + " x" + " Chips </h5>  <br>" + "<h5> " + cantidad_Doritos + " x" + " Doritos </h5>  <br>" ;

    
}


//VARIABLES 

let arreglo = [5,10,15,20,25];
let string = "Esto es un string para colocar en un archivo txt";
let segundos = 6046;


//FUNCIONES 
function PromedioArreglo (arreglo){
    //Una función que reciba un arreglo de números y devuelva su promedio.
    let suma = 0;
    let promedio = 0;

    for (let i = 0; i < arreglo.length; i++){ //recorrido del arreglo
            suma += arreglo[i];
    }
    promedio = suma/arreglo.length;
    return promedio;
    
}

console.log(PromedioArreglo(arreglo));


function ConvertirString (string){
    //Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.
    const filesystem = require('fs');
    filesystem.writeFileSync('StringTXT.txt',string);

}

console.log(ConvertirString(string));

//Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node.
function formatoSegundos(num_segundos){
    //Convertir segundos en formato horas, munutos, segundos 
    let horas= Math.trunc(num_segundos/3600);
    let minutos= Math.trunc((num_segundos-horas*3600)/60);//60
    let segundos= num_segundos - (horas*3600+minutos*60);
    console.log('Equivalente en formato horas:munutos:segundos a ' + horas + " : " + minutos + " : " + segundos);
}

console.log(formatoSegundos(segundos));



//Crea una pequeña aplicación web que al enviar una petición al servidor, devuelva una de las páginas que creaste anteriormente en tus laboratorios.

const filesystem = require('fs');
const http = require('http');
let string_html = filesystem.readFileSync('index.html');
console.log ("si funciona");

const server = http.createServer( (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(string_html);
    response.end();


});

server.listen(3000);
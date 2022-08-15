const boton1 = document.getElementById("Ejercicio 1");
const boton2 = document.getElementById("Ejercicio 2");
const boton3 = document.getElementById("Ejercicio 3");
const boton4 = document.getElementById("Ejercicio 4");
const boton5 = document.getElementById("Ejercicio 5");
const boton6 = document.getElementById("Ejercicio 6");

//Botones 
boton1.onclick = () => {
    console.log("Click! Boton 1");
    const numero = prompt("Ingrese un número");
    document.getElementById("contenedor_ej1").innerHTML = tabla_cuadrados_cubos(numero);
} 

boton2.onclick = () => {
    console.log("Click! Boton 2");
    suma_aleatoria();
} 

boton3.onclick = () => {
    console.log("Click! Boton 3");
    document.getElementById("contenedor_ej3").innerHTML = contador();
} 

boton4.onclick = () => {
    console.log("Click! Boton 4");
    document.getElementById("contenedor_ej4").innerHTML = promedios();
} 


boton5.onclick = () => {
    console.log("Click! Boton 5");
    document.getElementById("contenedor_ej5").innerHTML = inverso();
} 

boton6.onclick = () => {
    console.log("Click! Boton 6");
                const figuras = [];
            
            
                figuras[0] = new CFigura(); 
                figuras[1] = new CCuadrado(10);
                figuras[2] = new CTriangulo(18,3);
                figuras[3] = new CCirculo(8);

                let figuras_txt = '<br> <strong> <em> FIGURAS DEL EJERCICIO </strong> <br> <br> <strong> Figura desconocida:  </strong> ?u <br> <strong> Cuadrado: </strong> 10u <br> <strong> Triángulo: </strong> 18u , 3u  <br> <strong> Circulo: </strong> 8u<br>';
                figuras_txt += '<br> <br> <strong> <em> ÁREAS DE LAS FIGURAS </strong> <br> <br>'
                document.getElementById("contenedor_ej6").innerHTML += figuras_txt 
                for (let i = 0; i < 4; i++) {
                   // alert("Figura" + i)
                document.getElementById("contenedor_ej6").innerHTML +=  figuras[i].calculoArea();
                }


} 




// Ejercicio 1 -> 

function tabla_cuadrados_cubos(numero) {
    let resultado = '<table border = "2" style="border-color: rgb(35, 167, 68)" ; align="center"> '; //Creación de la tabla con borde 1 
    resultado += " <br> <tr> <td> Numero </td>" + "<td> Cuadrado </td>" + "<td> Cubo </td> </tr>"; // Creación de los encabezados de la tabla
    for (let i = 1; i <= numero; i++) {
        resultado += "<tr>";
        resultado += "<td>" + i + "</td>" + "<td>" + i*i + "</td>" + "<td>" + i*i*i + "</td>"; // Creación de números 
        resultado += "</tr>"
    }
    resultado += "</table>"; // Cerrar tabla
    return resultado; //Regresar resultado
}

// Ejercicio 2 ->

function suma_aleatoria(){
    let numero1 = Math.floor(Math.random() * 10) + 1;
    let numero2 = Math.floor(Math.random() * 10) + 1;
    let resultado = numero1 + numero2;

    let tiempo_inicial = Date.now(); //Empieza a tomar el tiempo
    const respuesta = prompt ("Digite el resultado de la siguiente suma: " + numero1 +" + " + numero2);
    let tiempo_final = Date.now(); //Finaliza la toma de tiempo

    let tiempo_respuesta = (tiempo_final - tiempo_inicial) / 1000;
    

    //Imprime resultados
    if (resultado == respuesta){
        alert('El resultado de su respuesta es CORRECTO!! \nSu tiempo de respuesta fue: ' + tiempo_respuesta);
    }

    else{
        alert('El resultado de su respuesta es INCORRECTO!! \nSu tiempo de respuesta fue: ' + tiempo_respuesta);
    }

}

//Ejercicio 3 ->

function contador(){
    let Array = [-18, -8, 12, 16, 5, -22, 0, 15, 22, -0, 7, 8, 45 ];
    let Arreglo = '<br> <strong> El arreglo es: </strong>' + Array + '<br>';

     //Variables de la función
    let negativos = 0;
    let ceros = 0;
    let mayor_cero = 0;


    for (let i = 0; i <= Array.length; i++) { //For que se repite dependiendo la medida del array 
        if (Array[i] < 0) {
            negativos++; // Sumador de numeros negativos 
        }
        else if (Array[i]  == 0) {
            ceros++; // Sumador de numeros con ceros 
        }
        else if (Array[i] > 0) {
            mayor_cero++; // Sumador de numeros mayores a cero 
        }
    }

    //Impresión 
    Arreglo += '<strong> La cantidad de números negativos es: </strong>  ' + negativos + '<br> <strong> \nLa cantidad de 0s es: </strong>' + ceros + '<br> <strong> \nLa cantidad de números mayores a cero es: </strong>' + mayor_cero;
    return Arreglo;
    console.log(Arreglo)

}

// Ejercicio 4 -> 
function promedios(){
    let arrays = [[11,12,13,14],[15,16,17,18],[19,20,21,22]];
    let promedio = 0;
    let promedio_array = new Array; 

    let respuesta = '<br> <strong> Su matriz es: </strong>  <br>'; 
    for (let i = 0; i < arrays.length; i++){ //Ciclo for para mostrar la matriz con formato
        respuesta += arrays[i] + '<br>';
        
    }
    

    for (let i = 0; i < arrays.length; i++) {
        let suma = 0;
        let contador = 0;

        for (let j = 0; j < arrays[i].length; j++) { //Recorrido matriz
            suma += arrays[i][j];
        }

        promedio = suma/arrays.length;
        promedio_array.push("  " + promedio.toFixed(1)); // Formato de un decimal al promedio 
    }

    respuesta += '<br> <strong> El promedio de cada renglón es: </strong>' + promedio_array;


    return respuesta; 
}

//Ejercicio 5 ->

function inverso(){
    let numero = prompt ("Ejercicio 5: Digite un número para obtener sus digitos en orden inverso");
    let rango = numero;
    let inverso = [];
    for (let i = 0; i <= rango; i++) {
        inverso[i] = numero--;
    }

    let respuesta = '<br> <strong>Los números inversos son: </strong>' + inverso;
    return respuesta;
}

//Ejercicio 6

class CFigura{
    constructor(){
    }

    calculoArea(){
        let respuesta = "<strong> No sé qué figura es :( </strong>"
        return respuesta;
    }

}


class CCirculo{

    constructor(r){
        this.radio = r;
    }

    calculoArea(){
        let calculo_area = (Math.PI *(Math.pow(this.radio, 2))).toFixed(2);
        
        let respuesta ="<br> <strong> El radio del circulo es: </strong> " + this.radio + "u" + "<br> <strong> \nEl área del circulo es: </strong> " + calculo_area  + "u^2";
        return respuesta;
    }

}

class CCuadrado{

    constructor (l){
        this.lado = l;
    }

    calculoArea(){
        let calculo_area = (this.lado * this.lado).toFixed(2);
        let respuesta = "<br> <strong> El lado del cuadrado mide:  </strong> " + this.lado + "u" + "<br> <strong> \nEl área del cuadrado es: </strong>  " + calculo_area + "u^2";
        return respuesta;
    }

}

class CTriangulo{

    constructor (a, b){
        this.base = b;
        this.altura = a;
    }

    calculoArea(){
        let calculo_area = (this.base * this.altura).toFixed(2);
        let respuesta ="<br> <strong> La base del triángulo es es: </strong>  " + this.base + "u" +  " <br> <strong> \nLa altura del triángulo es: </strong>  " + this.altura + "<br> <strong> \n El área del triangulo es: </strong>  " + calculo_area + "u^2" ;
        return respuesta;
    }

}

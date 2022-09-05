//fs: filesystem
const fs = require('fs');

var peliculas = [];

//Para leer las películas
fs.readFile('./tops/peliculas.json', (err, data) => {
    if (err) throw err;
    peliculas = JSON.parse(data);
    console.log(peliculas)
   
});

module.exports = class Peliculas{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        peliculas.push(this);
        let peli = JSON.stringify(peliculas);
        fs.writeFileSync('./tops/peliculas.json', peli, 'utf8');

    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllPeliculas() {
        return peliculas;
    }
 
}


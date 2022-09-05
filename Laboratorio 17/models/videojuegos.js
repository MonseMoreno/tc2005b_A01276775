//fs: filesystem
const fs = require('fs');

var videojuegos = [];

//Para leer las películas
fs.readFile('./tops/videojuegos.json', (err, data) => {
    if (err) throw err;
    videojuegos = JSON.parse(data);
    console.log(videojuegos)

});

module.exports = class CVideojuegos{

    //Constructor de la clase. 
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        videojuegos.push(this);
        let juegos = JSON.stringify(videojuegos);
        fs.writeFileSync('./tops/videojuegos.json', juegos, 'utf8');

    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllCVideojuegos() {
        return videojuegos;
    }

}

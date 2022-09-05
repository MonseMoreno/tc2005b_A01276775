//fs: filesystem
const fs = require('fs');

var artistas = [];

//Para leer los artistas
fs.readFile('./tops/artistas.json', (err, data) => {
    if (err) throw err;
    artistas = JSON.parse(data);
    console.log(artistas)
   
});

module.exports = class Artistas{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        artistas.push(this);
        let artista = JSON.stringify(artistas);
        fs.writeFileSync('./tops/artistas.json', artista, 'utf8');

    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllArtistas() {
        return artistas;
    }
 
}


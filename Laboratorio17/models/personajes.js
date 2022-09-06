//fs: filesystem
const fs = require('fs');

var personajes = [];

//Para leer los personajes
fs.readFile('./tops/personajes.json', (err, data) => {
    if (err) throw err;
    personajes = JSON.parse(data);
    console.log(personajes)

});

module.exports = class CPersonajes{

    //Constructor de la clase. 
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        personajes.push(this);
        let persona = JSON.stringify(personajes);
        fs.writeFileSync('./tops/personajes.json', persona, 'utf8');

    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllCPersonajes() {
        return personajes;
    }

}

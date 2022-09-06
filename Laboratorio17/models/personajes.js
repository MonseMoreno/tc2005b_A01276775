
const db = require('../../util/database');
//fs: filesystem
// const fs = require('fs');

// var personajes = [];

// //Para leer los personajes
// fs.readFile('./tops/personajes.json', (err, data) => {
//     if (err) throw err;
//     personajes = JSON.parse(data);
//     console.log(personajes)

// });

module.exports = class CPersonajes{

    constructor(nuevo_nombre,nueva_descripcion,nueva_imagen) {
        this.nombre = nuevo_nombre;
        this.descripcion = nueva_descripcion;
        this.imagen = nueva_imagen;
    }


    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save()  {
        return db.execute('INSERT INTO personajes (nombre, descripcion ,imagen) VALUES (?,?,?)',
        [this.nombre, this.descripcion ,this.imagen]
    );
    }


    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllPersonajes() {
        console.log(db.execute('SELECT * FROM personajes'));
         return db.execute('SELECT * FROM personajes');
    }
}

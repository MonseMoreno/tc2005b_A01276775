
const db = require('../util/database');

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
    static fetchAllCPersonajes() {
        console.log(db.execute('SELECT * FROM personajes'));
         return db.execute('SELECT * FROM personajes');
    }
}

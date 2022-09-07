

const db = require('../util/database');

module.exports = class CVideojuegos{

    //Constructor de la clase. 
    constructor(nuevo_nombre,nueva_descripcion,nueva_imagen) {
        this.nombre = nuevo_nombre;
        this.descripcion = nueva_descripcion;
        this.imagen = nueva_imagen;
    }

    //Guardar el objeto
    save()  {
        return db.execute('INSERT INTO videojuegos (nombre, descripcion ,imagen) VALUES (?, ?,?)',
        [this.nombre, this.descripcion ,this.imagen]
    );
    }

    getVideojuego(){
        return db.execute('Select *  FROM videojuegos WHERE idVideojuego = (?)',[this.id]
        );
    }

    static fetchOneJuego(idVideojuego) {
        return db.execute('SELECT * FROM videojuegos WHERE idVideojuego=?', [idVideojuego]);
    }

    static fetchAllVideojuegos() {
       console.log(db.execute('SELECT * FROM videojuegos'));
        return db.execute('SELECT * FROM videojuegos');
    }

}

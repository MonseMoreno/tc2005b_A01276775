// //fs: filesystem
// const fs = require('fs');

// var animalitos = [];

// //Para leer los animalitos
// fs.readFile('./tops/animalitos.json', (err, data) => {
//     if (err) throw err;
//     animalitos = JSON.parse(data);
//     console.log(animalitos)

// });

// module.exports = class CAnimalitos{

//     //Constructor de la clase. 
//     constructor(nuevo_nombre) {
//         this.nombre = nuevo_nombre;
//     }

//     //Este método servirá para guardar de manera persistente el nuevo objeto. 
//     save() {
//         animalitos.push(this);
//         let animal = JSON.stringify(animalitos);
//         fs.writeFileSync('./tops/animalitos.json',animal, 'utf8');

//     }

//     //Este método servirá para devolver los objetos del almacenamiento persistente.
//     static fetchAllCAnimalitos() {
//         return animalitos;
//     }

// }



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

module.exports = class CAnimalitos{

    constructor(nuevo_nombre,nueva_descripcion,nueva_imagen) {
        this.nombre = nuevo_nombre;
        this.descripcion = nueva_descripcion;
        this.imagen = nueva_imagen;
    }


    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save()  {
        return db.execute('INSERT INTO animalitos (nombre, descripcion ,imagen) VALUES (?,?,?)',
        [this.nombre, this.descripcion ,this.imagen]
    );
    }


    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllAnimalitos() {
        console.log(db.execute('SELECT * FROM animalitos'));
         return db.execute('SELECT * FROM animalitos');
    }
}

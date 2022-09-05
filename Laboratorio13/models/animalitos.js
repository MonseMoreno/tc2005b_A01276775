//fs: filesystem
const fs = require('fs');

var animalitos = [];

//Para leer los animalitos
fs.readFile('./tops/animalitos.json', (err, data) => {
    if (err) throw err;
    animalitos = JSON.parse(data);
    console.log(animalitos)

});

module.exports = class CAnimalitos{

    //Constructor de la clase. 
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        animalitos.push(this);
        let animal = JSON.stringify(animalitos);
        fs.writeFileSync('./tops/animalitos.json',animal, 'utf8');

    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllCAnimalitos() {
        return animalitos;
    }

}

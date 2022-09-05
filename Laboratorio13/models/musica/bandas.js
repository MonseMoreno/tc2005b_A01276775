//fs: filesystem
const fs = require('fs');

var bandas = [];

//Para leer las bandas
fs.readFile('./tops/bandas.json', (err, data) => {
    if (err) throw err;
    bandas = JSON.parse(data);
    console.log(bandas);
   
});

module.exports = class Bandas{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        bandas.push(this);
        let band = JSON.stringify(bandas);
        fs.writeFileSync('./tops/bandas.json', band, 'utf8');

    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllBandas() {
        return bandas;
    }
 
}


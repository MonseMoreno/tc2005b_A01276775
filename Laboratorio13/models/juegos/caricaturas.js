//fs: filesystem
const fs = require('fs');


var caricaturas = [];


//Para leer las caricaturas
fs.readFile('./tops/caricaturas.json', (err, data) => {
    if (err) throw err;
    caricaturas = JSON.parse(data);
    console.log(caricaturas);
});


module.exports = class Caricaturas{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        caricaturas.push(this);
        let cari = JSON.stringify(caricaturas);
        fs.writeFileSync('./tops/caricaturas.json', cari, 'utf8');
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllCaricaturas() {
        return caricaturas;
    }

    
}
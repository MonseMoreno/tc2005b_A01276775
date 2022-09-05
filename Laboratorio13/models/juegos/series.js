//fs: filesystem
const fs = require('fs');

var series = [];

//Para leer las series
fs.readFile('./tops/series.json', (err, data) => {
    if (err) throw err;
    series = JSON.parse(data);
    console.log(series);
   
});


module.exports = class Series{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        series.push(this);
        let serie = JSON.stringify(series);
        fs.writeFileSync('./tops/series.json', serie, 'utf8');
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAllSeries() {
        return series;
    }

    
}


const db = require('../util/database');
const bcrypt = require('bcryptjs');


module.exports = class User {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre, nuevo_username, nuevo_password) {
        this.nombre = nuevo_nombre;
        this.username = nuevo_username;
        this.password = nuevo_password;
    }


    save() {
        return bcrypt.hash(this.password, 12)
            .then((password_cifrado) => {
                return db.execute(
                    'INSERT INTO users(nombre, username, password) VALUES(?,?,?)',
                    [this.nombre, this.username, password_cifrado]);
            }).catch((error) => {
                console.log(error);
            });
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static findOne(username) {
        return db.execute('SELECT * FROM users WHERE username=?',
            [username]);
    }

}

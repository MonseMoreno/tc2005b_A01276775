const usuarios = [];

module.exports = class User {


    constructor(nuevo_nombre, nuevo_username, nuevo_password) {
        this.nombre = nuevo_nombre;
        this.username = nuevo_username;
        this.password = nuevo_password;
    }


    save() {
        usuarios.push(this);
    }

 
    static login(username, password) {
        return true;
    }
}
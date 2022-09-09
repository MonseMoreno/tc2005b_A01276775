const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.get_login = (request, response, next) => {
    response.render('login', {
        username: request.session.username ? request.session.username : '',
        info: ''
    }); 
};

exports.principal = (request, response, next) => {
    response.render('index', {
        username: request.session.username ? request.session.username : '',
    }); 
};

exports.login = (request, response, next) => {
    User.findOne(request.body.username)
        .then(([rows, fielData])=>{
            
            //Si no existe el usuario, redirige a la pantalla de login
            if (rows.length < 1) {
                return response.redirect('/users/login');
            }

            const user = new User(rows[0].nombre, rows[0].username, rows[0].password);
            bcrypt.compare(request.body.password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.user = user;
                        request.session.username = user.username;
                        return request.session.save(err => {
                            console.log('redirije');
                            response.redirect('/users/login/principal');
                        });
                    }
                    response.redirect('/users/login');
                }).catch(err => {
                    response.redirect('/users/login');
                });
        }).catch((error)=>{
            console.log(error)
        });
    
};

exports.get_signup = (request, response, next) => {
    response.render('signup', {
        username: request.session.username ? request.session.username : '',
        info: ''
    }); 
};

exports.post_signup = (request, response, next) => {
    const user = 
        new User(request.body.nombre, request.body.username, request.body.password);
    user.save()
        .then(()=>{
            response.redirect('/users/login'); 
        }).catch((error)=>{
            console.log(error);
        });
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.root = (request, response, next) => {
    response.redirect('/users/login'); 
};
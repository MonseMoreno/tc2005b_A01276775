const path = require('path');


exports.principal = (request, response, next) => {
    console.log('Ruta principal mascota');
    response.render('mascota',  {
        username: request.session.username ? request.session.username : '',
    }); 
}
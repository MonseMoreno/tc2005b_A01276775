const path = require('path');

exports.principal = (request, response, next) => {
    console.log('Ruta /principal');
    //console.log(request.get('Cookie').split('=')[1]);
    response.render('index', {
        username: request.session.username ? request.session.username : '',
    }); 
}
const express = require('express');
const isAuth = require('../util/is-auth.js');
const router = express.Router();

const visualController = require('../controllers/juegos_controller');


//Para videojuegos
router.get('/nuevoVideojuego',isAuth, visualController.get_nuevo_videojuego);
router.post('/nuevoVideojuego', visualController.post_nuevo_videojuego);

//Para personajes
router.get('/nuevoPersonaje', isAuth,visualController.get_nuevo_personaje);
router.post('/nuevoPersonaje', visualController.post_nuevo_personaje);


router.use('/', visualController.principal);

module.exports = router;
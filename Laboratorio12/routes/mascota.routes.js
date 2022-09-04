const express = require('express');
const path = require('path');

const router = express.Router();

//Para personajes
router.get('/', (request, response, next) => {
    console.log('GET /mascota');
    response.render('mascota');
});

module.exports = router;
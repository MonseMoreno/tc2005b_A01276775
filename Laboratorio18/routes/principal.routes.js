const express = require('express');
const isAuth = require('../util/is-auth.js');
const router = express.Router();

const userController = require('../controllers/principal_controller');


router.get('/principal',userController.principal);

module.exports = router;
const express = require('express');
const router = express.Router();

const visualController = require('../controllers/animalitos_controller');

router.use('/', visualController.principal);

module.exports = router;
const express = require('express');
const controller = require('../controllers/firstController');
const router = express.Router();

router.get('/', controller.root);

module.exports = router;
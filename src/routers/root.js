const express = require('express');
const controller = require('../controllers/firstController');
const router = express.Router();
router.get('/style.css', controller.style)
router.get('/chat.js', controller.chatjs)
router.get('/', controller.root);

module.exports = router;
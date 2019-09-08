const express = require('express');
const controller = require('../controllers/dashboardController');
const router = express.Router();

router.get('/dashboard/style.css', controller.style)
router.get('/dashboard/chart.js', controller.chart)
router.get('/dashboard/', controller.root);

module.exports = router;
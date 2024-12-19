const express = require('express');
const router = express.Router();
const { getDoctors, addDoctor } = require('../controllers/doctorController');

router.get('/getDoctors', getDoctors);
router.post('/addDoctor', addDoctor);

module.exports = router;

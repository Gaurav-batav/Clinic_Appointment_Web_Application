const express = require('express');
const router = express.Router();
const { bookAppointment, getAppointments } = require('../controllers/appointmentController');

// Define routes
router.post('/bookAppointment', bookAppointment); // POST route for booking
router.get('/getAppointments', getAppointments); // GET route for fetching

module.exports = router;

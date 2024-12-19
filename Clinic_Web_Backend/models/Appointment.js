const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    patient: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    number: {
        type: String,
        required: true,
        unique: true,
      },
    department: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    timeSlot: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['booked', 'completed', 'cancelled'],
        default: 'booked',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Appointment', AppointmentSchema);


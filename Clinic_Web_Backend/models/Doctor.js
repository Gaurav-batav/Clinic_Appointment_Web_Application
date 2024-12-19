const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    availability: [
        {
            date: { type: String, required: true },
            timeSlots: [{ type: String }],
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Doctor', DoctorSchema);


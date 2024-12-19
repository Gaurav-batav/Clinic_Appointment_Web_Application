const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    patient: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['patient', 'admin'],
        default: 'patient',
    },

});

module.exports = mongoose.model('User', UserSchema);

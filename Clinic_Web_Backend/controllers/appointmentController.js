const Appointment = require('../models/Appointment');

// Book an appointment
const bookAppointment = async (req, res) => {
    const { patient,email,number,department, date, timeSlot } = req.body;

    try {
        const newAppointment = await Appointment.create({ patient, email,number,department, date, timeSlot });
        res.send({status:"200", message:"Book Appointment Successfull"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all appointments
const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find()
            .populate('patient', 'name email')
            .populate('doctor', 'name specialization');
        res.status(200).json({status:"200", message:"Get Appointment Successfull",appointments});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { bookAppointment, getAppointments };

const Doctor = require('../models/Doctor');

// Get all doctors
const getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.send({status:"200", message:"Get Doctors Successfull",doctors});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new doctor
const addDoctor = async (req, res) => {
    const { name, specialization, availability } = req.body;

    try {
        const newDoctor = await Doctor.create({
            name,
            specialization,
            availability,
        });
        res.send({status:"200", message:"Add Doctors Successfull"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getDoctors, addDoctor };

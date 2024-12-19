const jwt = require('jsonwebtoken');
const Appointment = require('../models/Appointment');

// Login user
const loginUser = async (req, res) => {
    const { patient,email,number,role} = req.body;

    try {
        // Find the user by email,number
        const appointment = await Appointment.findOne({ email,number });
        if (!appointment) {
            return res.status(404).json({ message: 'User not found' });
        }

         else if (appointment.email !== email & appointment.number !== number  ) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        else{
             // Generate a JWT token
        // const token = jwt.sign(
         /*   { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );*/
            return res.status(200).json({status:"200", message:"Login Successfull",appointment});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { loginUser };

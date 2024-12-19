const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');
const bodyParser = require('body-parser');


// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
// Connect to the database
connectDB();

// Routes setup
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/doctors', require('./routes/doctorRoutes'));
app.use('/api/appointments', require('./routes/appointmentRoutes'));

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


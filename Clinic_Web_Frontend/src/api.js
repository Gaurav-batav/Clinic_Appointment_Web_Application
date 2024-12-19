/*import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000/api' });

// Interceptor to include token for secured routes
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

// User APIs
export const register = (userData) => API.post('/users/register', userData);
export const login = (userData) => API.post('/users/login', userData);

// Doctor APIs
export const getDoctors = () => API.get('/doctors/getDoctors');

// Appointment APIs
export const bookAppointment = (appointmentData) =>
    API.post('/appointments/bookAppointment', appointmentData);
export const getAppointments = () => API.get('/appointments/getAppointments');*/
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api", // Replace with your actual API base URL
});

export default API;

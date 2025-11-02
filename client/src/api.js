import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Your backend API URL from README
  withCredentials: true, // Important for sending HttpOnly cookies
});

export default api;
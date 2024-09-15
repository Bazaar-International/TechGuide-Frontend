import axios from 'axios';

// Define the base URL as a constant
const API_BASE_URL = 'http://127.0.0.1:8000/';

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;

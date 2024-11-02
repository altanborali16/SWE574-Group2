// // src/services/api.js
// import axios from 'axios';

// // Create an Axios instance
// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080',
// });

// // Define public endpoints that should not have the Authorization header
// const PUBLIC_ENDPOINTS = ['/auth/register', '/auth/authenticate'];

// // Add a request interceptor
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     // Check if the request URL is not a public endpoint
//     if (token && !PUBLIC_ENDPOINTS.some((endpoint) => config.url.includes(endpoint))) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default api;

// src/services/api.js
import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080',
});

// Define public endpoints that should not have the Authorization header
const PUBLIC_ENDPOINTS = ['/auth/register', '/auth/authenticate'];

// Add a request interceptor to include the token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    // Check if the request URL is not a public endpoint
    if (token && !PUBLIC_ENDPOINTS.some((endpoint) => config.url.includes(endpoint))) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

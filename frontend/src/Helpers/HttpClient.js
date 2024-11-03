// HttpClient.js
import axios from 'axios';

// Create an instance of Axios
const axiosInstance = axios.create({
  // Set the base URL if applicable
  baseURL: 'http://localhost:8080', // Replace with your base URL if you have one 
});
const PUBLIC_ENDPOINTS = ['/auth/register', '/auth/authenticate'];
// function HttpClient() {
//   return {
//     get: axiosInstance.get,
//     post: axiosInstance.post,
//     patch: axiosInstance.patch,
//     put: axiosInstance.put,
//     delete: axiosInstance.delete,
//   };
// }
// Add a request interceptor
axiosInstance.interceptors.request.use(
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

export default axiosInstance;
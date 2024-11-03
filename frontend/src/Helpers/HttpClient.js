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

async function registerUser(data) {
  try {
    const response = await axiosInstance.post('/auth/register', data);
    console.log('Registration successful:', response.data);
    return response;
  } catch (error) {
    console.error('Error registering user:', error);
  }
}

// Authenticate function
async function authenticateUser(credentials) {
  try {
    console.log("Burda")
    const response = await axiosInstance.post('/auth/authenticate', credentials);
    console.log('Authentication successful:', response.data);
    return response;
  } catch (error) {
    console.error('Error authenticating user:', error);
  }
}

export { registerUser, authenticateUser };
export default axiosInstance;
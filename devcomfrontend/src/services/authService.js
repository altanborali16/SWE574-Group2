// src/services/authService.js
import api from './api';

// Register Function
export const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData, {
      // Explicitly disable the Authorization header for this request
      headers: {
        Authorization: '',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Login Function
export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/authenticate', { email, password }, {
      headers: {
        Authorization: '',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

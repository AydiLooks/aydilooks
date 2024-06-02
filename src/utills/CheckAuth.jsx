// src/checkAuth.js
import axios from './axios';

export const checkAuth = async () => {
  try {
    const response = await axios.get('/auth/check'); // Replace with your endpoint
    return response.status === 200;
  } catch (error) {
    return false;
  }
};

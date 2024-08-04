import axios from 'axios';
import Cookies from 'js-cookie';

// Function to get CSRF token from cookies
const getCSRFToken = () => {
  return Cookies.get('csrftoken');
};

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true, // Ensure credentials (e.g., cookies) are sent with requests
});

// Request interceptor to add JWT token and CSRF token to headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    const csrfToken = getCSRFToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (csrfToken) {
      config.headers['X-CSRFToken'] = csrfToken;
    }
    console.log('Request:', config); // Log request details
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh on 401 Unauthorized
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        try {
          // Refresh the token using the refresh token
          const response = await axios.post('http://localhost:8000/api/v1/u/logout/', {
            refresh: refreshToken,
          });
          const newAccessToken = response.data.access;
          localStorage.setItem('access_token', newAccessToken);
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.error('Error refreshing token:', refreshError);
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          window.location.href = '/login/customer'; // Redirect to login on token refresh failure
        }
      } else {
        console.error('No refresh token available');
        localStorage.removeItem('access_token');
        window.location.href = '/login/customer'; // Redirect to login if no refresh token
      }
    }
    console.log('Response Error:', error.response); // Log response error details
    return Promise.reject(error);
  }
);

export default axiosInstance;

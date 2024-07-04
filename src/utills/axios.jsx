import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true, // Ensure credentials (e.g., cookies) are sent with requests
});

// Request interceptor to add JWT token to headers
instance.interceptors.request.use(
  (config) => {
    console.log('Interceptor: Before adding token to headers');
    const token = localStorage.getItem('access_token');
    console.log('Token from localStorage:', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh on 401 Unauthorized
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        try {
          const response = await axios.post('http://localhost:8000/api/v1/u/logout/', {
            refresh: refreshToken
          });
          const newAccessToken = response.data.access;
          localStorage.setItem('access_token', newAccessToken);
          // Update default headers and original request headers with new token
          error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axios(error.config); // Retry original request with new token
        } catch (error) {
          console.error('Error refreshing token:', error);
          // Handle token refresh failure (e.g., redirect to login)
          // Clear tokens, log out the user, etc.
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('first_name');
          // Example: Redirect to login page
          window.location.href = '/login/customer';
        }
      }
    }
    return Promise.reject(error);
  }
);

export default instance;

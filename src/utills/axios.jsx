// src/utils/axios.js
// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'http://localhost:8000',
//   withCredentials: true, 
// });

// instance.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem('access_token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// export default instance;
// src/utils/axios.js
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
          const response = await axios.post('http://localhost:8000/api/token/refresh/', {
            refresh: refreshToken
          });
          const newAccessToken = response.data.access;
          localStorage.setItem('access_token', newAccessToken);
          // Update default headers and original request headers with new token
          axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axios(originalRequest); // Retry original request with new token
        } catch (error) {
          console.error('Error refreshing token:', error);
          // Handle token refresh failure (e.g., redirect to login)
          // You might want to clear tokens, log out the user, etc.
        }
      }
    }
    return Promise.reject(error);
  }
);

export default instance;

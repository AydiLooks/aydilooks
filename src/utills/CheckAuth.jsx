import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from './axios';

const defaultUserState = {
  id: null,
  first_name: '',
  last_name: '',
  email: '',
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUserState);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('access_token');
        if (!token) {
          throw new Error('No access token found');
        }

        const response = await axiosInstance.get('/api/v1/u/user/');
        setUser(response.data);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error fetching user:', error);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('first_name');
      }
    };

    fetchUser();
  }, []);

  const login = async (credentials, setNavigate) => {
    try {
      console.log('Login Request Credentials:', credentials);  // Log credentials being sent
      const response = await axiosInstance.post('/api/v1/u/login/customer/', credentials);
      console.log('Login Response:', response.data);  // Log response data
      setUser(response.data);
      setIsAuthenticated(true);
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      localStorage.setItem('first_name', response.data.first_name);
      setNavigate(true);
    } catch (error) {
      console.error('Login failed:', error.response);  // Log detailed error response
      setIsAuthenticated(false);
    }
  };

  const handleLogout = async () => {
    const refreshToken = localStorage.getItem('refresh_token');
    if (refreshToken) {
      try {
        await axiosInstance.post('/api/v1/u/logout/', {
          refresh_token: refreshToken,
        });
      } catch (error) {
        console.error('Error logging out:', error);
      }
    }

    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('first_name');
    setUser(defaultUserState);
    setIsAuthenticated(false);

    window.location.href = '/login/customer';
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

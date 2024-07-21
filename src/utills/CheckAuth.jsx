import React, { createContext, useState, useEffect } from 'react';
import axios from './axios';

// Create Context
export const AuthContext = createContext();

// Create Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('access_token');
        if (!token) {
          throw new Error('No access token found');
        }

        const response = await axios.get('http://localhost:8000/api/v1/u/user/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
        // Handle error, possibly refresh token or redirect to login
      }
    };

    fetchUser();
  }, []);

  // Log in function
  const login = async (credentials,setNavigate) => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/u/login/customer/', credentials, { withCredentials: true });
      setUser(response.data);
      setIsAuthenticated(true);
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      localStorage.setItem('first_name', response.data.first_name);
      setNavigate(true);
    } catch (error) {
      console.error('Login failed:', error);
      setIsAuthenticated(false);
    }
  };

  // Log out function
      // const refreshToken = localStorage.getItem('refresh_token');
      // if (refreshToken) {
      //   try {
      //     await axios.post('http://localhost:8000/api/v1/logout/', {
      //       refresh_token: refreshToken,
      //     });
      //   } catch (error) {
      //     console.error('Error logging out:', error);
      //   }
      // }
  
      // localStorage.removeItem('access_token');
      // localStorage.removeItem('refresh_token');
      // localStorage.removeItem('first_name');
      // setUser(null);
      // setIsAuthenticated(false);
      const handleLogout = async () => {
        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken) {
          try {
            await axios.post('http://localhost:8000/api/v1/logout/', {
              refresh_token: refreshToken,
            });
          } catch (error) {
            console.error('Error logging out:', error);
          }
        }
    
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('first_name');
        setUser(null);
        setIsAuthenticated(false);
    
        // Navigate to the login page with an absolute path
        navigate('/login/customer');
      };
  
      // Navigate to the login page with an absolute path
  

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

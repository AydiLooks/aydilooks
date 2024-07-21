import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../utills/axios';
import { AuthContext } from '../../utills/CheckAuth';


const Logout = () => {
    // const navigate = useNavigate();
    const {handleLogout}=useContext(AuthContext);

    // const handleLogout = async () => {
    //   const refreshToken = localStorage.getItem('refresh_token');
    //   if (refreshToken) {
    //     try {
    //       await axios.post('http://localhost:8000/api/v1/logout/', {
    //         refresh_token: refreshToken,
    //       });
    //     } catch (error) {
    //       console.error('Error logging out:', error);
    //     }
    //   }
  
    //   localStorage.removeItem('access_token');
    //   localStorage.removeItem('refresh_token');
    //   localStorage.removeItem('first_name');
  
    //   // Navigate to the login page with an absolute path
    //   navigate('/login/customer');
    // };

 React. useEffect(() => {
    handleLogout();
  }, []);

  return null; // This component does not render anything
};

export default Logout;

// components/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // If user is logged in, render the provided element, otherwise redirect to login
  return isLoggedIn ? <Route {...rest} element={<Element />} /> : <Navigate to="/login" />;
};

export default PrivateRoute;

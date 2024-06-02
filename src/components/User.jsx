import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import LoginButton from './Login/LoginButton';

export default  function User(){
  // Assuming isLoggedIn state tracks the user's login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Conditional rendering */}
      {isLoggedIn ? <Profile /> : <LoginButton/>}
    </div>
  );
};
{/* <Signup /> */}
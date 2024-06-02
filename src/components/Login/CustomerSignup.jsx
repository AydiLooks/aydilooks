import React from 'react'
import axios from'../../utills/axios'

import { useNavigate } from 'react-router-dom';
// import MyLottieAnimation from './LottieAnimation';
import MyLottieAnimation from '../LottieAnimation';
import { cuteAlert } from 'cute-alert'

import { useState } from 'react';

export default function CustomerSignup() {
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  function Submit(e){
    e.preventDefault();
    const formData = {
      email: document.getElementById('email').value,
      password:document.getElementById('password').value,
      isCustomer:true,
      
    };
    setEmail(formData.email);
    setPassword(formData.password);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setIsValid(emailRegex.test(formData.email) && passwordRegex.test(formData.password))
    if (isValid) {
      // cuteAlert:'Registration Successful',
        cuteAlert({
        type: 'success',
        title: 'Registration Confirmed',
        description: 'Thank you for being the member:)',
        })
        window.location.href = '/Customer-profile';
    axios.post('https://example.com/api/addFormData', formData)
    .then(response => {
      console.log('Success:', response.data);
      // setIsValid(true);
      window.location.href = '/Customer-profile';
      localStorage.setItem('access_token', response.data.access_token);
      navigate('/');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  else {
    cuteAlert({
        type: 'error',
        title: 'Invalid Entries',
        description: 'Please fill in all required fields correctly.'
      });
      // setIsValid(false);
  }
  }
  return (
 <div className="flex justify-center grid-cols-2">
  <div class="w-full max-w-xs h-5/6">
    <form class="bg-red-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-56" style={{height:"30rem"}}>
      <div class="mb-4">
        <label class="block text-gray-900 text-sm font-bold mb-2" htmlFor="email">
        Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" required />
      </div>
      <div class="mb-6">
        <label class="block text-gray-900 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" required placeholder="******************"/>
        <p class="text-red-500 text-xs italic">Please choose a strong password.<br></br>
        use special symbols(@),a-z,A-Z,1-10</p>
      </div>
      <div class="flex items-center justify-between">
       <button class="bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={Submit} >
          Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-black-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
    
  </div>
  <div className='bg-red-200 w-full max-w-xs shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-56'> <MyLottieAnimation/></div>
  </div>
      
        
     

     

  )
}

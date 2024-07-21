import React from 'react'
import axios from 'axios';
import { useState } from 'react';
// import MyLottieAnimation from './LottieAnimation';
import MyLottieAnimation from '../LottieAnimation';
import { cuteAlert } from 'cute-alert'
import { NavLink } from 'react-router-dom';

export default function ShoperSignup() {
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState('');
  const[first_name,setFirstname]=useState('');
  const[last_name,setLastname]=useState('');
  const [password, setPassword] = useState('');
   
  const Submit=(e)=>{
    const formData = {
      email: document.getElementById('email').value,
      password:document.getElementById('password').value,
      first_name:document.getElementById('firstname').value,
      last_name:document.getElementById('lastname').value,
      isShopkeeper:true,
      
    };
    setEmail(formData.email);
    setPassword(formData.password);
    setFirstname(formData.first_name);
    setLastname(formData.last_name);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passwordRegex.test(formData.password)&& emailRegex.test(formData.email)) {
      // cuteAlert:'Registration Successful',
        cuteAlert({
        type: 'success',
        title: 'Registration Confirmed',
        description: 'Thank you for being the member:)',
        })
    axios.post('http://localhost:8000/api/v1/u/shopkeeper/', formData)
    .then(response => {
      console.log('Success:', response.data);
      
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  else {
    alert('Entries are not valid');
    
  }
  }
  return (
 <div className="flex justify-center grid-cols-2">
  <div class="w-full max-w-xs h-5/6">
    <form class="bg-red-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-56" style={{height:"30rem"}}>
    <div class="mb-4">
        <label class="block text-gray-900 text-sm font-bold mb-2" htmlFor="email">
        First Name
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="First Name" required />
      </div>
      <div class="mb-4">
        <label class="block text-gray-900 text-sm font-bold mb-2" htmlFor="email">
        Last Name
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Last name" required />
      </div>
      <div class="mb-4">
        <label class="block text-gray-900 text-sm font-bold mb-2" for="email">
        Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"/>
      </div>
      <div class="mb-6">
        <label class="block text-gray-900 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
        <p class="text-red-500 text-xs italic">Please choose a strong password.<br></br>
        use special symbols(@),a-z,A-Z,1-10</p>
      </div>
      <div class="flex items-center justify-between">
       <NavLink to=""><button class="bg-slate-950 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={Submit} >
          Sign In
        </button></NavLink>
      </div>
    </form>
    
  </div>
  <div className='bg-red-200 w-full max-w-xs shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-56'> <MyLottieAnimation/></div>
  </div>
      
        
     

     

  )
}

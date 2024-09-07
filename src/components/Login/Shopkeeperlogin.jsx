import React, { useState } from 'react';
import axios from '../../utills/axios';
import { useNavigate } from 'react-router-dom';
import MyLottieAnimation from '../LottieAnimation';
import { cuteAlert } from 'cute-alert';

export default function CustomerSignup() {
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState('');
  const [first_name, setFirstname] = useState('');
  const [last_name, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function Submit(e) {
    e.preventDefault();
    const formData = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      first_name: document.getElementById('firstname').value,
      last_name: document.getElementById('lastname').value,
      isCustomer: true,
    };
    setEmail(formData.email);
    setPassword(formData.password);
    setFirstname(formData.first_name);
    setLastname(formData.last_name);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setIsValid(emailRegex.test(formData.email) && passwordRegex.test(formData.password));

    if (isValid) {
      cuteAlert({
        type: 'success',
        title: 'Registration Confirmed',
        description: 'Thank you for being a member :)',
      });

      axios.post('http://localhost:8000/api/v1/u/customer/', formData)
        .then(response => {
          console.log('Success:', response.data);
          navigate('/Customer-profile');
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      cuteAlert({
        type: 'error',
        title: 'Invalid Entries',
        description: 'Please fill in all required fields correctly.',
      });
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 md:mr-8 mb-8 md:mb-0">
        <form className="space-y-6" onSubmit={Submit}>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              required
            />
            <p className="text-red-500 text-xs italic mt-2">
              Please choose a strong password.<br />
              Use special symbols (@), a-z, A-Z, 0-9.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
      <div className="w-full max-w-md">
        <MyLottieAnimation />
      </div>
    </div>
  );
}

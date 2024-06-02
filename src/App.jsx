import { useState , useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';
import { checkAuth } from './utills/CheckAuth';
import './App.css'
import Navbar from './components/Navbar'
import{ BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SingleProduct from './components/SingleProduct';
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Cart from './components/Cart';
import User from './components/User';
import CustomerSignup from './components/Login/CustomerSignup';
import ShoperSignup from './components/Login/ShoperSignup';
import CustomerProfile from './components/ProfileSection/CustomerProfile';
import TotalBilling from './components/Payment/TotalBilling';

// import Signup from './components/signup';
// import PrivateRoute from './components/Priveteroute';



function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const verifyAuth = async () => {
  //     const isAuthenticated = await checkAuth();
  //     if (!isAuthenticated) {
  //       navigate('/login'); // Redirect to login page
  //     }
  //   };

  //   verifyAuth();
  // }, [navigate]);
  return (
  <>
  <Router>
    <Navbar/>
   <Routes>
    <Route path="/"element={<Home/>}></Route>
    <Route path="/men"element={<Men/>}></Route>
    <Route path="/women"element={<Women/>}></Route>
    <Route path="/singleproduct/:id" element={<SingleProduct/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/login" element={<User/>}></Route>
    <Route path='/login/customer/' element={<CustomerSignup/>}></Route>
    <Route path='/login/shopkeeper' element={<ShoperSignup/>}></Route>
    <Route path='/customer-profile'element={<CustomerProfile/>}></Route>
    <Route path='/payment' element={<TotalBilling/>}></Route>
    
   </Routes>
   </Router>
  
  </>
);
}
  
export default App;


  

 



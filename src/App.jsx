import { useState , useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';
import { checkAuth } from './utills/CheckAuth';
import './App.css'
import Navbar from './components/Navbar'
import{ BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SingleProduct from './components/SingleProduct';
import Home from './components/Home';
import Men from './components/Men';
import Cart from './components/Cart';
import CustomerSignup from './components/Login/CustomerSignup';
import ShoperSignup from './components/Login/ShoperSignup';
import CustomerProfile from './components/ProfileSection/CustomerProfile';
import TotalBilling from './components/Payment/TotalBilling';
import CustomerLogin from './components/Login/CustomerLogin';
import Shopkeeperlogin from './components/Login/Shopkeeperlogin';

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
    <Route path="/products"element={<Men/>}></Route>
    <Route path="/singleproduct/:id" element={<SingleProduct/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="login/shopkeeper/" element={<Shopkeeperlogin/>}></Route>
    <Route path="login/customer/" element={<CustomerLogin/>}></Route>
    <Route path='customer/' element={<CustomerSignup/>}></Route>
    <Route path='shopkeeper/' element={<ShoperSignup/>}></Route>
    <Route path='/customer-profile'element={<CustomerProfile/>}></Route>
    <Route path='/payment' element={<TotalBilling/>}></Route>
    
   </Routes>
   </Router>
  
  </>
);
}
  
export default App;


  

 



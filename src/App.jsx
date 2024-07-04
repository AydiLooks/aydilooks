import { useState , useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';
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
import Logout from './components/Login/Logout';





function App() {
  const [username, setUsername] = useState(localStorage.getItem('first_name') || " ");
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('access_token'));

  useEffect(() => {
    // This effect will run when the component mounts and when username changes.
    const storedUsername = localStorage.getItem('first_name');
    if (storedUsername) {
      setUsername(storedUsername);
    }
    
    // Check authentication status
    const token = localStorage.getItem('access_token');
    setIsAuthenticated(!!token);

    console.log(isAuthenticated, "hey");
  }, [isAuthenticated, username]);

  

  return (
  <>
  <Router>
    <Navbar user={username}/>
   <Routes>
    <Route path="/"element={<Home/>}></Route>
    <Route path="/products"element={<Men/>}></Route>
    <Route path="/singleproduct/:id" element={<SingleProduct/>}></Route>
    <Route path="/cart" element={<Cart  Authenticated={isAuthenticated}/>}  />
    <Route path="login/shopkeeper/" element={<Shopkeeperlogin/>}></Route>
    <Route path="login/customer/" element={<CustomerLogin/>}></Route>
    <Route path='customer/' element={<CustomerSignup/>}></Route>
    <Route path='shopkeeper/' element={<ShoperSignup/>}></Route>
    <Route path='/customer-profile'element={<CustomerProfile/>}></Route>
    <Route path='/payment' element={<TotalBilling/>}></Route>
    <Route path='logout/' element={<Logout/>}></Route>
    {/* <Route path="*" element={<NotFoundPage />} /> */}
    
   </Routes>
   </Router>
  
  </>
);
}
  
export default App;


  

 



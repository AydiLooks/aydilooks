// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import{ BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SingleProduct from './components/SingleProduct';
import Home from './components/Home';
import Men from './components/Men';


function App() {
  return (
  <>
  <Router>
    <Navbar/>
   <Routes>
    <Route path="/"element={<Home/>}></Route>
    <Route path="/men"element={<Men/>}></Route>
    <Route path="/singleproduct/:id" element={<SingleProduct/>}></Route>
    {/* <Route path="*" element={<Error/>}></Route> */}
    
   </Routes>
   </Router>
  
  </>
);
}
  
export default App;


  

 



// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Middle from './components/Middle';

import Middle1 from './components/Middle1';
import Footer from './components/Footer';
import{ BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Featuredproducts from './components/Featuredproducts';


function App() {
  return (
  <>
  <Router>
   <Navbar/>
   <Middle1/>
   <Middle/>
   <Featuredproducts/>
  
   <Footer />
   </Router>
  
  </>
);
}
  
export default App;


  

 



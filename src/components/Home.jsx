import React from 'react'
import Middle from './Middle'
import Featuredproducts from './Featuredproducts'
import Middleone from './Middleone'
import Footer from './Footer'
import { useTheme } from '../context/Themecontext'

export default function Home() {
  const{theme,setTheme}=useTheme();
  
  return (
    <div style={{backgroundColor:theme.bgcolor}}>
    <Middleone/>
    <Middle/>
    <Featuredproducts/>
    <Footer/>
    </div>
  )
}

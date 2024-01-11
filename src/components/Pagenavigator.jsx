import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/Themecontext'


export default function PageNavigator({title}) {
  const { theme, updateTheme } = useTheme();
  return (
    <div className='py-6'style={{fontFamily:theme.font,fontSize:theme.size,color:!theme.color}}>
        <NavLink to="/"className="text-blue-600 ">Home</NavLink>/{title}
    </div>
  )
}

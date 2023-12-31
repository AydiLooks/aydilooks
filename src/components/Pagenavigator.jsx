import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PageNavigator({title}) {
  return (
    <div>
        <NavLink to="/"></NavLink>/{title}
    </div>
  )
}

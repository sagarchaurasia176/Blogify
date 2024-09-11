import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' fixed top-0 w-full bg-white p-3 shadow-md'>
        <NavLink  to='/'>
        <div className='  p-1 text-center text-black font-semibold  '>
            <h1>Blogify</h1>
        </div>
        </NavLink>
     
    </div>
  )
}

export default Navbar
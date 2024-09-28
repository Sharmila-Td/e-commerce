import React from 'react'
import logo from '../assets/logo.png'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between py-3 px-[4%]'>
        <img src={logo} alt='' className='w-[max(1%,50px)]'/>
        <button className='bg-gray-600  text-white px-5 py-2 sm:py-2 rounded-full text-xs sm:text-sm'
        onClick={()=>setToken('')}>Logout</button>
    </div>
  )
}

export default Navbar
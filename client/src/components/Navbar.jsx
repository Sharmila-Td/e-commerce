import React, { useContext, useState } from 'react';
import {assets} from '../assets/assets'
import {Link, NavLink} from 'react-router-dom';
import { FaSearch, FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {
   const [visible, setVisible] = useState(false);
   const {setShowSearch, getCartCount, token, setToken, setCartItems, navigate} = useContext(ShopContext);

   const logout = () => {
      navigate('/login')
      localStorage.removeItem('token')
      setToken('')
      setCartItems({})
      
   }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to='/'><img src={assets.logo} alt='logo' className='w-36'/></Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
           
           <NavLink to='/' className='flex flex-col items-center gap-1'>
              <>HOME</>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>

           <NavLink to='/collection' className='flex flex-col items-center gap-1'>
              <>COLLECTION</>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>

           <NavLink to='/about' className='flex flex-col items-center gap-1'>
              <>ABOUT</>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>
           
           <NavLink to='/contact' className='flex flex-col items-center gap-1'>
              <>CONTACT</>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
           </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
            <FaSearch className='w-5 cursor-pointer' onClick={()=>setShowSearch(true)}/>
            <div className='group relative'>
            <FaRegUser className='w-5 cursor-pointer' onClick={()=> token ? null : navigate('/login')}/>
               {/* dropdown */}
               {
                  token && 
                  <div className='group-hover:block hidden absolute dropdown-menu right-0  pt-4  '>
                  <div className='flex flex-col gap-2 w-38 py-3 px-4  bg-slate-100 text-gray-500 rounded'>
                     <p className='cursor-pointer hover:text-black'>My Profile</p>
                     <p className='cursor-pointer hover:text-black' onClick={()=>navigate('/orders')}>Orders</p>
                     <p className='cursor-pointer hover:text-black' onClick={()=>logout()}>Logout</p>
                  </div>
               </div>
               }
              
            </div>
            <Link to='/cart' className='relative'>
               <IoBagOutline className='w-8 min-w-5'/>
               <p className='absolute right-[-px] bottom-[-5px] w-3 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                  {getCartCount()}
               </p>
            </Link>
            <MdMenuOpen className='w-8 h-10 cursor-pointer sm:hidden' onClick={()=>setVisible(true)}/>
        </div>
        {/* Side bar menu for small screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
               <div onClick={()=>setVisible(false)} className='flex items-center gap-2 p-3 cursor-pointer'>
                  <p>Back</p>
                  <IoIosArrowBack  className='h-6 rotate-180'/>
               </div>
               <NavLink to='/' className='py-2 pl-6 border' onClick={()=>setVisible(false)}> HOME </NavLink>
               <NavLink to='/collection' className='py-2 pl-6 border' onClick={()=>setVisible(false)}> COLLECTION </NavLink>
               <NavLink to='/about' className='py-2 pl-6 border' onClick={()=>setVisible(false)}> ABOUT </NavLink>
               <NavLink to='/contact' className='py-2 pl-6 border' onClick={()=>setVisible(false)}> CONTACT </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
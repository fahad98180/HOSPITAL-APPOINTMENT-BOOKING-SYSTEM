import React, { useState } from 'react'
import {assets}from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
const navigate=useNavigate()
const[showMenu,setShowMenu]=useState(false)
const[token,setToken]=useState(true)
    return (
    
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b-gray-500 '>
<img onClick={()=>navigate('/')} className="w-44 cursor-pointer"src={assets.logo} alt=""/>
<ul className='hidden md:flex items-start gap-5 font-medium'>
    <NavLink to='/'>
        <li className="py-1">Home</li>
        <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden "/>

    </NavLink >


    <NavLink to="/Doctor">
        <li className="py-1">All Doctors</li>
        <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
    </NavLink>


    <NavLink to="/About">
        <li className="py-1" >About</li>
        <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
    </NavLink>


    <NavLink to="/Contact">
        <li className="py-1">Contact</li>
        <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
    </NavLink>
</ul>

<div className='flex-items center gap-'>
    {
        token?
        <div className='flex items-center gap-3 cursor-pointer group relative '>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
 <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'> 
        <p onClick={()=>navigate('/MyProfile')} className='hover:text-black cursor-pointer'>My Profile</p>
        <p onClick={()=>navigate('/MyOppoinment')} className='hover:text-black cursor-pointer'>My-Appointment</p>
        <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
     </div>
 </div>
        </div>
        :<button onClick={()=>navigate("/Login")} className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-light md:block transition-colors duration-200'>Create Account</button>
    }

    <img onClick={()=>setShowMenu(true)} className='w-7 md:hidden absolute right-5 top-7 cursor-pointer'src={assets.menu_icon} alt=""/>
{/*mobile menu*/}
<div className={`${showMenu ? 'fixed w-full' :'h-0 w-0'}md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
    <div className='flex items-center justify-between px-5 py-6'>
       <img className='w-36' src={assets.logo} alt="" /> 
       <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
    </div>
    <ul className='flex flex-col item-center gap-2 mt-5 px-5 text-lg font-medium'>
       <NavLink className='px-4 py-2 rounded inline-block active:text-white active:bg-blue-500 max-[750px]:bg-blue-500 max-[750px]:text-white' onClick={()=>setShowMenu(false)} to='/'>Home</NavLink>
       <NavLink className='px-4 py-2 rounded inline-block active:text-white active:bg-blue-500 max-[750px]:bg-blue-500 max-[750px]:text-white' onClick={()=>setShowMenu(false)} to='/doctor'>All Doctors</NavLink>
       <NavLink className='px-4 py-2 rounded inline-block active:text-white active:bg-blue-500 max-[750px]:bg-blue-500 max-[750px]:text-white' onClick={()=>setShowMenu(false)} to='/about'>About</NavLink>
       <NavLink className='px-4 py-2 rounded inline-block active:text-white active:bg-blue-500 max-[750px]:bg-blue-500 max-[750px]:text-white' onClick={()=>setShowMenu(false)} to='/contact'>Menu</NavLink> 
    </ul>
</div>
</div>
    </div>
  )
}

export default Navbar
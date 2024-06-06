import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import Logout from './Logout';


function Navbar() {
  const { user } = useContext(UserContext);
  return (
    <div className='w-full fixed z-[999] px-20 py-6 flex justify-between items-center backdrop-blur-[5px] text-white' >
        <div className="logo">
            <h3 className='font-rejouice text-3xl'>templetrust</h3>
        </div>
        <div className="links flex gap-10">
            {["About Us","Dashboard",`${user.email}`,<Logout/>].map((item,index)=>(
                <a className={`text-lg font-thin capitalize ${index === 2 && "ml-60"}`} key={index} href={`${index == 1 && "/dash"}`}>{item}</a>
            ))}
        </div>
    </div>
  )
}

export default Navbar
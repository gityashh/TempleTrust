import React from 'react'

function Navbar() {
  return (
    <div className='w-full fixed z-[999] px-20 py-6 flex justify-between items-center backdrop-blur-[5px]' >
        <div className="logo">
            <h3 className='font-rejouice text-3xl'>templetrust</h3>
        </div>
        <div className="links flex gap-10">
            {["About Us","Dashboard","Contact Us"].map((item,index)=>(
                <a className={`text-lg font-thin capitalize ${index === 2 && "ml-60"}`} key={index} href="">{item}</a>
            ))}
        </div>
    </div>
  )
}

export default Navbar
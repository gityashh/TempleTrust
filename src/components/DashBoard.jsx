import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function DashBoard() {
    const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/spend'); // Replace '/desired-path' with the actual path you want to navigate to
  };
  const handleButtonClick2 = () => {
    navigate('/addcause'); // Replace '/desired-path' with the actual path you want to navigate to
  };
  return (
    <div className='h-screen w-full bg-zinc-900 px-20 py-12 text-white'>
        <div className='flex justify-between'>
        <div className='flex items-center gap-10'>
            <a href="/" className='h-10 w-10'>
                <span className='text-6xl inline-block -rotate-[90deg]'><IoIosArrowRoundUp/></span>
            </a>
        <h1 className='text-5xl font-rejouice mt-3'>Dashboard</h1></div>
        <div className='flex'>  
        <button className='text-3xl border-zinc-600 border-[1px] px-20 rounded-lg bg-green-600 text-black font-neue font-light' onClick={handleButtonClick}>Spend</button>
        <button className='text-3xl ml-4 border-zinc-600 border-[1px] px-20 rounded-lg font-neue font-light' onClick={handleButtonClick2}>Add cause</button>
        </div>
        </div>
        <div className='w-full py-24 flex gap-10'>
             <div className='h-40 w-96 bg-zinc-800 rounded-lg px-4 py-1'>
                <h2 className='text-6xl font-founders text-zinc-600'>Bank:</h2>
                <h2 className='text-6xl font-founders text-zinc-300 mt-5'>₹10,00,000</h2>
             </div>
             <div className='h-40 w-96 bg-zinc-800 rounded-lg px-4 py-1'>
                <h2 className='text-6xl font-founders text-zinc-600'>Invested:</h2>
                <h2 className='text-6xl font-founders text-zinc-300 mt-5'>₹56,000</h2>
             </div>
        </div>
        <div className='w-full'>
            <div className='w-96 h-[400px] bg-zinc-600 rounded-lg px-6 py-8 text-zinc-400'>
                <h1 className='font-neue font-thin text-4xl text-white'>Bhandara</h1>
                <h3 className='font-founders mt-10 text-6xl'>Total:</h3>
                <h4 className='font-founders text-6xl'>₹2000</h4>
                <h3 className='font-founders mt-6 text-6xl'>Target:</h3>
                <h4 className='font-founders text-6xl'>₹4000</h4>
            </div>
        </div>
    </div>
  )
}

export default DashBoard
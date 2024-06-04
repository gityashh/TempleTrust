import React from 'react'
import { IoIosArrowRoundUp } from 'react-icons/io'

function Donate() {
  return (
    <div className='h-screen w-full bg-zinc-900 px-20 py-10 text-white'>
    <div className='flex gap-10 mb-10'>
    <a href="/" className='h-10 w-10'>
        <span className='text-6xl inline-block -rotate-[90deg]'><IoIosArrowRoundUp/></span>
    </a>
    <h1 className='text-5xl font-neue mt-2 '>Donate</h1>
    </div>
    <form action="" className='flex flex-col gap-4 w-[800px] items-start'>
        <input type="text" placeholder='Cause Name' className='text-4xl px-4 py-2 rounded-mg  outline-none bg-zinc-600 font-light' value={req.params.causeId}/>
        <input type="number" placeholder='Target Ammount' className='text-4xl px-4 py-2 rounded-mg  outline-none bg-zinc-600 font-light'/>
        <button className='text-3xl px-12 py-2 bg-green-600'>Add</button>
    </form>
    </div>
  )
}

export default Donate
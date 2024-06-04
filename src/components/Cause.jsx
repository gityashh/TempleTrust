import React from 'react'
import { useNavigate } from 'react-router-dom'

function Cause() {
    const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/donate/${cause.id}`); // Replace '/desired-path' with the actual path you want to navigate to
  };
  return (
        <div id='1' className="cause border-b-[.5px] h-40 border-zinc-600 w-full px-20 py-4 flex items-center justify-between">
                    <div>
                        <h1 className='font-neue text-5xl font-thin uppercase mb-1'>Bhandara</h1>
                        <h4 className='font-neue text-xl font-md'>on 4/12/2024</h4>
                    </div>
                    <div className="description w-60 font-neue ml-40">
                        <div className=''>
                            <h6>Required: 10000</h6>
                            <h6>Collected: 5000</h6>
                        </div>
                    </div>
                    <div className="buttons w-80 flex flex-col gap-2">
                        <button className="donate px-20 py-1  border-zinc-600 border-[1px] text-center rounded-full font-thin" onClick={handleButtonClick}>DONATE</button>
                    </div>
        </div>
  )
}

export default Cause
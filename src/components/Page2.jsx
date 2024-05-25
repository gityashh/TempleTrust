import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";
import Cause from './Cause';

function Page2() {
    return (
        <div className='w-full h-screen bg-zinc-900 '>
            <div className="title2 flex items-center gap-20 px-20 pb-16 border-b-[.5px] border-zinc-600">
                <h1 className='font-neue text-8xl font-light'>Featured Causes</h1>
                <span className='inline-block scale-[6] rotate-[180deg] mt-6'><IoIosArrowRoundUp /></span>
            </div>
            <div className="causeContainer">
                <Cause/>
                <Cause/>
                <Cause/>
            </div>
        </div>
    )
}

export default Page2
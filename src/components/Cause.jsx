import React from 'react'

function Cause() {
  return (
        <div id='1' className="cause border-b-[.5px] h-40 border-zinc-600 w-full px-20 py-4 flex items-center justify-between">
                    <div>
                        <h1 className='font-neue text-5xl font-thin uppercase mb-1'>Bhandara</h1>
                        <h4 className='font-neue text-xl font-md'>on 4/12/2024</h4>
                    </div>
                    <div className="description w-60 font-neue font-thin ml-40">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quos, a nostrum cupiditate consequatur tenetur velit.
                    </div>
                    <div className="buttons w-80 flex flex-col gap-2">
                        <div className='flex gap-20'>
                            <h6>Required: 10000</h6>
                            <h6>Collected: 5000</h6>
                            </div>
                        <div className="donate px-20 py-1  border-zinc-600 border-[1px] text-center rounded-full  font-thin">DONATE</div>
                        <div className="share px-20 py-1  border-zinc-600 border-[1px] text-center rounded-full font-thin">SHARE</div>
                    </div>
        </div>
  )
}

export default Cause
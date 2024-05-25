import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";


function Landing() {
    return (
        <div className=' page1 w-full h-[90vh] bg-zinc-900 pt-1'>
            <div className="textsructure mt-52 px-20 ">
                <div className="masker" >
                    <h1 className='font-founders uppercase text-[9vw]  leading-[6.5vw]'>here faith</h1>
                </div>
                <div className="masker flex items-center gap-5" >
                    <div className='h-20 w-32 bg-[#FE772B] mt-3 rounded-md flex items-center justify-center'>
                        <svg className='h-16 w-16' fill="#18181B" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 512.002 512.002" xml:space="preserve">
                            <g>
                                <g>
                                    <path d="M444.371,197.861c-19.68-21.492-45.574-33.329-72.913-33.329s-53.233,11.837-72.913,33.329
			c-18.651,20.37-29.348,47.499-29.348,74.43c0,19.403-15.785,35.187-35.187,35.187H221.26
			c13.485-17.326,21.546-39.07,21.546-62.676c0-56.386-45.875-102.261-102.261-102.261S38.283,188.416,38.283,244.803
			c0,10.931,8.862,19.793,19.793,19.793c10.931,0,19.793-8.862,19.793-19.793c0-34.56,28.117-62.676,62.676-62.676
			s62.676,28.116,62.676,62.676s-28.117,62.676-62.676,62.676c-10.931,0-19.793,8.862-19.793,19.792
			c0,10.931,8.862,19.793,19.793,19.793c34.559,0,62.676,28.116,62.676,62.676c0,34.56-28.117,62.676-62.676,62.676
			s-62.676-28.116-62.676-62.676c0-10.931-8.862-19.793-19.793-19.793c-10.931,0-19.793,8.862-19.793,19.793
			c0,56.386,45.875,102.261,102.261,102.261s102.261-45.875,102.261-102.261c0-23.606-8.061-45.35-21.546-62.676h12.749
			c41.229,0,74.772-33.543,74.772-74.772c0-36.317,29.288-68.175,62.676-68.175s62.676,31.858,62.676,68.175v137.449
			c0,34.56-28.117,62.676-62.676,62.676s-62.676-28.116-62.676-62.676c0-10.931-8.862-19.793-19.793-19.793
			c-10.931,0-19.793,8.862-19.793,19.793c0,56.386,45.875,102.261,102.261,102.261s102.261-45.875,102.261-102.261V272.292
			C473.72,245.361,463.022,218.232,444.371,197.861z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path d="M286.338,37.365c-3.681-3.683-8.773-5.794-13.987-5.794s-10.319,2.111-14,5.794c-3.681,3.68-5.793,8.788-5.793,13.999
			c0,5.212,2.111,10.307,5.793,13.987c3.681,3.681,8.788,5.806,14,5.806s10.305-2.123,13.987-5.806
			c3.695-3.68,5.806-8.773,5.806-13.987C292.143,46.153,290.031,41.045,286.338,37.365z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path d="M356.112,64.633c-10.101-4.183-21.678,0.612-25.861,10.71c-6.406,15.469-18.452,27.516-33.919,33.92
			c-15.469,6.406-32.503,6.406-47.971,0c-31.928-13.225-47.145-49.96-33.92-81.892c4.183-10.097-0.614-21.677-10.712-25.86
			c-10.101-4.183-21.678,0.614-25.861,10.713c-21.577,52.094,3.251,112.034,55.345,133.612c12.62,5.227,25.874,7.839,39.134,7.839
			c13.257,0,26.518-2.613,39.134-7.839c25.235-10.453,44.891-30.107,55.343-55.344C371.006,80.393,366.21,68.815,356.112,64.633z"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <h1 className='font-founders uppercase text-[9vw]  leading-[6.5vw]'>meets</h1>
                </div>
                <div className="masker" >
                    <h1 className='font-founders uppercase text-[9vw]  leading-[6.5vw]'>innovation.</h1>
                </div>
                {/* <h4 className='text-4xl uppercase font-thin tracking-[5px]'>for a blessed future</h4> */}
            </div>
            <div className='border-t-[1px] mt-24 border-zinc-600 flex px-20 py-5 justify-between items-center'>
                {['Blockchain driven communities', 'For a blessed future'].map((item, index) =>
                (
                    <p className='text-md font-light tracking-tight'>{item}</p>
                ))}
                <div className="start flex items-center gap-1">
                    <div className='border-[1px] border-zinc-600 px-6 py-2 rounded-full font-light text-sm uppercase'>Start a community</div>
                    <div className='w-9 h-9 border-zinc-600 rounded-full border-[1px] flex items-center justify-center'>
                        <span className='inline-block rotate-[45deg] scale-[2.5] font-thin'> <IoIosArrowRoundUp /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
import React,{useState} from 'react'
import SpendModal from './SpendModal';
import { IoIosArrowRoundUp } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function DashBoard({state}) {
    const navigate = useNavigate();
    const [showModal,setShowModal] = useState(false);

  const handleButtonClick = () => {
    navigate('/spend'); // Replace '/desired-path' with the actual path you want to navigate to
  };
  const handleButtonClick2 = () => {
    navigate('/addcause'); // Replace '/desired-path' with the actual path you want to navigate to
  };
  return (
    <div className='w-full bg-zinc-900 px-20 py-12 text-white'>
        <div className='flex justify-between'>
        <div className='flex items-center gap-10'>
        <h1 className='text-5xl font-rejouice mt-3'>Dashboard</h1></div>
        <div className='flex'> 
        <button className='text-3xl px-[114px] py-4 rounded-lg bg-green-600 text-black font-neue font-light'onClick={()=>setShowModal(true)}>Spend</button>
        {showModal && (
                <SpendModal setShowModal={setShowModal} state={state}/>
            )}
        
        </div>
        </div>
        <div className='w-full py-24 flex gap-10 flex-wrap'>
             <div className='h-40 w-[350px] bg-zinc-800 rounded-lg px-4 py-1'>
                <h2 className='text-6xl font-founders text-zinc-600'>Bank:</h2>
                <h2 className='text-6xl font-founders text-zinc-300 mt-5'>₹10,00,000</h2>
             </div>
             <div className='h-40 w-[350px] bg-zinc-800 rounded-lg px-4 py-1'>
                <h2 className='text-6xl font-founders text-zinc-600'>Invested:</h2>
                <h2 className='text-6xl font-founders text-zinc-300 mt-5'>₹56,000</h2>
             </div>
        </div>
        <div className='w-full flex items-center gap-10 flex-wrap'>
            <div className='w-[350px] h-[400px] bg-zinc-600 rounded-lg px-6 py-8 text-zinc-400 shrink-0'>
                <h1 className='font-neue font-thin text-4xl text-white'>Bhandara</h1>
                <h3 className='font-founders mt-10 text-6xl'>Total:</h3>
                <h4 className='font-founders text-6xl'>₹00</h4>
                <h3 className='font-founders mt-6 text-6xl'>Target:</h3>
                <h4 className='font-founders text-6xl'>₹4000</h4>
            </div>
        </div>
    </div>
  )
}

export default DashBoard
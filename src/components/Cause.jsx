import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DonationModal from './DonationModal';

function Cause({ cause, state }) {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const handleDonateClick = () => {
        setShowModal(true);
    };

    return (
        <div id='1' className="cause border-b-[.5px] h-40 border-zinc-600 w-full px-20 py-4 flex items-center justify-between">
            <div>
                <h1 className='font-neue text-5xl font-thin uppercase mb-1'>{cause.title}</h1>
                <h4 className='font-neue text-xl font-md'>on {cause.date}</h4>
            </div>
            <div className="description w-60 font-neue ml-40">
                <div className=''>
                    <h6>Required: {cause.required}</h6>
                    <h6>Collected: 5000</h6>
                </div>
            </div>
            <div className="buttons w-80 flex flex-col gap-2">
                <button 
                    className="donate px-20 py-1 border-zinc-600 border-[1px] text-center rounded-full font-thin" 
                    onClick={handleDonateClick}
                >
                    DONATE
                </button>
            </div>
            {showModal && (
                <DonationModal setShowModal={setShowModal} state={state} />
            )}
        </div>
    );
}

export default Cause;

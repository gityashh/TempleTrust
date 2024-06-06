import React, { useState } from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";
import Cause from './Cause';
import CauseModal from './CauseModal';

function Page2({state}) {
    const [causes, setCauses] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const addCause = (newCause) => {
        const updatedCauses = [...causes, newCause];
        setCauses(updatedCauses);
    };

    return (
        <div className='w-full bg-zinc-900 mb-40'>
            <div className="title2 flex items-center gap-20 px-20 pb-16 border-b-[.5px] border-zinc-600">
                <h1 className='font-neue text-8xl font-light'>Featured Causes</h1>
                <span className='inline-block scale-[6] rotate-[180deg] mt-6'><IoIosArrowRoundUp /></span>
            </div>
            <div className="causeContainer mb-20">
               {causes.map((cause)=>(
                <Cause key={cause.id} cause={cause} state={state}/>
               ))}
            </div>
            {showModal && <CauseModal setShowModal={setShowModal} addCause={addCause} state={state} />}
                <button
                    onClick={() => setShowModal(true)}
                    className="add-cause-button text-3xl border-zinc-600 border-[1px]  ml-[76.5vw] px-[76px] py-4 rounded-lg bg-green-600 text-black font-neue font-light">
                    Add Cause+
                </button>
            <div className='px-16 py-6'>
            </div>

        </div>

    );
}

export default Page2;

// CauseModal.jsx
import React, { useState } from 'react';

function CauseModal({ setShowModal,addCause,state }) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [required, setRequired] = useState('');
    const [collected, setCollected] = useState('');

    const handleSubmit = async (e) => {
     e.preventDefault();
     const newCause = {
      id: Date.now(),
      title,
      date,
      required,
      collected,
  };
     try {
      const { web3, accounts,contract } = state;
         if (window.ethereum) {
             // Request account access if needed
             await window.ethereum.request({ method: "eth_requestAccounts" });
             
             // Retrieve current Ethereum account
             const accounts = await window.ethereum.request({ method: "eth_accounts" });
             const account = accounts[0]; // Assuming you want to use the first account
 
             // Call the addCause method of the contract
             await state.contract.methods.addCause(title).send({ from: account });
             
             // Clear form inputs and close modal
            
             // Inform user about successful addition
             alert("Cause added successfully");
         } else {
             console.error("MetaMask not detected");
         }
     } catch (error) {
         console.error("Error adding cause:", error);
         // Handle error cases, such as informing the user or logging the error
     }
     addCause(newCause);
     setShowModal(false);
 };

 return (
  <div className="modal px-20">
      <div className="modal-content border-zinc-600 border-[.5px] w-96 p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-start">
              <input
                  type="text"
                  placeholder="Cause Name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className='bg-zinc-700 px-2 rounded-sm font-light py-1 text-3xl'
              />
              <input
                  type="date"
                  placeholder="Event Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className='bg-zinc-700 px-2 rounded-sm font-light py-1 text-3xl'
              />
              <input
                  type="number"
                  placeholder="Required Amount"
                  value={required}
                  onChange={(e) => setRequired(e.target.value)}
                  required
                  className='bg-zinc-700 px-2 rounded-sm font-light py-1 text-3xl'
              />
              <button type="submit" className='px-5 w-36 py-3 bg-green-600 mb-2'>Add Cause</button>
          </form>
          <button className="cancel-button px-5 w-36 py-3 bg-red-600" onClick={() => setShowModal(false)}>
              Cancel
          </button>
      </div>
  </div>
);
};

export default CauseModal;
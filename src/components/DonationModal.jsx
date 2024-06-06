// DonationModal.jsx
import React, { useState } from 'react';

function DonationModal({ setShowModal, state }) {
    const [causeId, setCauseId] = useState('');
    const [value, setValue] = useState('');
    const [account, setAccount] = useState('');

    const  handleSubmit = async (e) => {
        e.preventDefault();
        setShowModal(false);
        try {
         if (window.ethereum) {
             await window.ethereum.request({ method: "eth_requestAccounts" });
             const accounts = await window.ethereum.request({ method: "eth_accounts" });

             const { contract, web3 } = state;

             if (!contract) {
                 console.error("Smart contract not loaded");
                 return;
             }

             const weiAmount = web3.utils.toWei(value, "ether");

             await contract.methods.donate(causeId).send({
                 from: accounts[0],
                 value: weiAmount,
                 gas: '500000' // Adjust the gas limit as needed
             });

             alert("Donation successful");
         } else {
             console.error("MetaMask not detected");
         }
     } catch (error) {
         console.error("Error donating to cause:", error);
     }
    };

    return (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="modal-content bg-gray-800 p-8 rounded-md text-white">
                <h2 className="text-2xl mb-4">Make a Donation</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        className="bg-gray-700 px-4 py-2 rounded-md"
                        type="text"
                        placeholder="Cause ID"
                        value={causeId}
                        onChange={(e) => setCauseId(e.target.value)}
                        required
                    />
                    <input
                        className="bg-gray-700 px-4 py-2 rounded-md"
                        type="text"
                        placeholder="Account No"
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                        required
                    />
                    <input
                        className="bg-gray-700 px-4 py-2 rounded-md"
                        type="number"
                        placeholder="Value (ETH)"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        required
                    />
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            className="bg-red-600 px-4 py-2 rounded-md"
                            onClick={() => setShowModal(false)}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="bg-green-600 px-4 py-2 rounded-md">
                            Donate
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DonationModal;
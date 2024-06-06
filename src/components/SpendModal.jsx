import React, { useState } from 'react';

function SpendModal({setShowModal,state},) {
    const [causeId, setCauseId] = useState('');
    const [amount, setAmount] = useState('');
    const [recipient, setRecipient] = useState('');
    const handleSpend = async (causeId, amount, recipient) => {
        try {
            if (window.ethereum) {
                console.log(state)
                await window.ethereum.request({ method: "eth_requestAccounts" });
                const accounts = await window.ethereum.request({ method: "eth_accounts" });

                const { contract, web3 } = state;

                if (!contract) {
                    console.error("Smart contract not loaded");
                    return;
                }

                const weiAmount = web3.utils.toWei(amount, "ether");

                await contract.methods.spend(causeId, weiAmount, recipient).send({
                    from: accounts[0],
                    gas: '500000' // Adjust the gas limit as needed
                });

                alert("Funds spent successfully");
            } else {
                console.error("MetaMask not detected");
            }
        } catch (error) {
            console.error("Error spending funds:", error);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSpend(causeId,amount,recipient)
        setShowModal(false);
    };


  return (
    <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="modal-content bg-gray-800 p-8 rounded-md text-white">
        <h2 className="text-2xl mb-4">Spend</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
                className="bg-gray-700 px-4 py-2 rounded-md"
                type="text"
                placeholder="Cause ID"
                onChange={(e) => setCauseId(e.target.value)}
                required
            />
            <input
                className="bg-gray-700 px-4 py-2 rounded-md"
                type="number"
                placeholder="Ammount"
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <input
                className="bg-gray-700 px-4 py-2 rounded-md"
                type="text"
                placeholder="recepient's addreess"
                onChange={(e) => setRecipient(e.target.value)}
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
                    Spend
                </button>
            </div>
        </form>
    </div>
</div>
);
}


export default SpendModal
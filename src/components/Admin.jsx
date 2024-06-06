import React,{useEffect,useState} from 'react'
import axios from "axios"
import { useNavigate,Link } from "react-router-dom"
import TempleDonation from '../contracts/TempleDonation.json'

function Admin({state,setState}) {
        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
        const [add,setAdd] = useState('')
        const page = useNavigate();
    
        async function submit(e){
            e.preventDefault();
            try {
                const isAdmin = true;
                const response = await axios.post('http://localhost:3000/adminsign', {email,password,isAdmin});
                console.log(response.data);
                if (response.data) {
                    console.log(response.data);
                    document.cookie = `token=${response.data}; path=/;`;
                    page('/');
                } else {
                    alert('you already have an account');
                }
                const { web3, accounts } = state;
    
                // Deploy contract instance
                const contract = new web3.eth.Contract(
                    TempleDonation.abi,
                    // Add the contract address here if needed
                );
    
                const deployedContract = await contract.deploy({
                    data: TempleDonation.bytecode,
                    arguments: [] // No arguments required for deployment
                }).send({
                    from: accounts[0],
                    gas: '5000000' // Adjust gas limit as needed
                });
    
                // Update the state with the deployed contract
                setState({ ...state, contract: deployedContract });
    
                console.log("Contract now deployed at:", deployedContract.address);
            } catch (error) {
                console.error('Error deploying contract:', error);
            }
    
            // Remove the axios.post request and related logic
            // Instead, you can add your desired functionality here
            // For example, you can perform client-side validation or navigate to another page
        }


  return (
        <div className='Login w-full h-[100vh] bg-zinc-900 px-20 py-20 text-white'>
            <div className="logo">
                <h3 className='font-rejouice text-3xl'>templetrust</h3>
            </div>
            <div className='flex flex-col items-center justify-center h-full w-full'>
                <h1 className='font-neue font-thin text-3xl'>Sign up as an administrator</h1>
                <form action="POST" className='flex flex-col m-10 gap-2'>
                    <input className='bg-zinc-700 border-none px-3 py-3 outline-none rounded-sm' type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' name='email' />
                    <input className='bg-zinc-700 border-none px-3 py-3 outline-none rounded-sm' type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' name='password' />
                    <input className='bg-zinc-700 border-none px-3 py-3 outline-none rounded-sm' type="text" onChange={(e)=>{setAdd(e.target.value)}} placeholder='Temple Adress' name='templeAdress' />
                    <input className='bg-green-600 w-20 py-2 rounded-sm ml-32' type="submit" value='register' onClick={submit} />
                </form>
            </div>
        </div>
  )
}

export default Admin
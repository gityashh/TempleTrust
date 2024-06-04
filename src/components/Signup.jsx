import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, Link, Form, useLocation } from "react-router-dom"

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const page = useNavigate();
    const [error, setError] = useState('')

    async function submit(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/signup', {email,password});
            console.log(response.data);
            if (response.data === "login") {
                page('/');
            } else {
                alert('you already have an account');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='Login w-full h-[100vh] bg-zinc-900 px-20 py-20 text-white'>
            <div className="logo">
                <h3 className='font-rejouice text-3xl'>templetrust</h3>
            </div>
            <div className='flex flex-col items-center justify-center h-full w-full'>
                <h1 className='font-neue font-thin text-3xl'>Sign Up</h1>
                <form action='POST' className='flex flex-col m-10 gap-2' >
                    <input className='bg-zinc-700 border-none px-3 py-3 outline-none rounded-sm' type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' name='' />
                    <input className='bg-zinc-700 border-none px-3 py-3 outline-none rounded-sm' type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' name='' />
                    <input className='bg-green-600 w-20 py-2 rounded-sm ml-32' type="submit" value='register' onClick={submit} />
                </form>
                <Link className='mb-2' to="/login">Already have an account?</Link>
                <Link to="/adminsign">Become an administrator</Link>
            </div>
        </div>
    )
}

export default Signup
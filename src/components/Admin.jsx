import React,{useEffect,useState} from 'react'
import axios from "axios"
import { useNavigate,Link } from "react-router-dom"

function Admin() {
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
                    <input className='bg-green-600 w-20 py-2 rounded-sm ml-32' type="submit" value='register' />
                </form>
            </div>
        </div>
  )
}

export default Admin
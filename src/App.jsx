import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Page2 from './components/Page2'
import DashBoard from './components/DashBoard'
import Spend from './components/Spend'
import { useContext } from 'react';
import { UserContext } from './UserContext';
import {useState,useEffect} from 'react'
import Web3 from 'web3';
import TempleDonation from './contracts/TempleDonation.json';



function App({state,setState}) {

  const {user} = useContext(UserContext);
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <Landing />
      <Page2 state={state} setState={setState}/>
      <DashBoard state={state}/>
    </div>
  )
}

export default App
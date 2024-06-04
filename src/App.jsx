import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Page2 from './components/Page2'



function App() {
  
  return (
    <div className='w-full min-h-screen text-white'>
      <Navbar />
      <Landing />
      <Page2 />
    </div>
  )
}

export default App
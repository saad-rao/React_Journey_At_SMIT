
import './App.css'
import React from 'react'
import Login from './components/login.jsx'


function App() {

  let isLoggedIn = true;

  

  return (
    // {/* <h1 className='bg-red-950'>Hello World !</h1> */}


   
    <>
    
    <div className='text-2xl font-bold text-red-700 text-center mt-10'>
          <Login  />

          </div>

   <div className='flex justify-center items-center h-screen'>

<div className='border-2 w-[600px] '>
  
  <img className='' src='https://cache4.pakwheels.com/system/car_generation_pictures/6076/original/Bugatti_chiron.jpg?1639740765' alt='Bugatti'/>



  <p className='text-2xl font-bold text-red-700'>Bugati</p>
  <p className='text-2xl font-light text-slate-700'>1M $</p>
</div>
</div>

    </>
  )
}

export default App

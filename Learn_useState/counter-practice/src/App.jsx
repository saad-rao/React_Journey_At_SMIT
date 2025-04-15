import { useState } from 'react'

import './index.css'

// let count = 0 
 //Ya aik global variable hai jo ke har function ke liye accessible hai

const App = () => {

//is me hum na 2 functions banaye hain inc aur dec jo ke count ko increment aur decrement karte hain

//abhi sirf ya function console ma print kar raha hai
//abhi hum na useState ka use nahi kiyax hai
const [count, setCount] = useState(0)
//ab hum na useState ka use kiya hai jo ke count ko track karega
// jab bhi count change hoga to component re-render hoga

  function inc (){
    setCount(count + 1)
    console.log("INC",count);
    
  }

  function dec (){
    // ab hum na useState ka use kiya hai jo ke count ko track karega
    // jab bhi count change hoga to component re-render hoga

    if(count === 0){
      alert("Count can't be less than 0")
      return
    }
    setCount(count - 1)
    console.log("DEC", count);
    
  }

  // ab hum usestrate ka use karenge
  // useState ka use karne se humara component re-render hoga jab bhi state change hogi
  //aur jo 0 UI pa change nhi ho rha tha usa change karwae ga useState se
 
  return (
    <div>
      <div className='flex justify-center items-center h-screen bg-amber-500'>
        <h1 className=''> Counter App</h1>
        
        <button onClick={inc}  className='px-3 mx-3 font-normal text-4xl py-2  rounded-sm bg-blue-300'>+</button>
        {count}
        <button onClick={dec}  className='px-3 mx-3 font-normal text-4xl py-2  rounded-sm bg-red-600 ' >-</button>
      </div>
    </div>
  )
}

export default App
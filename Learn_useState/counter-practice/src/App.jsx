import { useState } from 'react'

import './App.css'

let count = 0  //Ya aik global variable hai jo ke har function ke liye accessible hai

const App = () => {

//is me hum na 2 functions banaye hain inc aur dec jo ke count ko increment aur decrement karte hain

//abhi sirf ya function console ma print kar raha hai
//abhi hum na useState ka use nahi kiya hai

  function inc (){
    count+=1
    console.log("INC",count);
    
  }

  function dec (){
    count-=1
    console.log("DEC", count);
    
  }
  return (
    <div>
      <div>
        <h1>Counter App</h1>
        
        <button onClick={inc} className='p-1 rounded-sm bg-blue-300'>+</button>
        {count}
        <button onClick={dec} className='p-1 rounded-sm ' >-</button>
      </div>
    </div>
  )
}

export default App
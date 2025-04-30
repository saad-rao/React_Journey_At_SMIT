import React from 'react'
import { useState } from 'react'
import Product from './Product'
const App = () => {
  const [name, setName] =  useState("Hello saad")
  const handleUpdate = () =>{
    setName("Han Asad kya hal han")
  }
 
  return (
    <div>
      <h1>UseContext</h1>
      <p>{name}</p>

  
      
     <button onClick={handleUpdate}>Greets</button>
     <Product/>
    </div>
  )
}

export default App

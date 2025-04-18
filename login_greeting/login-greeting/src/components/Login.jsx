import React from 'react'
import greeting from './greeting'

const Login = () => {
  return (
    <div>
      <h1 className='mb-3'>Login</h1>
      <input className='bg-red-200 rounded-3xl p-2 mb-3' type="email" placeholder='Email:' /> <br/>
      <input className='bg-red-200 rounded-3xl p-2' type="password" placeholder='password:' />

      
      <div>
      <button onClick={greeting} className='mt-3 rounded-2xl border-2 p-2 bg-red-200 '>Login</button>
      </div>
    </div>

    
  )
}

export default Login

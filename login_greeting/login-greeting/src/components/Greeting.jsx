import React from 'react'

const greeting = ({name}) => {
  return (
    <div className='text-2xl font-bold bg-red-700 text-center mt-10 text-white '>
      Wellcome {name} to the world of React
    </div>
  )
}

export default greeting

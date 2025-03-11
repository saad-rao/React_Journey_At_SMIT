import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import './components/Navbar/Navbar.css'
import Hero from './components/Hero/Hero'
import './components/Hero/Hero.css'
import Footer from './components/Footer/Footer'


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Hero/>
      <Footer/>
    </>
  )
}

export default App

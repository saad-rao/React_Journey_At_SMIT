// import Link from "react/link";
import { Link } from "react-router-dom";
import React from 'react'
import {createBrowserRouter, RouterProvider}   from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";



const allPaths = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
  ,
  {
    path: "/about",
    element: <About />,
  }
  ,
  {
    path: "/services",
    element: <Services />,

  }
  ,
  {
    path: "/contact",
    element: <Contact />,
  }


])


function App() {
 
  return < RouterProvider router={allPaths}/>

}

export default App

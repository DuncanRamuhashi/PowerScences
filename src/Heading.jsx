import React, { useState } from 'react'
import logo from './assets/logo3.png'
import ere from './assets/ere.png'
import { Link } from 'react-router-dom'

const Heading = () => {
    



  return (
<div className="bg-[#f9e3ce] py-4 w-full">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
    
    <a href="/" className="mb-4 md:mb-0">
      <img src={logo} alt="Logo" className="w-48 md:w-64 h-auto" />
    </a> 
    <div className=" md:space-y-0  space-x-10 items-center">
          <a href="/" className="text-green-700 text-lg hover:text-yellow-500">Home</a>
          <Link to={'/MoviePage'}> 
          <a  className="text-green-700 text-lg hover:text-yellow-500">Movies</a>
          </Link>
          <Link to={'/SeriesPage'}> 
          <a  className="text-green-700 text-lg hover:text-yellow-500">Series</a>
          </Link>
         
          <Link  to={'/About'}>
          <a className="text-green-700 text-lg hover:text-yellow-500">About</a>
          </Link>
         
         
        </div>
  </div>
</div>

  )
}

export default Heading
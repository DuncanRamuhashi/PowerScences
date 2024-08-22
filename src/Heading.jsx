import React, { useState } from 'react'
import logo from './assets/logog.jpg'
import ere from './assets/ere.png'

const Heading = () => {
    const genres = ["Horror", "Action", "Comedy", "Romance"];



  return (
<div className="bg-[#f9e3ce] py-4 w-full">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
    
    <a href="/" className="mb-4 md:mb-0">
      <img src={logo} alt="Logo" className="w-48 md:w-64 h-auto" />
    </a>
    
    <div className="hidden md:flex md:flex-col  md:space-y-0 md:space-x-8 items-center">
  <a href="/" className="text-green-700 text-lg hover:text-yellow-500">Home</a>
</div>

  </div>
</div>

  )
}

export default Heading
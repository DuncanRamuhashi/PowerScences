import React, { useState } from 'react'
import logo from './assets/logog.jpg'
import ere from './assets/ere.png'

const Heading = () => {
    const genres = ["Horror", "Action", "Comedy", "Romance"];



  return (
    <div className="bg-[#f9e3ce] py-4 w-full">
    <div className="container mx-auto flex items-center justify-between px-6">
      
      <a href="/Home">
        <img src={logo} alt="Logo" className="w-64 h-40" />
      </a>

      
      <div className="flex space-x-8 items-center">
        <a href="/Home" className="text-green-700 text-lg hover:text-yellow-500">Home</a>
         <a href="/genre">
         <div className="flex items-center space-x-2">
            
            <a  className="text-green-700 text-lg hover:text-yellow-500">Genre</a>
            <img src={ere} alt="Icon" className="w-4 h-6" />
          </div>
         </a>
        
      </div>
    </div>
  </div>
  )
}

export default Heading
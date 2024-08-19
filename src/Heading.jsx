import React from 'react'
import logo from './assets/logog.jpg'
import ere from './assets/ere.png'
const Heading = () => {
  return (
    <div className="bg-[#f9e3ce] py-4 w-full">
    <div className="container mx-auto flex items-center justify-between px-6">
      
      <a href="/">
        <img src={logo} alt="Logo" className="w-32 h-16" />
      </a>

      
      <div className="flex space-x-8 items-center">
        <a href="/" className="text-green-700 text-lg hover:text-yellow-500">Home</a>

        <div className="flex items-center space-x-2">
          <a href="/genre" className="text-green-700 text-lg hover:text-yellow-500">Genre</a>
          <img src={ere} alt="Icon" className="w-3 h-6" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Heading
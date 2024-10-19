import React from 'react';
import logo from './assets/logo3.png';
import { Link } from 'react-router-dom';

const Heading = () => {
  return (
    <div className="bg-[#f9e3ce] py-4 w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Logo Section */}
        <Link to="/" className="mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="w-48 md:w-64 h-auto" />
        </Link>

        {/* Navigation Links */}
        <nav className=" gap-5 space-x-0 flex flex-row md:flex-row items-center">
          <Link to="/" className="text-lg font-semibold text-green-700 hover:text-yellow-500">Home</Link>
          <Link to="/MoviePage" className="text-lg font-semibold text-green-700 hover:text-yellow-500">Movies</Link>
          <Link to="/SeriesPage" className="text-lg font-semibold text-green-700 hover:text-yellow-500">Series</Link>
          <Link to="/About" className="text-lg font-semibold text-green-700 hover:text-yellow-500">About</Link>
        </nav>
      </div>
    </div>
  );
};

export default Heading;

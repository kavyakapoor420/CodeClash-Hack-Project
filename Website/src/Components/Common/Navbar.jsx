// src/Components/Common/Navbar.jsx

import React, { useState } from 'react';
// Ensure all components and assets are properly imported and used
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const redirectToAiAgent = () => {
    window.location.href = "http://localhost:8501";
  };

  return (
    <nav className="bg-gray-200 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo + Brand */}
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-2"
              src="https://res.cloudinary.com/dc1wyerpt/image/upload/v1746509060/cloud_trfa4x.png"
              alt="betterweb_icon"
            />
            <span className="text-2xl font-bold text-blue-600">BetterWeb</span>
          </div>

          {/* Center: Nav Links (desktop) */}
          <div className="hidden md:flex space-x-6">
            <Link to='/aboutus' className="text-blue-600 hover:text-blue-800 font-medium">
              About Us
            </Link>
            <Link to='/features' className="text-blue-600 hover:text-blue-800 font-medium">
              Features
            </Link>
            <Link to='/premium' className="text-blue-600 hover:text-blue-800 font-medium">
              Premium
            </Link>
          </div>

          {/* Right: BetterAI Button (desktop) */}
          <div className="hidden md:flex space-x-4">
            <button
              onClick={redirectToAiAgent}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              BetterAI
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-blue-600 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow">
          <Link to='/aboutus' className="block text-blue-600 hover:text-blue-800 font-medium">
            About Us
          </Link>
          <Link to='/features' className="block text-blue-600 hover:text-blue-800 font-medium">
            Features
          </Link>
          <Link to='/premium' className="block text-blue-600 hover:text-blue-800 font-medium">
            Premium
          </Link>
          <button
            onClick={redirectToAiAgent}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            BetterAI
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// src/Components/Common/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Logo + description */}
        <div>
          <div className="flex items-center mb-4">
            <div className="text-blue-600 mr-2">
              {/* Replace with your logo if needed */}
              <img 
              className='w-10 h-10 rounded-full'
              src="https://res.cloudinary.com/dc1wyerpt/image/upload/v1746509060/cloud_trfa4x.png" alt="betterweb_icon" />
            </div>
            <span className="text-2xl font-bold text-blue-600">BetterWeb</span>
          </div>
          <p className="text-gray-600">
            BetterWeb is dedicated to making the internet accessible for everyone. We provide tools and resources to help disabled users navigate the web with ease.
          </p>
        </div>

        {/* Center: Quick links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-gray-600 hover:text-blue-600">About Us</a>
            </li>
            <li>
              <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            </li>
            <li>
              <a href="#premium" className="text-gray-600 hover:text-blue-600">Premium</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Right: Newsletter signup */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-4">Subscribe to our newsletter</h3>
          <p className="text-gray-600 mb-4">
          Get the latest updates and news directly to your inbox.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-200 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} BetterWeb. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

// src/Pages/Premium.jsx

import React from 'react';
import { motion } from 'framer-motion';

const Premium = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">
          Choose the Plan That’s Right for You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Free Plan Card */}
          <motion.div
            className="bg-white border border-blue-200 shadow-lg rounded-lg p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Free Plan</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> Basic Accessibility Features
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> Limited Profile Setup
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✘</span> Text-to-Speech (TTS) Feature
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> Advanced Accessibility Controls
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> AI Agent & Live Talking Bot (JARVIS)
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> ChatBot Assistant
              </li>
              <li className="flex items-center">
                <span className="text-red-500 mr-2">✘</span> Customizable Theming
              </li>
            </ul>
            <button className="mt-6 w-full py-2 px-4 border border-blue-600 text-blue-600 rounded hover:bg-blue-100 transition-colors">
              Get Started (Free)
            </button>
          </motion.div>

          {/* Paid Plan Card */}
          <motion.div
            className="bg-blue-600 text-white border border-blue-200 shadow-lg rounded-lg p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Paid Plan</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> All Accessibility Features
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> Complete Profile Setup
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> Text-to-Speech (TTS) Feature
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> Advanced Accessibility Controls
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> AI Agent & Live Talking Bot (JARVIS)
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✘</span> ChatBot Assistant
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span> Customizable Theming
              </li>
            </ul>
            <button className="mt-6 w-full py-2 px-4 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors">
              Get Started (Paid)
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Premium;

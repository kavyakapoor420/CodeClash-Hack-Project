// src/Components/Common/HeroSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaBlind, FaBookReader, FaUserAlt, FaHandsHelping, FaUniversalAccess, FaLowVision, FaWheelchair, FaGlobe } from 'react-icons/fa';

const features = [
  { icon: <FaBlind className="text-4xl text-blue-600" />, label: 'Blindness' },
  { icon: <FaBookReader className="text-4xl text-blue-600" />, label: 'Dyslexia' },
  { icon: <FaUserAlt className="text-4xl text-blue-600" />, label: 'Seniors' },
  { icon: <FaHandsHelping className="text-4xl text-blue-600" />, label: 'Unlettered' },
  { icon: <FaUniversalAccess className="text-4xl text-blue-600" />, label: 'Situational' },
  { icon: <FaLowVision className="text-4xl text-blue-600" />, label: 'Low vision' },
  { icon: <FaWheelchair className="text-4xl text-blue-600" />, label: 'Mobility' },
  { icon: <FaGlobe className="text-4xl text-blue-600" />, label: 'Everyone' },
];

const HeroSection = () => {
  return (
    <>
      <section className="relative bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-900 bg-opacity-90"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center max-w-2xl px-6 mt-20 mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Making the Web Accessible to Everyone
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 drop-shadow-md">
            BetterWeb's{' '}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="font-semibold bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text"
            >
              Chrome extension
            </motion.span>{' '}
            empowers disabled users to browse with ease, offering tools like text adjustments, screen readers, and simplified navigation — because the internet should belong to everyone.
          </p>
          <a
            href="http://localhost:3080/download/BetterWeb_Lite"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition-shadow shadow-lg hover:shadow-xl"
          >
            Install BetterWeb Lite
          </a>
          <a
            href="http://localhost:3080/download/BetterWeb"
            className="inline-flex items-center ml-4 px-6 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition-shadow shadow-lg hover:shadow-xl"
          >
            Install BetterWeb
          </a>
        </motion.div>
      </section>

      <section className="relative bg-white py-12">
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            We cater to a wide range of accessibility needs
          </h2>
          <p className="text-blue-700 text-lg max-w-xl mx-auto">
            Our tools are designed to support users facing various challenges, ensuring an inclusive and barrier-free web experience.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center bg-blue-50 p-4 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              {feature.icon}
              <p className="mt-2 text-blue-900 font-semibold">{feature.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroSection;

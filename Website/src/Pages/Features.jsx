// src/Pages/Features.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    title: 'ACCESSIBILITY PROFILE SETUP',
    description:
      'Upon installation, users can walk through a 3-step setup form to indicate specific disabilities or preferences (e.g., visual impairments, ADHD, dyslexia).',
  },
  {
    title: 'CHECKBOX-BASED ACCESSIBILITY CONTROLS',
    description:
      'Preferences are saved and synced locally, and corresponding changes can be applied to websites.',
  },
  {
    title: 'AI AGENT  & LIVE TALKING BOT (JARVIS)',
    description:
      'Just sit back and order your work and look how it’s done for you without touching keyboard and mouse',
  },
  {
    title: 'Motion Sensitivity',
    description:
      'Hands-free control via head movement tracking and voice commands. It is designed to support users who cannot use a keyboard or mouse. Used to move the cursor or select elements .',
  },
  {
    title: 'Manual vs. Auto Mode',
    description:
      'Lets users automatically apply their preferences to web pages or switch to manual mode for full control over when and how changes are made.',
  },
  {
    title: 'Chatbot Assistant',
    description:
      'Users can interact with it using natural language to understand features, request help, or even perform visual changes.',
  },
  {
    title: 'TEXT-TO-SPEECH (TTS)',
    description:
      'Users can highlight text and use the right-click menu to activate a speak function that reads the content aloud.',
  },
  {
    title: 'THEMING SYSTEM',
    description:
      'Users can choose from soft-toned themes like pink, lavender, mint, peach, and sky, designed to reduce overstimulation and improve comfort for those on the autism spectrum.',
  },
];

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-16 mt-20">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
        Our Features
      </h2>

      {/* Vertical timeline line — shifted below heading */}
      <div className="absolute top-36 left-1/2 transform -translate-x-1/2 h-[calc(100%-9rem)] w-1 bg-blue-300"></div>

      <div className="space-y-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            {/* Dot on the timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow"></div>

            {/* Card */}
            <div
              className={`w-full md:w-5/12 p-6 bg-white rounded-lg shadow-lg ${
                index % 2 === 0 ? 'mr-auto ml-12' : 'ml-auto mr-12'
              }`}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

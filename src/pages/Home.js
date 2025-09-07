import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white px-4"
      style={{
        backgroundImage: `url('/beach-hero.jpeg')`, // Replace with your new image
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Find Your Perfect Spot
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto drop-shadow-md">
          Reserve beaches, parking spots, and event venues instantly. Real-time availability, instant booking.
        </p>
      </motion.div>

      <div className="bg-white bg-opacity-90 rounded-lg p-6 w-full max-w-2xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Location / Beach"
            className="px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            className="px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Venue"
            className="px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={() => navigate('/reserve')}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;

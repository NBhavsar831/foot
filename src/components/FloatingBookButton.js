import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FloatingBookButton = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        to="/book-appointment"
        className="bg-primary hover:bg-secondary text-white p-4 rounded-full shadow-lg flex items-center space-x-2 transition-colors"
      >
        <FaCalendarAlt className="w-5 h-5" />
        <span className="hidden sm:inline font-medium">Book Now</span>
      </Link>
    </motion.div>
  );
};

export default FloatingBookButton;
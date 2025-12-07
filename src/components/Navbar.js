import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();



  const scrollToTestimonials = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const testimonialsSection = document.getElementById('testimonials');
        if (testimonialsSection) {
          testimonialsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const testimonialsSection = document.getElementById('testimonials');
      if (testimonialsSection) {
        testimonialsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToAbout = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToFAQ = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const faqSection = document.getElementById('faq');
        if (faqSection) {
          faqSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToContact = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:shadow-xl transition-all duration-300">
              <img 
                src="/logo.jpeg" 
                alt="Feet First Wellness Clinic Logo" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                Feet First
              </span>
              <p className="text-sm text-gray-600 -mt-1">Foot Care & Wellness</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <button
              onClick={scrollToTop}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative ${
                location.pathname === '/'
                  ? 'text-primary bg-primary/10'
                  : 'text-gray-700 hover:text-primary hover:bg-primary/5'
              }`}
            >
              Home
            </button>
            <button
              onClick={scrollToTestimonials}
              className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-300"
            >
              Services
            </button>
            <button
              onClick={scrollToAbout}
              className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-300"
            >
              About
            </button>
            <button
              onClick={scrollToFAQ}
              className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-300"
            >
              FAQ
            </button>
            <button
              onClick={scrollToContact}
              className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-300"
            >
              Contact
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:403-903-4293"
              className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors duration-300 px-3 py-2 rounded-xl hover:bg-primary/5"
            >
              <FaPhone className="w-4 h-4" />
              <span className="text-sm font-medium">403-903-4293</span>
            </a>
            <Link
              to="/book-appointment"
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-700 hover:text-primary hover:bg-primary/5 focus:outline-none transition-all duration-300"
            >
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
            >
              <div className="px-4 py-6 space-y-3">
                <button
                  onClick={() => {
                    scrollToTop();
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    location.pathname === '/'
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    scrollToTestimonials();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    scrollToAbout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    scrollToFAQ();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                >
                  FAQ
                </button>
                <button
                  onClick={() => {
                    scrollToContact();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                >
                  Contact
                </button>
                <div className="pt-4 space-y-3 border-t border-gray-100">
                  <a
                    href="tel:403-903-4293"
                    className="flex items-center justify-center space-x-2 text-primary hover:text-secondary transition-colors duration-300 px-4 py-3 rounded-xl hover:bg-primary/5"
                  >
                    <FaPhone className="w-4 h-4" />
                    <span className="font-medium">403-903-4293</span>
                  </a>
                  <Link
                    to="/book-appointment"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
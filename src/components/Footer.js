import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-text text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">FF</span>
              </div>
              <span className="text-xl font-semibold">Feet First Foot Care & Wellness Clinic</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional foot care and wellness services in Calgary, Alberta. 
              Providing compassionate care for healthy feet and happy lives.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaPhone className="w-4 h-4 text-primary" />
                <a href="tel:403-903-4293" className="hover:text-primary transition-colors">
                  403-903-4293
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="w-4 h-4 text-primary" />
                <a href="mailto:simakukadiya@gmail.com" className="hover:text-primary transition-colors">
                  simakukadiya@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                <span>Calgary, Alberta, Canada</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Diabetic Foot Care</li>
              <li>Nail Care & Trimming</li>
              <li>Corn/Callus Removal</li>
              <li>Fungal Nail Treatment</li>
              <li>Wound Assessment</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Feet First Foot Care & Wellness Clinic. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
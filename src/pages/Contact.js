import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center p-8"
        >
          <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-text mb-4">
            Message Sent Successfully!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for contacting us. We will get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-secondary transition-colors"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Get in touch with Feet First Foot Care & Wellness Clinic
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-text mb-8">Get In Touch</h2>
                
                {/* Contact Cards */}
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="bg-accent rounded-lg p-6 flex items-start space-x-4">
                    <div className="bg-primary text-white p-3 rounded-full">
                      <FaPhone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text mb-2">Phone</h3>
                      <a href="tel:403-903-4293" className="text-primary font-medium hover:text-secondary transition-colors">
                        403-903-4293
                      </a>
                      <p className="text-gray-600 text-sm mt-1">Call us during business hours</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-accent rounded-lg p-6 flex items-start space-x-4">
                    <div className="bg-primary text-white p-3 rounded-full">
                      <FaEnvelope className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text mb-2">Email</h3>
                      <a href="mailto:info@feetfirstcalgary.com" className="text-primary font-medium hover:text-secondary transition-colors">
                        info@feetfirstcalgary.com
                      </a>
                      <p className="text-gray-600 text-sm mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="bg-accent rounded-lg p-6 flex items-start space-x-4">
                    <div className="bg-primary text-white p-3 rounded-full">
                      <FaMapMarkerAlt className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text mb-2">Location</h3>
                      <p className="text-gray-600">
                        Calgary, Alberta<br />
                        Canada
                      </p>
                      <p className="text-gray-600 text-sm mt-1">Serving the Calgary area</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="bg-accent rounded-lg p-6 flex items-start space-x-4">
                    <div className="bg-primary text-white p-3 rounded-full">
                      <FaClock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text mb-2">Business Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-text mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-secondary transition-colors">
                      <FaFacebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-secondary transition-colors">
                      <FaInstagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-text mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="(403) 123-4567"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="appointment">Appointment Inquiry</option>
                      <option value="services">Services Information</option>
                      <option value="insurance">Insurance Questions</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Please share your questions or comments..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors flex items-center justify-center space-x-2"
                  >
                    <FaPaperPlane className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">
              Located in Calgary, Alberta - Serving the greater Calgary area
            </p>
          </div>
          
          {/* Google Maps Embed */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321260.2516495283!2d-114.37641284999999!3d51.027374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sus!4v1635789012345!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Feet First Foot Care Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
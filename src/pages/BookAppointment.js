import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaPhone, FaEnvelope, FaUser, FaClock, FaCheckCircle } from 'react-icons/fa';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Diabetic Foot Assessment',
    'Toenail Cutting & Trimming',
    'Corn/Callus Removal & Debridement',
    'Peripheral Circulation & Sensation Assessment',
    'Peripheral Neuropathy Assessment',
    'Fungal Nail Care',
    'Athlete\'s Foot Treatment',
    'Dry Skin & Fissure Treatment',
    'Ingrown Toenail Care',
    'Patient Education',
    'Hard Nail Cutting & Trimming',
    'Wound Assessment & Referral',
    'Foot Hygiene & Education',
    'Footwear Recommendations',
    'Moisturizer + Foot Massage'
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
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
            Appointment Request Submitted!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your appointment request. We will contact you within 24 hours to confirm your appointment.
          </p>
          <div className="space-y-2 text-gray-600">
            <p>For immediate assistance, please call:</p>
            <a href="tel:403-903-4293" className="text-primary font-semibold text-xl">
              403-903-4293
            </a>
          </div>
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
            Book Your Appointment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Schedule your visit with Sima Kukadiya for professional foot care services
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Options */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-text mb-6">Contact Options</h2>
              
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-accent rounded-lg p-6 mb-6"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <FaPhone className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold text-text">Call Us</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Speak directly with our team to schedule your appointment
                </p>
                <a
                  href="tel:403-903-4293"
                  className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-secondary transition-colors inline-block"
                >
                  403-903-4293
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-accent rounded-lg p-6 mb-6"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <FaEnvelope className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold text-text">Email Us</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Send us your questions or appointment requests
                </p>
                <a
                  href="mailto:info@feetfirstcalgary.com"
                  className="text-primary font-medium hover:text-secondary transition-colors"
                >
                  info@feetfirstcalgary.com
                </a>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-accent rounded-lg p-6"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <FaClock className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold text-text">Clinic Hours</h3>
                </div>
                <div className="space-y-1 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </motion.div>
            </div>

            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-text mb-6">Request an Appointment</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
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
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">
                        Preferred Time *
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Please share any specific concerns or questions..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors flex items-center justify-center space-x-2"
                  >
                    <FaCalendarAlt className="w-5 h-5" />
                    <span>Submit Appointment Request</span>
                  </button>
                </form>

                <div className="mt-6 p-4 bg-accent rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> This is an appointment request. We will contact you within 24 hours to confirm your appointment time. For urgent matters, please call us directly at 403-903-4293.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChevronDown, 
  FaChevronUp, 
  FaCertificate, 
  FaMapMarkerAlt, 
  FaCreditCard, 
  FaPhone, 
  FaEnvelope, 
  FaUserMd, 
  FaCalendarAlt, 
  FaShieldAlt,
  FaQuestionCircle
} from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Are you certified?",
      answer: "Yes. Sima is a Licensed Practical Nurse and a Certified Advanced Foot Care Nurse.",
      icon: <FaCertificate className="w-5 h-5" />
    },
    {
      question: "Where are you located?",
      answer: "We are a mobile service. We come to your home or care facility at no additional cost.",
      icon: <FaMapMarkerAlt className="w-5 h-5" />
    },
    {
      question: "Which areas do you serve?",
      answer: "We provide care in Southwest and Southeast Calgary, as well as surrounding areas including Okotoks. We visit private homes, assisted living, and long-term care facilities.",
      icon: <FaMapMarkerAlt className="w-5 h-5" />
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, cheque, or e-transfer.",
      icon: <FaCreditCard className="w-5 h-5" />
    },
    {
      question: "How do I book an appointment?",
      answer: "You can contact Sima at 403-903-4293 or email simakukadiya@gmail.com.",
      icon: <FaPhone className="w-5 h-5" />
    },
    {
      question: "Do I need a referral from my family physician?",
      answer: "No, a referral is not required. You can book directly with us.",
      icon: <FaUserMd className="w-5 h-5" />
    },
    {
      question: "Do you offer regular maintenance schedules?",
      answer: "Yes. We recommend ongoing foot care every 6–8 weeks for best results. Regular appointments help ensure consistent care and early prevention.",
      icon: <FaCalendarAlt className="w-5 h-5" />
    },
    {
      question: "Are your services safe for diabetics?",
      answer: "Absolutely. We specialize in diabetic foot care with advanced training in prevention and management. We follow strict sterile protocols to ensure safety for all clients, especially those with diabetes.",
      icon: <FaShieldAlt className="w-5 h-5" />
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-white to-accent/30">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center shadow-lg">
                <FaQuestionCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our professional foot care services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-primary">
                      {faq.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="text-primary">
                    {openIndex === index ? (
                      <FaChevronUp className="w-5 h-5" />
                    ) : (
                      <FaChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-16">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                        {/* Special contact info for booking question */}
                        {index === 4 && (
                          <div className="mt-4 flex flex-col sm:flex-row gap-3">
                            <a
                              href="tel:403-903-4293"
                              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-200"
                            >
                              <FaPhone className="w-4 h-4 mr-2" />
                              Call Now
                            </a>
                            <a
                              href="mailto:simakukadiya@gmail.com"
                              className="inline-flex items-center px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200"
                            >
                              <FaEnvelope className="w-4 h-4 mr-2" />
                              Send Email
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We're here to help! Contact us directly for personalized answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:403-903-4293"
                className="bg-white text-primary px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
              >
                <FaPhone className="w-5 h-5 mr-2" />
                Call 403-903-4293
              </a>
              <a
                href="mailto:simakukadiya@gmail.com"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
              >
                <FaEnvelope className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
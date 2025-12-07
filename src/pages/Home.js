import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { trackPageLoad, trackUserInteraction } from '../utils/performance';
import { services } from '../data/servicesData';
import { testimonials } from '../data/testimonialsData';
// import LoadingSpinner from '../components/common/LoadingSpinner';
// import ErrorBoundary from '../components/common/ErrorBoundary';
import { 
  FaPhone, 
  FaCalendarAlt, 
  FaUserMd, 
  FaHeart, 
  FaShieldAlt, 
  FaStar, 
  FaArrowRight, 
  FaCheckCircle, 
  FaQuoteLeft, 
  FaAward, 
  FaArrowDown, 
  FaCertificate, 
  FaGraduationCap, 
  FaMapMarkerAlt, 
  FaCreditCard, 
  FaEnvelope, 
  FaHome, 
  FaBuilding, 
  FaLeaf, 
  FaMountain, 
  FaRoad,
  FaHandHoldingMedical,
  FaCut,
  FaBug,
  FaWater,
  FaRunning, 
  FaClock,
  FaHandsWash,
  FaCog,
  FaBrain,
  FaHeartbeat,
  FaExclamationTriangle,
  FaTimes,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

// AnimatedCounter component
const AnimatedCounter = ({ end, duration = 2.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * parseInt(end)));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{end.includes('+') ? '+' : end.includes('%') ? '%' : ''}</span>;
};

// ServicePopup component
const ServicePopup = ({ service, isOpen, onClose }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
            >
              <FaTimes className="w-5 h-5 text-gray-600" />
            </button>

            {/* Service Content */}
            <div className="text-center mb-8">
              {/* Service Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                className="mb-6"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center text-white mx-auto shadow-lg">
                  {React.cloneElement(service.icon, { className: "w-12 h-12" })}
                </div>
              </motion.div>

              {/* Service Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                {service.title}
              </motion.h2>

              {/* Service Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg text-gray-600 leading-relaxed mb-8"
              >
                {service.description}
              </motion.p>
            </div>

            {/* Service Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-2xl"
                  >
                    <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-center space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/book-appointment"
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
                  onClick={onClose}
                >
                  <FaCalendarAlt className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-2xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                  onClick={onClose}
                >
                  Learn More
                  <FaArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Professional care delivered to your location with no additional travel fees
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// TestimonialCard component
const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.15,
      type: "spring"
    }}
    viewport={{ once: true }}
    whileHover={{ 
      y: -5,
      transition: { duration: 0.3 }
    }}
    className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
  >
    {/* Quote Icon */}
    <div className="absolute top-6 right-6 text-primary/10">
      <FaQuoteLeft className="w-8 h-8" />
    </div>
    
    {/* Patient Info */}
    <div className="flex items-center mb-6">
      <div className="text-3xl mr-4">{testimonial.image}</div>
      <div>
        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </div>
    
    {/* Rating */}
    <motion.div 
      className="flex mb-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      viewport={{ once: true }}
    >
      {[...Array(testimonial.rating)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + i * 0.1 }}
          viewport={{ once: true }}
        >
          <FaStar className="w-5 h-5 text-yellow-400" />
        </motion.div>
      ))}
    </motion.div>
    
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      viewport={{ once: true }}
      className="text-gray-700 leading-relaxed italic"
    >
      "{testimonial.text}"
    </motion.p>
  </motion.div>
);

// TestimonialCarousel component
const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = testimonials.length - 3; // Maximum starting index to show 3 cards

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= maxIndex) {
          return 0; // Reset to beginning when reaching the end
        }
        return prevIndex + 1;
      });
    }, 4000); // Auto-slide every 4 seconds

    return () => clearInterval(interval);
  }, [maxIndex]);



  return (
    <div className="relative overflow-hidden">
      <motion.div 
        className="flex transition-transform duration-1000 ease-in-out"
        animate={{
          x: `${-currentIndex * (100 / 3)}%`
        }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-full md:w-1/3 px-4"
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <TestimonialCard testimonial={testimonial} index={index} />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Carousel Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index <= maxIndex ? index : 0)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// FAQAccordion component
const FAQAccordion = () => {
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
    <div className="space-y-4">
      {faqData.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
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
  );
};

// Services data moved to separate file
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedService, setSelectedService] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -30]);

  // Memoized data - must be called before any early returns
  const memoizedServices = useMemo(() => services, []);
  const memoizedTestimonials = useMemo(() => testimonials, []);

  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleServiceClick = useCallback((service) => {
    setSelectedService(service);
    setIsPopupOpen(true);
    trackUserInteraction('service_card_click', { service: service.title });
  }, []);

  const handleClosePopup = useCallback(() => {
    setIsPopupOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  }, []);

  useEffect(() => {
    // Initialize performance tracking
    trackPageLoad();
    
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Loading component
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
        <div className="text-center text-white">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-white border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-xl font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  // Error component
  // if (error) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-red-50">
  //       <div className="text-center text-red-600 max-w-md mx-auto p-8">
  //         <FaExclamationTriangle className="w-16 h-16 mx-auto mb-4" />
  //         <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
  //         <p className="mb-6">{error.message || 'An unexpected error occurred'}</p>
  //         <button 
  //           onClick={() => window.location.reload()}
  //           className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
  //         >
  //           Reload Page
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  // Testimonials data moved to separate file

  const stats = [
    { number: "500+", label: "Satisfied Patients", icon: <FaHeart className="w-5 h-5" /> },
    { number: "5+", label: "Years of Excellence", icon: <FaAward className="w-5 h-5" /> },
    { number: "15+", label: "Specialized Services", icon: <FaUserMd className="w-5 h-5" /> },
    { number: "100%", label: "Patient Satisfaction", icon: <FaStar className="w-5 h-5" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // AnimatedCounter component is now defined outside Home component

  return (
    <div className="overflow-hidden">
      {/* Service Popup */}
      <ServicePopup 
        service={selectedService} 
        isOpen={isPopupOpen} 
        onClose={handleClosePopup} 
      />
      


      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary text-white py-24 min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/IMG_2745.jpeg" 
            alt="Foot care background" 
            className="w-full h-full object-cover opacity-75"
          />
        </div>

        <motion.div style={{ y: y1 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight"
            >
              <span className="block mb-2">Happy Feet,</span>
              <span className="block bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                Happy Life
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Quality foot care in the comfort at your home
            </motion.p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">

              

            </div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <motion.div variants={itemVariants}>
                <Link
                  to="/book-appointment"
                  className="group bg-white text-primary px-10 py-4 rounded-full font-semibold hover:bg-yellow-50 transition-all duration-300 inline-flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <FaCalendarAlt className="w-5 h-5" />
                  <span>Book Appointment</span>
                  <motion.div
                    className="w-0 group-hover:w-5 transition-all duration-300 overflow-hidden"
                  >
                    <FaArrowRight className="w-4 h-4" />
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <motion.a
                  href="tel:403-903-4293"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white/80 text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center space-x-3 backdrop-blur-sm"
                >
                  <FaPhone className="w-5 h-5" />
                  <span>403-903-4293</span>
                </motion.a>
              </motion.div>
            </motion.div>


          </div>
        </motion.div>
      </section>

      {/* Professional Stats Section */}
      <motion.section 
        style={{ y: y2 }}
        className="py-20 bg-white relative border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-3 text-primary">
                  {stat.icon}
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                >
                  <AnimatedCounter end={stat.number} />
                </motion.div>
                <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Mobile Service Section - NEW */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 tracking-wide"
            >
              MOBILE CARE SERVICE
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Professional Care in Your Home
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the convenience and comfort of professional foot care in your own home. 
              We bring our expertise directly to you at no extra cost.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mobile Service Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <FaHeart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Comfort & Convenience</h3>
                  <p className="text-gray-600">Receive professional care in the familiar comfort of your own home, eliminating travel stress and waiting rooms.</p>
                </div>
              </div>



              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <FaUserMd className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Specialized Care</h3>
                  <p className="text-gray-600">Expert care for seniors, diabetic patients, and those with dementia or mobility challenges in a familiar environment.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No Extra Cost</h3>
                  <p className="text-gray-600">Mobile service comes at no additional charge. We serve Calgary and surrounding areas including personal homes and care facilities.</p>
                </div>
              </div>
            </motion.div>

            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Coverage</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Calgary & Okotoks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Personal Homes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Care Facilities & Retirement Homes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Long-term Care Facilities</span>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-3">Payment Options</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Electronic Transfer (eTransfer)</div>
                  <div>• Cash Payment</div>
                  <div>• Cheque</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Professional Testimonials */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A little line about what's being said and who's saying it.
            </p>
          </motion.div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Advanced Foot Care */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 mr-3">
                  <FaUserMd className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900">Advanced Foot Care</h3>
              </div>
              <p className="text-gray-700 mb-2">
                Advanced foot care and diabetic assessment ensure healthy nail, skin, circulation while preventing complications
              </p>
            </motion.div>

            {/* Corn And Callus Removal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 mr-3">
                  <FaHandHoldingMedical className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Corn And Callus Removal</h3>
                  <p className="text-sm text-gray-500">Neat Founder</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                Corn and callus removal gently reduces thickened skin to relieve pressure, pain, and improve comfort while walking.
              </p>
            </motion.div>

            {/* Ingrown/Overgrown Toenail Removal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-500 mr-3">
                  <FaCut className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900">Ingrown/Overgrown Toenail Removal</h3>
              </div>
              <p className="text-gray-700 mb-2">
                Ingrown and overgrown nail treatment provides safe trimming and relief to reduce pain, prevent infection, and restore nail comfort
              </p>
            </motion.div>

            {/* Cut And Trim Toe Nails */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500 mr-3">
                  <FaCut className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Cut And Trim Toe Nails</h3>
                  <p className="text-sm text-gray-500">Nascar Marketing</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                Cut and trim nail service offers safe, professional toenail cutting to maintain comfort, prevent complications, and support healthy feet.
              </p>
            </motion.div>

            {/* Fungal Nail */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-3">
                  <FaBug className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Fungal Nail</h3>
                  <p className="text-sm text-gray-500">Head of Growth</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                Fungal nail treatment focuses on assessing, reducing, and managing fungal infections to improve nail health and prevent recurrence.
              </p>
            </motion.div>

            {/* Diabetic Foot Assessment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-3">
                  <FaUserMd className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Diabetic Foot Assessment</h3>
                  <p className="text-sm text-gray-500">Emergent Products</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                Diabetic foot care assessment checks circulation, sensation, skin, and nails to prevent complications and protect long-term foot health
              </p>
            </motion.div>

            {/* Patient Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 mr-3">
                  <FaGraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900">Patient Education</h3>
              </div>
              <p className="text-gray-700 mb-2">
                Proper guidance on daily foot care, preventive practices, and self-monitoring to maintain long-term foot health and prevent complications.
              </p>
            </motion.div>

            {/* Dry Skin And Fissure Treatment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 mr-3">
                  <FaWater className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900">Dry Skin And Fissure Treatment</h3>
              </div>
              <p className="text-gray-700 mb-2">
                Dry skin and fissure treatment soothes, moisturizes, and repairs cracked skin to prevent pain and promote healthy feet
              </p>
            </motion.div>

            {/* Athlete's Foot Treatment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 mr-3">
                  <FaRunning className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900">Athlete's Foot Treatment</h3>
              </div>
              <p className="text-gray-700 mb-2">
                Athlete's foot treatment involves assessing, treating, and preventing fungal infections to restore healthy skin and prevent recurrence
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us / Meet the Specialist Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Professional Image & Credentials */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl flex items-center justify-center">
                  <div className="text-8xl text-primary/30">
                    <FaUserMd />
                  </div>
                </div>
                
                {/* Floating Credential Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white">
                      <FaCertificate className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Certified</p>
                      <p className="text-xs text-gray-600">Foot Care Specialist</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white">
                      <FaHeart className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">10+ Years</p>
                      <p className="text-xs text-gray-600">Experience</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 tracking-wide"
                >
                  MEET YOUR SPECIALIST
                </motion.span>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                  Compassionate Care with
                  <span className="block text-primary">Professional Excellence</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg"
                >
                  My name is Sima Kukadiya, and I am a dedicated Foot Care Nurse with over 15 years of 
                  nursing experience. Throughout my career, I have had the privilege of caring for individuals 
                  in a variety of clinical settings, which has strengthened my commitment to compassionate, 
                  client and family centered care. Over the years, I developed a deep passion for foot health, 
                  recognizing how essential healthy, comfortable feet are for mobility, independence, and 
                  overall quality of life. I also observed a growing need for proper foot care among seniors, 
                  where timely, professional care can greatly improve comfort, independence, and long-term 
                  wellness.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  As a Foot Care Nurse, I combine my extensive nursing background with specialized foot care 
                  training to provide safe, gentle, and evidence-based treatment. I take great pride in creating 
                  a welcoming, supportive, and non-judgmental environment where clients feel comfortable 
                  and confident receiving care. My approach focuses not only on addressing current concerns, 
                  but also on education, prevention, and long-term foot health management.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  I believe every client deserves individualized care, and I strive to ensure each assessment 
                  and treatment is performed with professionalism, respect, and attention to detail. Helping 
                  clients maintain healthy feet—so they can stay active, independent, and enjoy life to the 
                  fullest—is what inspires and motivates my work every day.
                </motion.p>
              </div>
              
              {/* Professional Credentials */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <FaGraduationCap className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-gray-900">Education & Training</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Registered Nurse (RN)</li>
                    <li>• Certified Foot Care Specialist</li>
                    <li>• Advanced Wound Care Training</li>
                    <li>• Diabetic Foot Care Certification</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <FaAward className="w-6 h-6 text-emerald-600" />
                    <h4 className="font-bold text-gray-900">Specializations</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Senior & Elderly Care</li>
                    <li>• Dementia Patient Care</li>
                    <li>• Diabetic Foot Management</li>
                    <li>• ONYFIX & ToeFx Treatments</li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Professional Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white border-l-4 border-primary pl-6 py-4"
              >
                <blockquote className="text-lg italic text-gray-700">
                  "Every patient deserves compassionate care that respects their dignity 
                  and individual needs. My goal is to not just treat foot conditions, 
                  but to enhance overall quality of life through professional, 
                  patient-centered care."
                </blockquote>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our professional foot care services
            </p>
          </motion.div>
          
          <FAQAccordion />
        </div>
      </section>






      
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch with Feet First Foot Care & Wellness Clinic
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-full">
                    <FaPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                    <a href="tel:403-903-4293" className="text-primary font-medium hover:text-secondary transition-colors">
                      403-903-4293
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Call us during business hours</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-full">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:simakukadiya@gmail.com" className="text-primary font-medium hover:text-secondary transition-colors">
                      simakukadiya@gmail.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-full">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Area</h3>
                    <p className="text-gray-600">
                      Calgary & Okotoks, Alberta<br />
                      Mobile Service - We Come to You
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 flex items-start space-x-4">
                  <div className="bg-primary text-white p-3 rounded-full">
                    <FaClock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 flex flex-col justify-center"
            >
              {/* Small Map */}
              <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321260.2516495283!2d-114.37641284999999!3d51.027374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sus!4v1635789012345!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Calgary Location Map"
                ></iframe>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Book?</h3>
              <p className="text-gray-600 mb-8">
                Contact us today to schedule your appointment and take the first step towards healthier, happier feet.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:403-903-4293"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <FaPhone className="w-5 h-5 mr-2" />
                  Call 403-903-4293
                </a>
                <a
                  href="mailto:simakukadiya@gmail.com"
                  className="w-full border-2 border-primary text-primary px-8 py-4 rounded-2xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center"
                >
                  <FaEnvelope className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaHeart, FaShieldAlt, FaUserMd, FaAward } from 'react-icons/fa';

const About = () => {
  const qualifications = [
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "Licensed Practical Nurse (LPN)",
      description: "Registered healthcare professional with comprehensive medical training"
    },
    {
      icon: <FaCertificate className="w-6 h-6" />,
      title: "Advanced Foot Care Nurse (AFCN)",
      description: "Specialized certification in advanced foot care and treatment"
    },
    {
      icon: <FaAward className="w-6 h-6" />,
      title: "Continuing Education",
      description: "Ongoing professional development in latest foot care techniques"
    }
  ];

  const values = [
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Comfort",
      description: "We prioritize your comfort throughout every treatment, ensuring a relaxing and pain-free experience."
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Wellness",
      description: "Our holistic approach focuses on overall foot health and wellness, not just treating symptoms."
    },
    {
      icon: <FaUserMd className="w-8 h-8" />,
      title: "Professionalism",
      description: "We maintain the highest standards of professional care with evidence-based treatment methods."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Sima Kukadiya
              </h1>
              <p className="text-xl mb-6">
                Licensed Practical Nurse & Advanced Foot Care Nurse
              </p>
              <p className="text-lg leading-relaxed">
                With years of experience in healthcare and specialized training in foot care, 
                Sima is dedicated to providing compassionate, professional care to help you 
                maintain healthy feet and improve your quality of life.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-80 h-80 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                  <FaUserMd className="w-32 h-32 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Professional Qualifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sima brings extensive training and certification to provide you with the highest quality foot care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-accent rounded-lg"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {qual.icon}
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">
                  {qual.title}
                </h3>
                <p className="text-gray-600">
                  {qual.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Feet First Foot Care & Wellness Clinic, we are committed to providing exceptional 
              foot care services that prioritize your comfort, wellness, and overall health.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 text-center shadow-md"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-text mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Experience & Expertise
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Sima has dedicated her career to helping patients achieve optimal foot health. 
                  Her expertise spans from routine foot care to specialized diabetic foot management, 
                  ensuring comprehensive care for all patients.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With a focus on patient education and preventive care, Sima empowers her patients 
                  with the knowledge and tools they need to maintain healthy feet between visits.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Her gentle approach and attention to detail have made her a trusted healthcare 
                  provider in the Calgary community, helping hundreds of patients improve their 
                  foot health and overall quality of life.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-primary bg-opacity-10 rounded-lg p-8"
            >
              <h3 className="text-2xl font-semibold text-text mb-6">
                Why Choose Feet First?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Personalized care tailored to your specific needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Evidence-based treatment approaches</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Comfortable, welcoming clinic environment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Comprehensive patient education</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Ongoing professional development and training</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Professional Foot Care?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and take the first step towards healthier, happier feet.
          </p>
          <Link
            to="/book-appointment"
            className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-accent transition-colors inline-block"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
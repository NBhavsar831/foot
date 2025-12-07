import { FaUserMd, FaHeart, FaShieldAlt, FaStar, FaCheckCircle, FaAward, FaRunning, FaCut, FaStethoscope } from 'react-icons/fa';

export const services = [
  {
    icon: <FaUserMd className="w-7 h-7" />,
    title: "Diabetic Foot Care",
    description: "Specialized care for diabetic patients with comprehensive foot assessments, wound care, and evidence-based treatment protocols.",
    features: ["Comprehensive Risk Assessment", "Diabetic Wound Care", "Foot Health Education", "Circulation Monitoring"]
  },
  {
    icon: <FaRunning className="w-7 h-7" />,
    title: "Sports Injury Treatment",
    description: "Expert treatment for athletic foot and ankle injuries with advanced rehabilitation techniques and performance optimization.",
    features: ["Injury Assessment", "Rehabilitation Programs", "Performance Analysis", "Preventive Care"]
  },
  {
    icon: <FaCut className="w-7 h-7" />,
    title: "Surgical Procedures",
    description: "Advanced surgical interventions for complex foot conditions using minimally invasive techniques and modern technology.",
    features: ["Minimally Invasive Surgery", "Bunion Correction", "Hammertoe Repair", "Post-Surgical Care"]
  },
  {
     icon: <FaStethoscope className="w-7 h-7" />,
     title: "General Podiatry",
     description: "Comprehensive foot health services including routine care, nail treatments, and preventive maintenance for optimal foot wellness.",
     features: ["Routine Foot Exams", "Nail Care Services", "Callus Treatment", "Foot Health Maintenance"]
   }
];
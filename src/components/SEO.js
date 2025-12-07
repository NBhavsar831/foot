import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, image }) => {
  const defaultTitle = "Feet First Foot Care & Wellness Clinic - Calgary, Alberta";
  const defaultDescription = "Professional foot care services in Calgary, Alberta. Diabetic foot care, nail care, corn removal, and wellness services. Licensed Practical Nurse & Advanced Foot Care Nurse.";
  const defaultKeywords = "foot care Calgary, diabetic foot care Alberta, nail care, corn removal, callus treatment, foot wellness, LPN, AFCN, foot clinic Calgary";
  const defaultImage = "/logo.png";

  return (
    <Helmet>
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Feet First Foot Care & Wellness Clinic" />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
};

export default SEO;
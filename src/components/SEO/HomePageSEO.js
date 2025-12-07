import { Helmet } from 'react-helmet-async';

const HomePageSEO = () => (
  <Helmet>
    <title>Professional Mobile Foot Care Services | Your Clinic Name</title>
    <meta name="description" content="Expert mobile foot care services for seniors, diabetics, and specialized treatments. Professional, compassionate care in the comfort of your home." />
    <meta name="keywords" content="mobile foot care, diabetic foot care, senior foot care, podiatry" />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Your Clinic Name",
        "description": "Professional mobile foot care services",
        "telephone": "403-903-4293"
      })}
    </script>
  </Helmet>
);
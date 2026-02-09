import React, { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiYoutube, FiMail, FiMapPin } from 'react-icons/fi';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Auto-rotating texts
  const rotatingTexts = [
    'Building innovative web experiences',
    'Crafting beautiful user interfaces',
    'Creating responsive web applications',
    'Designing modern digital solutions'
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = rotatingTexts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typingText.length < currentText.length) {
          setTypingText(currentText.substring(0, typingText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typingText.length > 0) {
          setTypingText(typingText.substring(0, typingText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        }
      }
    }, isDeleting ? 50 : 80);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [typingText, isDeleting, textIndex]);

  // Custom cursor tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Section detection
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your EmailJS IDs here
    const serviceId = 'service_mik4w7c';
    const templateId = 'template_qkn4ddh';
    const publicKey = 'IUgMaI57UFvt-q1Vz';

    try {
      const templateParams = {
        name: formData.name,
        from_name: formData.name,
        from_email: formData.email,
        email: formData.email,
        message: formData.message,
        to_name: 'Tulya Jain',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setFormStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.log('EmailJS Error:', error);
      setFormStatus({ type: 'error', message: 'Something went wrong. Please check your console or keys.' });
    }

    setTimeout(() => setFormStatus({ type: '', message: '' }), 5000);
  };

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express',
    'MongoDB', 'Git', 'GitHub', 'Postman', 'UI/UX', 'Figma', 'Canva'
  ];

  const projects = [
    {
      title: 'PRIME Clone',
      description: 'Responsive frontend clone with animations and modern UI featuring sleek interactions and smooth transitions.',
      image: 'https://res.cloudinary.com/dob8kltpc/image/upload/v1770461010/prime-coverpic_uvsmt9.png',
      live: 'https://prime-tulya.netlify.app',
      github: 'https://github.com/jaintulya/clone-projects/tree/master/prime',
      youtube: 'https://youtu.be/sRj0Frixa_4'
    },
    {
      title: 'AARKE Clone',
      description: 'Responsive frontend clone with animations and modern UI showcasing elegant design patterns and fluid animations.',
      image: 'https://res.cloudinary.com/dob8kltpc/image/upload/v1770461065/aarke-cover_ghgd98.png',
      live: 'https://aarke-tulya.netlify.app',
      github: 'https://github.com/jaintulya/clone-projects/tree/master/aarke',
      youtube: 'https://youtu.be/spL9vNEar_E'
    },
    {
      title: 'BEVEL Clone',
      description: 'Responsive frontend clone with animations and modern UI demonstrating advanced layout techniques and interactive elements.',
      image: 'https://res.cloudinary.com/dob8kltpc/image/upload/v1770461010/bevel-cover_hqccgt.png',
      live: 'https://bevel-tulya.netlify.app',
      github: 'https://github.com/jaintulya/clone-projects/tree/master/bevel',
      youtube: 'https://youtu.be/Kyb9361X-mA'
    }
  ];

  const certificates = [
    {
      title: 'Solution Architecture Job Simulation',
      organization: 'Forage x AWS',
      image: 'https://res.cloudinary.com/dob8kltpc/image/upload/v1770180238/aws_certificate_pages-to-jpg-0001_wsdave.jpg'
    },
    {
      title: 'Software Engineering Job Simulation',
      organization: 'Forage x Wells Fargo',
      image: 'https://res.cloudinary.com/dob8kltpc/image/upload/v1770180238/well_fargo_page-0001_tmy6tq.jpg'
    },
    {
      title: 'Software Engineering Job Simulation',
      organization: 'Forage x Walmart',
      image: 'https://res.cloudinary.com/dob8kltpc/image/upload/v1770180238/walmart_page-0001_oedx1f.jpg'
    },
    {
      title: 'Introduction to Generative AI Studio',
      organization: 'Google Cloud x Simplilearn',
      image: 'https://res.cloudinary.com/dob8kltpc/image/upload/v1770180240/introduction_to_generative_ai_studio_page-0001_xb6gpj.jpg'
    },
    {
      title: 'Front-End Engineering Job Simulation',
      organization: 'Forage x Skyscanner',
      image: 'https://res.cloudinary.com/dob8kltpc/image/upload/v1770180238/skyscanner_page-0001_xtalcr.jpg'
    },
    {
      title: 'Excel Automation using ChatGPT',
      organization: 'Microsoft x Simplilearn',
      image: 'https://res.cloudinary.com/dob8kltpc/image/upload/v1770180238/Excel_automation_using_chagpt_pages-to-jpg-0001_jc6nmq.jpg'
    }
  ];

  return (
    <div className="app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          cursor: none !important;
        }

        body {
          overflow-x: hidden;
          background: #0f0f0f;
          cursor: none !important;
        }

        .app {
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          position: relative;
          background: #0f0f0f;
          color: #ffffff;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Poppins', sans-serif;
        }

        /* Custom Cursor */
        .custom-cursor {
          position: fixed;
          width: 10px;
          height: 10px;
          background: #00ff87;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          box-shadow: 0 0 15px rgba(0, 255, 135, 0.6);
        }

        /* Scroll Progress Removed */

        /* Navbar */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 20px 80px;
          z-index: 999;
          display: flex;
          justify-content: space-between;
          align-items: center;
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(15, 15, 15, 0.8);
          transition: all 0.3s ease;
        }

        .brand {
          font-size: 24px;
          font-weight: 800;
          color: #00ff87;
          letter-spacing: -1px;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
          padding: 10px;
        }

        .hamburger span {
          display: block;
          width: 30px;
          height: 2px;
          background: #00ff87;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        .nav-content {
          display: flex;
          gap: 40px;
          align-items: center;
        }

        .nav-link {
          color: inherit;
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #00ff87;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        /* Background Glow Animation */
        .background-glow {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .glow-blob {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0, 255, 135, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
          animation: move 25s infinite alternate ease-in-out;
        }

        .glow-blob:nth-child(2) {
          background: radial-gradient(circle, rgba(96, 239, 255, 0.05) 0%, transparent 70%);
          width: 800px;
          height: 800px;
          right: -100px;
          top: -100px;
          animation-duration: 35s;
          animation-delay: -5s;
        }

        .glow-blob:nth-child(3) {
          background: radial-gradient(circle, rgba(0, 255, 135, 0.03) 0%, transparent 70%);
          bottom: -100px;
          left: 20%;
          animation-duration: 40s;
          animation-delay: -10s;
        }

        @keyframes move {
          from { transform: translate(-10%, -10%) rotate(0deg); }
          to { transform: translate(10%, 10%) rotate(360deg); }
        }

        .bg-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .bg-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(0, 255, 135, 0.2);
          border-radius: 50%;
          animation: float 20s infinite linear;
        }

        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }

        /* Hero */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 40px 80px;
          position: relative;
        }

        .hero-content {
          max-width: 1400px;
          width: 100%;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .hero-text h1 {
          font-size: 72px;
          font-weight: 800;
          margin-bottom: 20px;
          letter-spacing: -2px;
        }

        .hero-text .tagline {
          font-size: 28px;
          margin-bottom: 30px;
          font-weight: 300;
          opacity: 0.8;
        }

        .typing-text {
          font-size: 24px;
          font-weight: 600;
          color: #00ff87;
          min-height: 40px;
          margin-bottom: 50px;
        }

        .typing-text::after {
          content: '|';
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .profile-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }

        /* Profiles */
        .profile-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
          perspective: 1000px;
        }

        .profile-glow {
          position: absolute;
          inset: -10px;
          background: linear-gradient(135deg, #00ff87, #60efff);
          border-radius: 20px;
          filter: blur(10px);
          opacity: 0.2;
          transform: rotate(6deg);
          transition: all 0.5s ease;
          z-index: 0;
        }

        .profile-image-container {
          width: 400px;
          height: 480px;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(0, 255, 135, 0.2);
          background: #0f0f0f;
          transform: rotate(3deg);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }

        .profile-image-wrapper:hover .profile-glow {
          opacity: 0;
        }

        .profile-image-wrapper:hover .profile-image-container {
          transform: rotate(1deg) scale(1.02) translateY(-10px);
          border-color: rgba(0, 255, 135, 0.5);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: bottom;
          filter: grayscale(100%);
          transition: all 0.5s ease;
        }

        .profile-image-wrapper:hover .profile-image {
          filter: grayscale(0%);
          transform: scale(1.05);
        }

        .profile-image-container:hover .profile-image {
          transform: scale(1.1);
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
        }

        .btn {
          padding: 16px 40px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary {
          background: #00ff87;
          color: #0f0f0f;
          border: 2px solid #00ff87;
        }

        .btn-primary:hover {
          background: transparent;
          color: #00ff87;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 255, 135, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: #ffffff;
          border: 2px solid #ffffff;
        }

        .btn-secondary:hover {
          background: #00ff87;
          color: #0f0f0f;
          border-color: #00ff87;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 255, 135, 0.3);
        }

        /* Sections */
        section {
          padding: 100px 40px;
          position: relative;
          z-index: 1;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 56px;
          font-weight: 800;
          text-align: center;
          margin-bottom: 20px;
          letter-spacing: -2px;
        }

        .section-subtitle {
          text-align: center;
          opacity: 0.7;
          font-size: 18px;
          margin-bottom: 80px;
        }

        /* About */
        .about-content {
          max-width: 900px;
          margin: 0 auto;
          padding: 60px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          transition: all 0.5s ease;
          position: relative;
          overflow: hidden;
        }

        .about-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 135, 0.15), transparent);
          transition: left 0.6s ease;
          z-index: 2;
          pointer-events: none;
        }

        .about-content:hover::before {
          left: 100%;
        }

        .about-content:hover {
          border-color: rgba(0, 255, 135, 0.4);
          box-shadow: 0 20px 60px rgba(0, 255, 135, 0.1);
          transform: translateY(-5px);
        }

        .about-content p {
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 20px;
          opacity: 0.8;
        }

        /* Skills */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 20px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .skill-card {
          padding: 30px 20px;
          border-radius: 12px;
          text-align: center;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          position: relative;
          overflow: hidden;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 135, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .skill-card:hover::before {
          left: 100%;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          border-color: #00ff87;
          box-shadow: 0 10px 30px rgba(0, 255, 135, 0.2);
        }

        /* Projects */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 40px;
        }

        .project-card {
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.4s ease;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          position: relative;
        }

        .project-card::before, .certificate-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 135, 0.15), transparent);
          transition: left 0.6s ease;
          z-index: 2;
          pointer-events: none;
        }

        .project-card:hover::before, .certificate-card:hover::before {
          left: 100%;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 255, 135, 0.15);
          border-color: rgba(0, 255, 135, 0.4);
        }

        .project-image-wrapper {
          width: 100%;
          height: 280px;
          overflow: hidden;
          position: relative;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-content {
          padding: 30px;
        }

        .project-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .project-description {
          opacity: 0.7;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .project-links {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .project-link {
          padding: 12px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 1px solid rgba(0, 255, 135, 0.2);
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
          flex: 1;
          height: 46px;
          white-space: nowrap;
        }

        .project-link:hover {
          background: rgba(0, 255, 135, 0.2);
          color: #00ff87;
          border-color: #00ff87;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 255, 135, 0.2);
        }

        .project-link svg {
          font-size: 18px;
          flex-shrink: 0;
        }

        .yt-icon-only {
          flex: 1;
          min-width: auto;
        }

        /* Certificates */
        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .certificate-card {
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.4s ease;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          position: relative;
        }

        .certificate-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0, 255, 135, 0.15);
          border-color: rgba(0, 255, 135, 0.4);
        }

        .certificate-image-wrapper {
          width: 100%;
          height: 220px;
          overflow: hidden;
          position: relative;
        }

        .certificate-image-wrapper::after {
          content: 'View Certificate';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 255, 135, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-weight: 600;
          font-size: 16px;
          opacity: 0;
          transition: all 0.4s ease;
          z-index: 2;
          backdrop-filter: none;
        }

        .certificate-card:hover .certificate-image-wrapper::after {
          opacity: 1;
        }

        .certificate-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.4s ease;
        }

        .certificate-card:hover .certificate-image {
          transform: scale(1.1);
          filter: brightness(0.7);
        }

        .certificate-info {
          padding: 25px;
        }

        .certificate-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .certificate-org {
          color: #00ff87;
          font-size: 14px;
          font-weight: 500;
        }

        /* Certificate Modal */
        .certificate-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 40px;
        }

        .certificate-modal-content {
          max-width: 90%;
          max-height: 90%;
          position: relative;
        }

        .certificate-modal-image {
          max-width: 100%;
          max-height: 85vh;
          border-radius: 12px;
          border: 2px solid #00ff87;
        }

        .modal-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: #00ff87;
          color: #0f0f0f;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          transform: rotate(90deg) scale(1.1);
        }

        /* Contact */
        .contact-section {
          padding: 100px 40px;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 80px;
        }

        .contact-info h3 {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 25px;
        }

        .contact-info p {
          opacity: 0.7;
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .contact-details {
          margin-bottom: 40px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          transform: translateX(5px);
        }

        .contact-item svg {
          width: 24px;
          height: 24px;
          color: #00ff87;
        }

        .social-links {
          display: flex;
          gap: 20px;
        }

        .social-link {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid #00ff87;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link svg {
          width: 22px;
          height: 22px;
          color: #00ff87;
          transition: color 0.3s ease;
        }

        .social-link:hover {
          background: #00ff87;
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 255, 135, 0.3);
        }

        .social-link:hover svg {
          color: #0f0f0f;
        }

        /* Contact Form */
        .contact-form {
          padding: 50px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          transition: all 0.5s ease;
        }

        .contact-form:hover {
          border-color: #00ff87;
          box-shadow: 0 20px 60px rgba(0, 255, 135, 0.15);
        }

        .form-group {
          margin-bottom: 30px;
          position: relative;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 16px 20px;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #ffffff;
          font-size: 16px;
          font-family: 'Inter', sans-serif;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #00ff87;
          box-shadow: 0 0 20px rgba(0, 255, 135, 0.2);
        }

        .form-textarea {
          resize: none;
          min-height: 150px;
        }

        .form-label {
          position: absolute;
          left: 20px;
          top: 16px;
          opacity: 0.6;
          font-size: 16px;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .form-input:focus + .form-label,
        .form-input:not(:placeholder-shown) + .form-label,
        .form-textarea:focus + .form-label,
        .form-textarea:not(:placeholder-shown) + .form-label {
          top: -12px;
          left: 15px;
          font-size: 12px;
          color: #00ff87;
          background: #0f0f0f;
          padding: 0 8px;
        }

        .submit-btn {
          width: 100%;
          padding: 18px;
          background: #00ff87;
          color: #0f0f0f;
          border: 2px solid #00ff87;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background: transparent;
          color: #00ff87;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 255, 135, 0.3);
        }

        /* Toast */
        .toast {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: #00ff87;
          color: #0f0f0f;
          padding: 20px 30px;
          border-radius: 12px;
          font-weight: 600;
          z-index: 10001;
          box-shadow: 0 10px 30px rgba(0, 255, 135, 0.3);
        }

        /* Footer */
        .footer {
          padding: 40px;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          opacity: 0.6;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .hero-content,
          .contact-container {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }

          .hero-text {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .cta-buttons {
            justify-content: center;
          }

          .profile-image-wrapper {
            max-width: 400px;
          }

          .projects-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
            position: relative;
            z-index: 1001;
            margin-left: auto;
          }

          .nav-content {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            height: 100vh;
            background: rgba(15, 15, 15, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            justify-content: center;
            gap: 40px;
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1000;
          }

          .nav-content.open {
            right: 0;
            box-shadow: -20px 0 40px rgba(0, 0, 0, 0.5);
          }

          .navbar {
            padding: 15px 20px;
            justify-content: space-between;
          }

          .nav-link {
            font-size: 18px;
            font-weight: 600;
          }

          .hero {
            padding: 120px 20px 60px;
            text-align: center;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-text h1 {
            font-size: 40px;
            line-height: 1.1;
          }

          .hero-text .tagline {
            font-size: 18px;
          }

          .typing-text {
            font-size: 16px;
            margin-bottom: 30px;
          }

          .profile-image-container {
            width: 100%;
            max-width: 320px;
            height: 400px;
            margin: 0 auto;
            transform: rotate(1deg) scale(1.02) translateY(-10px);
            border-color: rgba(0, 255, 135, 0.5);
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
          }

          .profile-image {
            filter: grayscale(0%);
            transform: scale(1.05);
          }

          .profile-glow {
            opacity: 0;
          }

          .section-title {
            font-size: 32px;
          }

          .projects-grid,
          .certificates-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
            gap: 15px;
            align-items: center;
          }

          .btn {
            width: 100%;
            text-align: center;
          }

          .about-content,
          .contact-form {
            padding: 25px;
          }

          .project-links {
            flex-wrap: wrap;
            gap: 10px;
          }

          .project-link {
            font-size: 13px;
            padding: 10px 12px;
            height: auto;
            min-height: 44px;
            flex: 1 1 calc(50% - 10px);
          }

          .yt-icon-only {
            flex: 1 1 100%;
          }

          .project-content {
            padding: 20px;
          }

          .project-title {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .hero-text h1 {
            font-size: 36px;
          }

          .hero-text .tagline {
            font-size: 18px;
          }

          .typing-text {
            font-size: 16px;
          }

          .section-title {
            font-size: 32px;
          }

          .nav-link {
            font-size: 12px;
          }
        }
      `}</style>

      {/* Custom Cursor */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: cursorPosition.x - 5,
          y: cursorPosition.y - 5
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.8 }}
      />

      {/* Navbar */}
      <nav className="navbar">
        <div className="brand">TJ</div>
        <button
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-content ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)} className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
          <a href="#certificates" onClick={() => setIsMenuOpen(false)} className={`nav-link ${activeSection === 'certificates' ? 'active' : ''}`}>Certificates</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
        </div>
      </nav>

      {/* Non-interactive Background Glow & Particles */}
      <div className="background-glow">
        <div className="glow-blob"></div>
        <div className="glow-blob"></div>
        <div className="glow-blob"></div>
      </div>
      <div className="bg-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="bg-particle"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDuration: 15 + Math.random() * 20 + 's',
              animationDelay: -Math.random() * 20 + 's'
            }}
          />
        ))}
      </div>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Tulya Jain</h1>
            <p className="tagline">Creative Full Stack Web Developer</p>
            <div className="typing-text">{typingText}</div>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </motion.div>

          <motion.div
            className="profile-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="profile-glow"></div>
            <div className="profile-image-container">
              <img
                src="https://res.cloudinary.com/dob8kltpc/image/upload/f_auto,q_auto/v1770194215/IMG_49753_sw2wjs.jpg"
                alt="Tulya Jain"
                className="profile-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/500/00ff87/0f0f0f?text=Tulya+Jain';
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Passionate about creating exceptional digital experiences</p>
            <div className="about-content">
              <p>
                I'm a Computer Engineering student with a deep passion for web development and creating intuitive user experiences. My journey in tech is driven by curiosity and a commitment to continuous learning.
              </p>
              <p>
                Specializing in the MERN stack, I focus on building responsive, modern web applications that combine clean design with smooth animations. I believe in writing code that's not just functional, but elegant and maintainable.
              </p>
              <p>
                Through hands-on projects and real-world clone applications, I've developed a strong foundation in frontend development and UI/UX design. I'm constantly exploring new technologies and pushing the boundaries of what's possible on the web.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">Technologies I work with</p>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">Featured work showcasing modern web development</p>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-links">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FiExternalLink /> Live
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FiGithub /> Code
                      </a>
                      <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="project-link" title="Watch Video">
                        <FiYoutube /> Video
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Certificates</h2>
            <p className="section-subtitle">Professional certifications and achievements</p>
            <div className="certificates-grid">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certificate-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  onClick={() => setSelectedCertificate(cert)}
                >
                  <div className="certificate-image-wrapper">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="certificate-image"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x220/00ff87/0f0f0f?text=Certificate';
                      }}
                    />
                  </div>
                  <div className="certificate-info">
                    <div className="certificate-title">{cert.title}</div>
                    <div className="certificate-org">{cert.organization}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="certificate-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              className="certificate-modal-content"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedCertificate(null)}>×</button>
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="certificate-modal-image"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Let's create something amazing together</p>
            <div className="contact-container">
              <div className="contact-info">
                <h3>Let's Build Something Together</h3>
                <p>
                  I'm open to internships, collaborations, and exciting development opportunities.
                  Whether you have a project in mind or just want to connect, feel free to reach out!
                </p>
                <div className="contact-details">
                  <div className="contact-item">
                    <FiMail />
                    <span>tulya.jain.cg@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <FiMapPin />
                    <span>Ahmedabad, Gujarat, India</span>
                  </div>
                </div>
                <div className="social-links">
                  <a href="https://github.com/jaintulya" target="_blank" rel="noopener noreferrer" className="social-link">
                    <BsGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/tulya-jain-b84827372/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <BsLinkedin />
                  </a>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder=" "
                    required
                  />
                  <label className="form-label">Your Name</label>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder=" "
                    required
                  />
                  <label className="form-label">Your Email</label>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder=" "
                    required
                  />
                  <label className="form-label">Your Message</label>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Toast */}
      <AnimatePresence>
        {formStatus.message && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            {formStatus.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Tulya Jain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
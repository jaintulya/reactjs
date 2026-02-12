import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiYoutube, FiMail, FiMapPin, FiSun, FiMoon } from 'react-icons/fi';
import { BsLinkedin, BsGithub } from 'react-icons/bs';



const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);

  // Typing effect text
  const [typingText, setTypingText] = useState('');
  const fullText = 'Building modern web experiences with passion';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Custom cursor tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for section detection
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



  // Theme toggle
  const toggleTheme = () => { }; // Disabled - always dark mode

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS removed
    setFormStatus({ type: 'success', message: 'Message submitted successfully locally!' });
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setFormStatus({ type: '', message: '' }), 5000);
  };

  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Express', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Git', level: 85 },
    { name: 'GitHub', level: 85 },
    { name: 'Postman', level: 75 },
    { name: 'UI/UX', level: 80 },
    { name: 'Figma', level: 80 },
    { name: 'Canva', level: 85 }
  ];

  const projects = [
    {
      title: 'PRIME Clone',
      description: 'Responsive frontend clone with animations and modern UI featuring sleek interactions and smooth transitions.',
      image: 'https://res.cloudinary.com/dob8kltpc/image/upload/v1770461010/prime-coverpic_uvsmt9.png',
      live: 'https://prime-tulya.netlify.app',
      github: 'https://github.com/jaintulya/clone-projects/tree/master/prime',
      youtube: 'https://youtu.be/sRj0Frixa_4',
      tech: ['React', 'CSS3', 'JavaScript', 'Animations']
    },
    {
      title: 'AARKE Clone',
      description: 'Responsive frontend clone with animations and modern UI showcasing elegant design patterns and fluid animations.',
      image: 'https://res.cloudinary.com/dob8kltpc/image/upload/v1770461065/aarke-cover_ghgd98.png',
      live: 'https://aarke-tulya.netlify.app',
      github: 'https://github.com/jaintulya/clone-projects/tree/master/aarke',
      youtube: 'https://youtu.be/spL9vNEar_E',
      tech: ['React', 'Tailwind', 'JavaScript', 'Framer Motion']
    },
    {
      title: 'BEVEL Clone',
      description: 'Responsive frontend clone with animations and modern UI demonstrating advanced layout techniques and interactive elements.',
      image: 'https://res.cloudinary.com/dob8kltpc/image/upload/v1770461010/bevel-cover_hqccgt.png',
      live: 'https://bevel-tulya.netlify.app',
      github: 'https://github.com/jaintulya/clone-projects/tree/master/bevel',
      youtube: 'https://youtu.be/Kyb9361X-mA',
      tech: ['React', 'CSS3', 'JavaScript', 'GSAP']
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

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/jaintulya', icon: '⚡' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tulya-jain-b84827372/', icon: '💼' }
  ];

  return (
    <div className="app dark" style={{
      '--primary': '#64748b',
      '--secondary': '#475569',
      '--accent': '#94a3b8',
      '--bg': '#0f172a',
      '--surface': '#1e293b',
      '--text': '#f1f5f9',
      '--text-secondary': '#cbd5e1'
    }}>
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
          background: var(--bg);
          cursor: none !important;
        }

        .app {
          font-family: 'Inter', sans-serif;
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          position: relative;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .app.dark {
          background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%);
        }

        .app.light {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
        }

        /* Custom Cursor */
        .custom-cursor {
          position: fixed;
          width: 10px;
          height: 10px;
          background: var(--primary);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          box-shadow: 0 0 15px rgba(100, 116, 139, 0.6);
        }

        /* Scroll Progress Removed */

        /* Floating Navbar */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 20px 80px;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 999;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }

        .brand {
          font-size: 24px;
          font-weight: 800;
          color: var(--primary);
          letter-spacing: -1px;
        }

        .nav-link {
          color: var(--text);
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          transition: all 0.3s ease;
          position: relative;
          padding: 8px 16px;
          border-radius: 25px;
        }

        .nav-link.active {
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          color: white;
        }

        .nav-link:hover:not(.active) {
          color: var(--primary);
        }

        .theme-toggle {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          transition: transform 0.3s ease;
        }

        .theme-toggle:hover {
          transform: scale(1.1) rotate(180deg);
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
          background: radial-gradient(circle, rgba(100, 116, 139, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
          animation: move 25s infinite alternate ease-in-out;
        }

        .glow-blob:nth-child(2) {
          background: radial-gradient(circle, rgba(71, 85, 105, 0.05) 0%, transparent 70%);
          width: 800px;
          height: 800px;
          right: -100px;
          top: -100px;
          animation-duration: 35s;
          animation-delay: -5s;
        }

        .glow-blob:nth-child(3) {
          background: radial-gradient(circle, rgba(148, 163, 184, 0.03) 0%, transparent 70%);
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
          background: rgba(100, 116, 139, 0.2);
          border-radius: 50%;
          animation: float 20s infinite linear;
        }

        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 100px 20px;
        }

        .hero-content {
          max-width: 1400px;
          width: 100%;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: center;
          z-index: 1;
        }

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
          background: linear-gradient(135deg, var(--primary), var(--secondary));
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
          border: 1px solid rgba(100, 116, 139, 0.2);
          background: var(--bg);
          transform: rotate(3deg);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }

        .profile-image-wrapper:hover .profile-glow {
          opacity: 0;
        }

        .profile-image-wrapper:hover .profile-image-container {
          transform: rotate(1deg) scale(1.02) translateY(-10px);
          border-color: rgba(100, 116, 139, 0.5);
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

        .hero-text h1 {
          font-size: 72px;
          font-weight: 800;
          margin-bottom: 20px;
          letter-spacing: -2px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-text .tagline {
          font-size: 28px;
          color: var(--text-secondary);
          margin-bottom: 30px;
          font-weight: 300;
          opacity: 0.8;
        }

        .typing-text {
          font-size: 24px;
          font-weight: 600;
          color: var(--primary);
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

        /* Shimmer Effect */
        .shimmer-wrapper {
          position: relative;
          overflow: hidden;
        }

        .shimmer-wrapper::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.03),
            transparent
          );
          transform: rotate(45deg);
          transition: all 0.5s;
          opacity: 0;
          pointer-events: none;
        }

        .shimmer-wrapper:hover::after {
          animation: shimmer 1.5s infinite;
          opacity: 1;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          margin-top: 40px;
        }

        .btn {
          padding: 16px 40px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          border: 2px solid transparent;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border: none;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(99, 102, 241, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text);
          border: 2px solid var(--primary);
        }

        .btn-secondary:hover {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          transform: translateY(-3px);
        }

        /* Section Styling */
        section {
          padding: 120px 20px;
          position: relative;
          z-index: 1;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 48px;
          font-weight: 800;
          text-align: center;
          margin-bottom: 20px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-secondary);
          font-size: 18px;
          margin-bottom: 60px;
        }

        /* About Section */
        .about-content {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(100, 116, 139, 0.2);
          border-radius: 30px;
          padding: 60px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .about-content:hover {
          border-color: rgba(100, 116, 139, 0.4);
          transform: translateY(-5px);
        }

        .about-content p {
          font-size: 18px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        /* Skills Grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .skill-card {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(100, 116, 139, 0.1);
          border-radius: 20px;
          padding: 30px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .skill-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(100, 116, 139, 0.5);
        }

        .skill-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
          color: var(--text);
        }

        .skill-bar {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          border-radius: 10px;
          transition: width 1s ease;
        }

        .skill-percentage {
          text-align: right;
          color: var(--primary);
          font-size: 14px;
          font-weight: 600;
          margin-top: 8px;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 40px;
          margin-top: 40px;
        }

        .project-card {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(100, 116, 139, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
          border-color: rgba(100, 116, 139, 0.4);
        }

        .project-image {
          width: 100%;
          height: 280px;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-content {
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .project-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 15px;
          color: var(--text);
        }

        .project-description {
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .tech-stack {
          display: none;
        }

        .tech-badge {
          display: none;
        }

        .project-links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .project-link {
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 8px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          box-shadow: 0 4px 15px rgba(100, 116, 139, 0.3);
          flex: 1;
          min-width: 140px;
        }

        .project-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(100, 116, 139, 0.5);
          background: linear-gradient(135deg, var(--secondary), var(--accent));
        }

        .project-link svg {
          font-size: 16px;
        }

        /* Education Timeline */
        .education-timeline {
          position: relative;
          padding: 40px 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--primary), var(--secondary));
          transform: translateX(-50%);
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 1fr 100px 1fr;
          align-items: center;
          margin-bottom: 60px;
          position: relative;
        }

        .timeline-content {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
          transition: all 0.3s ease;
        }

        .dark .timeline-content {
          background: rgba(26, 26, 46, 0.5);
        }

        .light .timeline-content {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .timeline-content:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
        }

        .timeline-dot {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 50%;
          margin: 0 auto;
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.6);
        }

        .timeline-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--text);
        }

        .timeline-subtitle {
          color: var(--text-secondary);
          font-size: 16px;
        }

        /* Certificates Grid */
        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .certificate-card {
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(100, 116, 139, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .certificate-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          border-color: rgba(100, 116, 139, 0.4);
        }

        .certificate-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .certificate-info {
          padding: 20px;
        }

        .certificate-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
          color: var(--text);
        }

        .certificate-org {
          color: var(--primary);
          font-size: 14px;
          font-weight: 500;
        }

        /* Contact Section */
        .contact-section {
          background: rgba(255, 255, 255, 0.02);
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: start;
        }

        .contact-info h3 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 20px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-info p {
          color: var(--text-secondary);
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .contact-details {
          margin-bottom: 30px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          color: var(--text);
          font-size: 16px;
        }

        .contact-icon {
          font-size: 24px;
        }

        .social-links {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .social-link {
          padding: 12px 28px;
          border-radius: 8px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(100, 116, 139, 0.3);
        }

        .social-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(100, 116, 139, 0.5);
          background: linear-gradient(135deg, var(--secondary), var(--accent));
        }

        .social-link svg {
          font-size: 18px;
        }

        /* Contact Form */
        .contact-form {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }

        .dark .contact-form {
          background: rgba(26, 26, 46, 0.5);
        }

        .light .contact-form {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 30px;
          position: relative;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          color: var(--text);
          font-size: 16px;
          font-family: 'Inter', sans-serif;
          transition: all 0.3s ease;
        }

        .dark .form-input,
        .dark .form-textarea {
          background: rgba(255, 255, 255, 0.05);
        }

        .light .form-input,
        .light .form-textarea {
          background: rgba(0, 0, 0, 0.03);
          border-color: rgba(0, 0, 0, 0.1);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
        }

        .form-textarea {
          resize: none;
          min-height: 150px;
        }

        .form-label {
          position: absolute;
          left: 20px;
          top: 16px;
          color: var(--text-secondary);
          font-size: 16px;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .form-input:focus + .form-label,
        .form-input:not(:placeholder-shown) + .form-label,
        .form-textarea:focus + .form-label,
        .form-textarea:not(:placeholder-shown) + .form-label {
          top: -10px;
          left: 15px;
          font-size: 12px;
          color: var(--primary);
          background: var(--bg);
          padding: 0 8px;
        }

        .submit-btn {
          width: 100%;
          padding: 18px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border: none;
          border-radius: 15px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(99, 102, 241, 0.4);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        /* Toast Notification */
        .toast {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 20px 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .toast.success {
          border-left: 4px solid #10b981;
        }

        .toast.error {
          border-left: 4px solid #ef4444;
        }

        /* Footer */
        .footer {
          background: rgba(26, 26, 46, 0.5);
          padding: 40px 20px;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer p {
          color: var(--text-secondary);
          font-size: 14px;
        }

        /* Certificate Modal */
        .certificate-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 20px;
        }

        .certificate-modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90vh;
          background: var(--surface);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .certificate-modal-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .certificate-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #000;
          transition: all 0.3s ease;
          z-index: 10001;
        }

        .certificate-modal-close:hover {
          background: white;
          transform: scale(1.1);
        }

        .certificate-modal-info {
          padding: 20px;
          background: var(--surface);
        }

        .certificate-modal-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 8px;
        }

        .certificate-modal-org {
          font-size: 16px;
          color: var(--primary);
          font-weight: 500;
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
            background: rgba(15, 23, 42, 0.98);
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
          }

          .section-title {
            font-size: 32px;
          }

          .section-subtitle {
            font-size: 16px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .project-card {
            flex-direction: column;
          }

          .project-image {
            height: 220px;
          }

          .project-content {
            padding: 25px;
          }

          .project-links {
            flex-direction: column;
            gap: 10px;
          }

          .project-link {
            width: 100%;
            min-width: auto;
          }

          .cta-buttons {
            flex-direction: column;
            width: 100%;
          }

          .btn {
            width: 100%;
            text-align: center;
          }

          .about-content {
            padding: 30px 20px;
          }

          .profile-image-container {
            width: 250px;
            height: 250px;
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

      {/* Hero Section */}
      <section id="home" className="hero" ref={heroRef}>
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Tulya Jain
            </motion.h1>
            <motion.p
              className="tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Creative Full Stack Web Developer
            </motion.p>
            <motion.div
              className="typing-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {typingText}
            </motion.div>
            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="profile-image-wrapper">
              <div className="profile-glow"></div>
              <div className="profile-image-container">
                <img
                  src="https://res.cloudinary.com/dob8kltpc/image/upload/v1770194215/IMG_49753_sw2wjs.jpg"
                  alt="Tulya Jain"
                  className="profile-image"
                  onError={(e) => {
                    e.target.src = 'https://ui-avatars.com/api/?name=Tulya+Jain&size=400&background=64748b&color=fff&bold=true&font-size=0.4';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">Passionate about creating exceptional digital experiences</p>
            <div className="shimmer-wrapper about-content">
              <div className="about-text">
                <p>
                  I'm a Computer Engineering student with a deep passion for web development and creating intuitive user experiences. My journey in tech is driven by curiosity and a commitment to continuous learning.
                </p>
                <p>
                  Specializing in the MERN stack, I focus on building responsive, modern web applications that combine clean design with smooth animations. I believe in writing code that's not just functional, but elegant and maintainable.
                </p>
                <p>
                  Through hands-on projects and real-world clone applications, I've developed a strong foundation in frontend development and UI/UX design. I'm constantly exploring new technologies and pushing the boundaries of what's possible on the web.
                </p>
                <p>
                  My goal is to create digital products that make a difference, combining technical expertise with creative problem-solving to deliver exceptional user experiences.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">Tools and technologies I work with</p>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card shimmer-wrapper"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="skill-name">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Responsive frontend clones with modern UI and animations</p>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="project-card shimmer-wrapper"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="tech-stack">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FiExternalLink /> Live Demo
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FiGithub /> View Code
                      </a>
                      <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FiYoutube /> Watch Video
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* Certificates Section */}
      <section id="certificates">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle">Professional certifications and achievements</p>
            <div className="certificates-grid">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certificate-card shimmer-wrapper"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => window.open(cert.image, '_blank')}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="certificate-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x200/6366f1/ffffff?text=Certificate';
                    }}
                  />
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

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">I'd love to hear from you</p>
            <div className="contact-container">
              <motion.div
                className="contact-info"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3>Let's Build Something Together</h3>
                <p>
                  I'm open to internships, collaborations, and exciting development opportunities.
                  Whether you have a project in mind or just want to connect, feel free to reach out!
                </p>
                <div className="contact-details">
                  <div className="contact-item">
                    <FiMail className="contact-icon" />
                    <span>tulya.jain.cg@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <FiMapPin className="contact-icon" />
                    <span>Ahmedabad, Gujarat, India</span>
                  </div>
                </div>
                <div className="social-links">
                  <motion.a
                    href="https://github.com/jaintulya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BsGithub />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/tulya-jain-b84827372/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BsLinkedin />
                    <span>LinkedIn</span>
                  </motion.a>
                </div>
              </motion.div>

              <motion.form
                className="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
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
                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Toast Notification */}
      <AnimatePresence>
        {formStatus.message && (
          <motion.div
            className={`toast ${formStatus.type}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <span>{formStatus.type === 'success' ? '✅' : '❌'}</span>
            <span>{formStatus.message}</span>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 Tulya Jain. Crafted with passion and code. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
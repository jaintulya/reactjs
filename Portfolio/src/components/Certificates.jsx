import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Scan } from 'lucide-react';

const CertificateCard = ({ cert, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group perspective-1000"
        >
            <div className="relative h-64 w-full bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden transform transition-all duration-500 group-hover:rotate-x-12 group-hover:rotate-y-12 shadow-2xl group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]">

                {/* Holographic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20" />

                {/* Scanning Laser Effect */}
                <motion.div
                    className="absolute inset-x-0 h-1 bg-primary/50 blur-sm z-30 opacity-0 group-hover:opacity-100"
                    animate={{ top: ['0%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />

                {/* Image Background */}
                <img
                    src={cert.image}
                    alt={cert.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-20 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-40">
                    <div className="flex justify-between items-start">
                        <Scan className="text-primary w-6 h-6 opacity-80" />
                        <span className="text-xs font-mono text-primary/80 border border-primary/30 px-2 py-1 rounded">
                            UNK-{index + 101}
                        </span>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                            {cert.title}
                        </h3>
                        <p className="text-sm text-gray-400 font-mono mb-4">{cert.issuer}</p>

                        <a
                            href={cert.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs font-bold text-white uppercase tracking-widest hover:text-primary transition-colors"
                        >
                            Initialize Data <ExternalLink size={12} className="ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Certificates = () => {
    const certificates = [
        {
            title: "Introduction to Generative AI",
            issuer: "Google Cloud x Simplilearn",
            image: "https://res.cloudinary.com/dob8kltpc/image/upload/v1770180240/introduction_to_generative_ai_studio_page-0001_xb6gpj.jpg"
        },
        {
            title: "AWS Academy Graduate - Cloud Foundations",
            issuer: "AWS x Forage",
            image: "https://res.cloudinary.com/dob8kltpc/image/upload/v1770180238/aws_certificate_pages-to-jpg-0001_wsdave.jpg"
        },
        {
            title: "Software Engineering Job Simulation",
            issuer: "Wells Fargo x Forage",
            image: "https://res.cloudinary.com/dob8kltpc/image/upload/v1770180238/well_fargo_page-0001_tmy6tq.jpg"
        },
        {
            title: "Advanced Software Engineering Job Simulation",
            issuer: "Walmart x Forage",
            image: "https://res.cloudinary.com/dob8kltpc/image/upload/v1770180238/walmart_page-0001_oedx1f.jpg"
        },
        {
            title: "Excel Automation with ChatGPT",
            issuer: "Microsoft x Simplilearn",
            image: "https://res.cloudinary.com/dob8kltpc/image/upload/v1770180238/Excel_automation_using_chagpt_pages-to-jpg-0001_jc6nmq.jpg"
        },
        {
            title: "Front-End Engineering Job Simulation",
            issuer: "Skyscanner x Forage",
            image: "https://res.cloudinary.com/dob8kltpc/image/upload/v1770180238/skyscanner_page-0001_xtalcr.jpg"
        }
    ];

    return (
        <section id="certificates" className="py-32 bg-dark relative z-10 overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20 flex flex-col items-center text-center"
                >
                    <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
                        System Credentials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">CERTIFICATIONS</h2>
                    <div className="w-12 h-1 bg-primary rounded-full mt-4" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <CertificateCard key={index} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;

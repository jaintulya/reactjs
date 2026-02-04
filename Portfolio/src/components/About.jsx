import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="min-h-screen py-20 flex items-center relative z-10 bg-dark">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex justify-center perspective-1000"
                    >
                        <div className="relative w-80 h-96 lg:w-[400px] lg:h-[500px] group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-60 blur-lg" />
                            <div className="absolute inset-0 bg-dark rounded-2xl border border-white/10 transform rotate-3 group-hover:rotate-1 transition-transform duration-500 overflow-hidden">
                                <img
                                    src="https://res.cloudinary.com/dob8kltpc/image/upload/v1770180281/portfolioprofilepic_uahzpp.jpg"
                                    alt="Tulya Jain"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            <span className="text-white">About</span> <span className="text-primary">Me</span>
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                I am a passionate aspiring web developer currently deeply interested in <span className="text-secondary">frontend development</span> and modern web technologies. I enjoy building interactive user interfaces and learning how real-world applications are designed.
                            </p>

                            <p>
                                My journey in tech started with HTML, CSS and JavaScript, and now I actively work with <span className="text-secondary">React and MongoDB</span>. I also explore UI/UX principles using Figma to design clean interfaces before development.
                            </p>

                            <p>
                                Outside coding, I love reading books, travelling, and exploring new places. These hobbies help me stay creative and motivated. I believe in continuous learning and improving myself every day.
                            </p>
                        </div>


                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

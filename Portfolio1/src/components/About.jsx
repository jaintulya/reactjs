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
                                    src="https://res.cloudinary.com/dob8kltpc/image/upload/v1770194215/IMG_49753_sw2wjs.jpg"
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
                                I’m a <span className="text-secondary font-medium">Frontend Developer</span> focused on React and modern UI. I build responsive websites and web apps using HTML, CSS, JavaScript, React, and MongoDB. Currently improving my MERN stack skills by building real-world projects.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {[
                                    "React",
                                    "JavaScript",
                                    "HTML/CSS",
                                    "MongoDB",
                                    "Git/GitHub"
                                ].map((skill, index) => (
                                    <div key={index} className="flex items-center gap-3 group">
                                        <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                                        <span className="text-gray-300 group-hover:text-white transition-colors">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

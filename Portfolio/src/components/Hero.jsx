import React from 'react';
import { motion } from 'framer-motion';
import Background3D from './Background3D';
import HyperText from './HyperText';
import VelocityScroll from './VelocityScroll';

const Hero = () => {
    return (
        <section id="home" className="h-screen w-full flex items-center justify-center relative overflow-hidden">
            <Background3D />

            <div className="relative z-10 text-center px-6">
                <motion.h1
                    className="text-6xl md:text-9xl font-bold mb-8 relative"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 hover:text-white transition-colors cursor-default">
                        TULYA JAIN
                    </span>
                    <motion.span
                        className="absolute -inset-1 text-primary opacity-30 blur-sm select-none"
                        animate={{
                            x: [2, -2, 4, -4, 0],
                            opacity: [0.3, 0.5, 0.2, 0.4, 0.3]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "mirror"
                        }}
                    >
                        TULYA JAIN
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-12"
                >
                    Building <span className="text-secondary font-medium">modern web applications</span> with clean code and seamless interaction.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row justify-center gap-6"
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-primary/50 text-white font-bold tracking-wider hover:border-primary transition-colors"
                    >
                        <span className="absolute inset-0 w-full h-full bg-primary/20 group-hover:bg-primary/40 transition-all duration-300 transform -skew-x-12 scale-x-0 group-hover:scale-x-100 origin-left" />
                        <span className="relative z-10">VIEW WORK</span>
                    </a>

                    <a
                        href="#contact"
                        className="px-8 py-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white font-bold tracking-wider hover:bg-white/10 transition-colors"
                    >
                        CONTACT ME
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-secondary rounded-full mt-2" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Send, Mail } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-32 bg-dark relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-8">
                            LET'S WORK <br /> <span className="text-primary">TOGETHER</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                            Have an idea? Let's turn it into a futuristic reality. I am always open to discussing new projects and opportunities.
                        </p>

                        <div className="flex gap-6">
                            <a
                                href="https://github.com/jaintulya"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 group"
                            >
                                <Github size={24} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/tulya-jain-b84827372/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-secondary hover:text-dark hover:border-secondary transition-all duration-300 group"
                            >
                                <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="mailto:tulya.jain.cg@gmail.com"
                                className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300 group"
                            >
                                <Mail size={24} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl"
                    >
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="peer w-full bg-transparent border-b-2 border-gray-600 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder-transparent"
                                    placeholder="Name"
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="name"
                                    className={`absolute left-0 -top-3.5 text-sm text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary pointer-events-none`}
                                >
                                    Your Name
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="peer w-full bg-transparent border-b-2 border-gray-600 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder-transparent"
                                    placeholder="Email"
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-0 -top-3.5 text-sm text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary pointer-events-none"
                                >
                                    Your Email
                                </label>
                            </div>

                            <div className="relative">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    className="peer w-full bg-transparent border-b-2 border-gray-600 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none placeholder-transparent"
                                    placeholder="Message"
                                    onChange={handleChange}
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    className="absolute left-0 -top-3.5 text-sm text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary pointer-events-none"
                                >
                                    Your Message
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-bold tracking-widest uppercase hover:opacity-90 hover:scale-[1.02] transition-all transform shadow-lg"
                            >
                                Send Message <Send size={18} className="inline ml-2 mb-1" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

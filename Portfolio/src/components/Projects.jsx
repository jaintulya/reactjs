import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Blob = ({ hoveredProject }) => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.002;
            meshRef.current.rotation.y += 0.003;
        }
    });

    const color = hoveredProject === 0 ? "#2563eb" // Blue
        : hoveredProject === 1 ? "#7045ff" // Purple
            : hoveredProject === 2 ? "#eab308" // Yellow
                : "#333333"; // Dark Gray default

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere args={[1, 64, 64]} scale={4.5}>
                <MeshDistortMaterial
                    ref={meshRef}
                    color={color}
                    attach="material"
                    distort={0.6}
                    speed={2}
                    roughness={0.4}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

const projects = [
    {
        id: "01",
        name: "AARKE",
        category: "Clone",
        description: "Clone of Aarke Website - Premium Home Appliances Interface.",
        link: "https://aarke-tulya.netlify.app",
        original: "https://aarke.com/"
    },
    {
        id: "02",
        name: "BEVEL",
        category: "Clone",
        description: "Clone of Bevel Website - High-end Grooming Products Store.",
        link: "https://bevel-tulya.netlify.app",
        original: "https://getbevel.com/"
    },
    {
        id: "03",
        name: "PRIME",
        category: "Clone",
        description: "Clone of Prime Hydration Website - Energy Drink Brand Experience.",
        link: "https://prime-tulya.netlify.app",
        original: "https://drinkprime.com/"
    }
];

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section id="projects" className="min-h-screen bg-dark relative z-10 py-32 overflow-hidden flex flex-col items-center justify-center">

            {/* Full Screen Background Blob */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 5]} intensity={2} />
                    <Blob hoveredProject={hoveredProject} />
                </Canvas>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center w-full">

                {/* Styled Header matching Certificates */}
                <div className="mb-20 text-center">
                    <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">
                        Selected Works
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">PROJECTS</h2>
                    <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
                </div>

                <div className="space-y-16 w-full max-w-5xl">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group cursor-pointer flex flex-col items-center text-center relative"
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex items-start justify-center gap-4 mb-2 relative">
                                <span className="text-sm font-mono text-gray-500 absolute -left-8 top-4">0{index + 1}</span>
                                <h3 className="text-[10vw] leading-none font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-300">
                                    {project.name}
                                </h3>
                            </div>
                            <p className="text-gray-300 text-xl font-light max-w-2xl mx-auto group-hover:text-primary transition-colors duration-300">
                                {project.description}
                            </p>

                            <div className="flex gap-6 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                <a href={project.link} target="_blank" className="px-6 py-2 bg-white text-black font-bold rounded-full flex items-center hover:bg-gray-200 transition-colors">
                                    VIEW CLONE <ArrowUpRight size={18} className="ml-2" />
                                </a>
                                <a href={project.original} target="_blank" className="px-6 py-2 border border-white/20 text-white font-bold rounded-full flex items-center hover:bg-white/10 transition-colors">
                                    ORIGINAL <ArrowUpRight size={18} className="ml-2" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

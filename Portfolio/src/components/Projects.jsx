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
        tech: ["HTML", "CSS", "JavaScript", "GSAP"],
        description: "Clone of Aarke Website - Premium Home Appliances Interface.",
        live: "https://aarke-tulya.netlify.app",
        github: "https://github.com/jaintulya/clone-projects/tree/master/aarke"
    },
    {
        id: "02",
        name: "BEVEL",
        category: "Clone",
        tech: ["HTML", "CSS", "JavaScript", "Locomotive Scroll"],
        description: "Clone of Bevel Website - High-end Grooming Products Store.",
        live: "https://bevel-tulya.netlify.app",
        github: "https://github.com/jaintulya/clone-projects/tree/master/bevel"
    },
    {
        id: "03",
        name: "PRIME",
        category: "Clone",
        tech: ["HTML", "CSS", "JavaScript", "ScrollTrigger"],
        description: "Clone of Prime Hydration Website - Energy Drink Brand Experience.",
        live: "https://prime-tulya.netlify.app",
        github: "https://github.com/jaintulya/clone-projects/tree/master/prime"
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

                <div className="mb-20 text-center">
                    <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">
                        Selected Works
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">PROJECTS</h2>
                    <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 flex flex-col"
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-sm font-mono text-gray-500 mb-4 block">0{index + 1}</span>

                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                {project.name}
                            </h3>

                            <p className="text-gray-400 font-light mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-white/5 rounded text-gray-400">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-3 bg-white text-black text-center font-bold rounded-xl text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                                >
                                    LIVE DEMO <ArrowUpRight size={16} />
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-3 border border-white/20 text-white text-center font-bold rounded-xl text-sm hover:bg-white/10 transition-colors"
                                >
                                    GITHUB
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

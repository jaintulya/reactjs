import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, TrackballControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const Word = ({ children, position, color }) => {
    const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };
    const ref = useRef();
    const [hovered, setHovered] = useState(false);

    useFrame(({ camera }) => {
        // Make text face the camera
        ref.current.quaternion.copy(camera.quaternion);
        // Animate hover
        ref.current.material.color.lerp(new THREE.Color(hovered ? '#00f0ff' : color), 0.1);
    });

    return (
        <Text
            ref={ref}
            {...fontProps}
            position={position}
            color={color}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            {children}
        </Text>
    );
};

const Cloud = ({ radius = 20 }) => {
    const skills = [
        "HTML", "CSS", "JavaScript", "React", "Tailwind", "Git", "GitHub", "Figma",
        "UI/UX", "MongoDB", "Node.js", "Redux"
    ];

    // Create a spherical distribution of points
    const words = useMemo(() => {
        const temp = [];
        const phi = Math.PI * (3 - Math.sqrt(5));
        for (let i = 0; i < skills.length; i++) {
            const y = 1 - (i / (skills.length - 1)) * 2;
            const radiusAtY = Math.sqrt(1 - y * y);
            const theta = phi * i;
            const x = Math.cos(theta) * radiusAtY;
            const z = Math.sin(theta) * radiusAtY;
            temp.push([new THREE.Vector3(x * radius, y * radius, z * radius), skills[i]]);
        }
        return temp;
    }, [radius, skills]);

    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.001;
            groupRef.current.rotation.x += 0.001;
        }
    });

    return (
        <group ref={groupRef}>
            {words.map(([pos, word], index) => (
                <Word key={index} position={pos} color="#ffffff">
                    {word}
                </Word>
            ))}
        </group>
    );
};

const Skills = () => {
    const skillGroups = [
        {
            title: "Frontend",
            skills: ["HTML", "CSS", "JavaScript", "React"]
        },
        {
            title: "Backend & DB",
            skills: ["Node.js", "MongoDB"]
        },
        {
            title: "Tools & Design",
            skills: ["Git", "GitHub", "Figma ui/ux"]
        }
    ];

    return (
        <section id="skills" className="min-h-screen py-32 bg-dark relative flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute top-20 text-center z-10">
                <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/20">
                    MY ARSENAL
                </h2>
                <p className="text-primary mt-2 uppercase tracking-widest">Interactive Skill Sphere</p>
            </div>

            <div className="w-full h-[60vh] cursor-move relative z-0">
                <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
                    <fog attach="fog" args={['#030014', 0, 80]} />
                    <group rotation={[10, 10, 10]}>
                        <Cloud radius={20} />
                    </group>
                    <TrackballControls noZoom rotateSpeed={2} />
                </Canvas>
            </div>

            {/* Static Skills List */}
            <div className="container mx-auto px-6 mt-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {skillGroups.map((group, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/50 transition-colors group"
                        >
                            <h3 className="text-primary font-mono text-sm tracking-widest uppercase mb-4">{group.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1 text-sm bg-white/5 rounded-md text-gray-300 group-hover:text-white transition-colors border border-white/5"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

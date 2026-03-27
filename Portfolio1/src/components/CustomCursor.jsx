import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: "rgba(112, 69, 255, 0.5)",
            mixBlendMode: "screen",
        },
        text: {
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            height: 150,
            width: 150,
            backgroundColor: "rgb(255, 255, 255)",
            mixBlendMode: "difference",
        }
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 bg-primary w-8 h-8 rounded-full pointer-events-none z-[9999] blur-md"
                variants={variants}
                animate={cursorVariant}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28
                }}
            />
            <div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    transform: 'translate(-50%, -50%)'
                }}
            />
        </>
    );
};

export default CustomCursor;

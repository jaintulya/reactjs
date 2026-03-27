import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function HyperText({ text, className }) {
    const [displayText, setDisplayText] = useState(text.split(""));
    const [trigger, setTrigger] = useState(false);
    const interations = useRef(0);
    const isFirstRender = useRef(true);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });

    useEffect(() => {
        let interval = null;
        if (isInView && (isFirstRender.current || trigger)) {
            isFirstRender.current = false;
            interval = setInterval(() => {
                if (!displayText) return;
                setDisplayText((t) =>
                    t.map((l, i) => {
                        if (l === " ") return l;
                        if (i < interations.current) {
                            return text[i];
                        }
                        return alphabets[Math.floor(Math.random() * alphabets.length)];
                    })
                );
                if (interations.current >= text.length) {
                    clearInterval(interval);
                    interations.current = 0;
                    setTrigger(false);
                }
                interations.current += 0.1;
            }, 50);
        }
        return () => clearInterval(interval);
    }, [text, isInView, trigger, displayText]);

    return (
        <span
            ref={containerRef}
            className={`font-mono overflow-hidden inline-flex ${className}`}
            onMouseEnter={() => setTrigger(true)}
        >
            {displayText.map((letter, i) => (
                <motion.span key={i} className="inline-block" layoutId={`letter-${i}`}>
                    {letter.toUpperCase()}
                </motion.span>
            ))}
        </span>
    );
}

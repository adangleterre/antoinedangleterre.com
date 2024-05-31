"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface reavealProps {
    children: JSX.Element,
    style?: string
}

function RevealContent({ children, style }: reavealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className={style}
        >
            {children}
        </motion.div>
    );
}

export default RevealContent
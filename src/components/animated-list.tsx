"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedListProps {
    children: ReactNode;
    className?: string;
}

export function AnimatedList({ children, className }: AnimatedListProps) {
    return (
        <motion.div 
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {}
            }}
        >
            {children}
        </motion.div>
    );
}

export function AnimatedListItem({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: -10, filter: "blur(4px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" }
            }}
            transition={{ duration: 0.4 }}
        >
            {children}
        </motion.div>
    );
}

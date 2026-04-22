"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface FeatureCardTextProps {
    title: string;
    body: string;
    haIcon: boolean;
}

export function FeatureCardText({ title, body, haIcon }: FeatureCardTextProps) {
    return (
        <motion.div 
            className={cn("flex flex-col gap-2", haIcon && "mt-auto")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {}
            }}
        >
            <motion.h3 
                className="font-mono text-xl font-semibold text-background tracking-tighter leading-snug"
                variants={{
                    hidden: { opacity: 0, y: -10, filter: "blur(4px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.4 }}
            >
                {title}
            </motion.h3>
            <motion.p 
                className="font-sans text-base text-background/60 leading-relaxed"
                variants={{
                    hidden: { opacity: 0, y: -10, filter: "blur(4px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.4 }}
            >
                {body}
            </motion.p>
        </motion.div>
    );
}

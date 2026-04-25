"use client";

import { motion } from "motion/react";

interface WorkCardTextProps {
    title: string;
    body: string;
}

export function WorkCardText({ title, body }: WorkCardTextProps) {
    return (
        <motion.div 
            className="flex flex-col gap-2.5 mt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {}
            }}
        >
            <motion.h3 
                className="font-sans text-lg lg:text-xl font-semibold text-foreground leading-snug"
                variants={{
                    hidden: { opacity: 0, y: -10, filter: "blur(4px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.4 }}
            >
                {title}
            </motion.h3>
            <motion.p 
                className="font-sans text-base lg:text-lg text-foreground/50 leading-relaxed"
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

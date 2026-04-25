"use client";

import { motion } from "motion/react";
import { CircleCheck } from "lucide-react";

interface AnimatedPlanCardContentProps {
    title: string;
    subtitle: string;
    features: string[];
    featured?: boolean;
}

export function AnimatedPlanCardContent({ title, subtitle, features, featured }: AnimatedPlanCardContentProps) {
    const itemVariants = {
        hidden: { opacity: 0, y: -10, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" }
    };

    return (
        <motion.div 
            className="flex flex-col gap-4 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {}
            }}
        >
            <motion.div variants={itemVariants} transition={{ duration: 0.4 }}>
                <h3 className={`font-sans text-lg lg:text-xl font-semibold leading-snug mb-2 ${featured ? 'text-background' : 'text-foreground'}`}>
                    {title}
                </h3>
                <p className={`font-sans text-sm lg:text-base ${featured ? 'font-medium text-background/70' : 'text-foreground/50'} leading-relaxed`}>
                    {subtitle}
                </p>
            </motion.div>
            
            <motion.ul 
                className="flex flex-col gap-4 lg:gap-6 mt-4 lg:mt-8"
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                    hidden: {}
                }}
            >
                {features.map((f) => (
                    <motion.li 
                        key={f} 
                        variants={itemVariants}
                        transition={{ duration: 0.4 }}
                        className={`flex items-start gap-2 lg:gap-4 text-sm lg:text-base ${featured ? 'text-background' : 'text-foreground/70'}`}
                    >
                        <CircleCheck className={`w-3.5 h-3.5 lg:w-4 lg:h-4 shrink-0 mt-1 ${featured ? '' : 'text-foreground/40'}`} strokeWidth={1.5} />
                        <span className="font-sans">{f}</span>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    );
}

"use client";

import { motion, Variants } from "motion/react";
import Container from "./container";
import Heading from "./heading";

// ── Data — swap name/logo when assets are ready ────────────
const companies = [
    { name: "Google" },
    { name: "Hippocratic AI" },
    { name: "Primer" },
    { name: "Stripe" },
    { name: "Meta" },
    { name: "Attention" },
    { name: "Replicate" },
    { name: "Microsoft" },
];

// ── Animation variants ─────────────────────────────────────
const cellVariants: Variants = {
    hidden: { opacity: 0 },
    show: (i: number) => ({
        opacity: 1,
        transition: { duration: 0.4, delay: i * 0.06, ease: "easeOut" },
    }),
};

// ── Component ──────────────────────────────────────────────
export default function TrustedBy() {
    return (
        <section className="w-full bg-background py-12 md:py-20">
            <Container>
                {/* Top label row */}

                <Heading className="font-sans text-center py-4 md:py-8">
                    <span className="text-muted-foreground">Trusted by</span> Startups
                </Heading>

                {/* Grid — 4×2 with bordered cells */}
                <div className="grid grid-cols-2 md:grid-cols-4 border-b border-x border-foreground/10">
                    {companies.map((company, i) => (
                        <motion.div
                            key={company.name}
                            custom={i}
                            variants={cellVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-40px" }}
                            className={[
                                "group flex flex-col items-center justify-center gap-3 px-6 py-10 h-[120px]",
                                "border-t border-r border-foreground/10",
                                /* Remove right border on last in each row */
                                (i + 1) % 4 === 0 ? "md:border-r-0" : "",
                                (i + 1) % 2 === 0 ? "border-r-0 md:border-r border-foreground/10" : "",
                            ].join(" ")}
                        >
                            {/* Logo slot — replace div with <Image> when assets are ready */}
                            <div className="flex flex-col lg:flex-row items-center gap-2.5">
                                <div className="w-4 h-4 rounded-full bg-foreground/20 shrink-0 group-hover:bg-foreground/50 transition-colors duration-300" />
                                <span className="font-mono tracking-wide text-foreground/80 group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                                    {company.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
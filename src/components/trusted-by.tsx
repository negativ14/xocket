"use client";

import Image from "next/image";
import { motion, Variants } from "motion/react";
import Container from "./container";
import Heading from "./heading";

// ── Data — swap name/logo when assets are ready ────────────
const companies = [
    { name: "Google", logo: "/icons/google.webp" },
    { name: "Hippocratic AI", logo: "/icons/hippocratic.webp" },
    { name: "Primer", logo: "/icons/primer.png" },
    { name: "Stripe", logo: "/icons/stripe.png" },
    { name: "Meta", logo: "/icons/meta.png" },
    { name: "Attention", logo: "/icons/attention.webp" },
    { name: "Replicate", logo: "/icons/replicate.png" },
    { name: "Microsoft", logo: "/icons/microsoft.png" },
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
                                {company.logo ? (
                                    <Image
                                        src={company.logo}
                                        alt={`${company.name} logo`}
                                        width={24}
                                        height={24}
                                        className="h-6 w-6 object-contain shrink-0 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                                    />
                                ) : (
                                    <div className="w-6 h-6 rounded-full bg-foreground/20 shrink-0 group-hover:bg-foreground/50 transition-colors duration-300" />
                                )}
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
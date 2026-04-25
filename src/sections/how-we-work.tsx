"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Container from "@/components/container";
import howWeWork1 from "@/assets/images/how-we-work.jpg";
import howWeWork2 from "@/assets/images/how-we-work-2.jpg";
import Eyebrow from "@/components/eyebrow";
import Heading from "@/components/heading";

// ── Types ─────────────────────────────────────────────────
interface Step {
    index: string;
    title: string;
    body: string;
    image: StaticImageData;
}

// ── Data ──────────────────────────────────────────────────
const steps: Step[] = [
    {
        index: "01",
        title: "Discovery & Product Definition",
        body: "We align on product goals, user needs, and technical direction to create a clear execution plan.",
        image: howWeWork1,
    },
    {
        index: "02",
        title: "UX & System Architecture",
        body: "Design and system structure are developed in parallel, ensuring alignment from the start.",
        image: howWeWork2,
    },
    {
        index: "03",
        title: "Build & Iterate in Sprints",
        body: "We execute in focused cycles, continuously testing, refining, and improving.",
        image: howWeWork1,
    },
    {
        index: "04",
        title: "Launch, Measure, Improve",
        body: "We ship with confidence, monitor performance, and evolve the product over time.",
        image: howWeWork2,
    },
];

// ── Main Section ──────────────────────────────────────────
export default function HowWeWork() {
    const [active, setActive] = useState(0);

    // Auto-advance every 3s; clicking a step resets the timer
    const goTo = useCallback((i: number) => setActive(i), []);

    useEffect(() => {
        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % steps.length);
        }, 3000);
        return () => clearInterval(id);
    }, [active]); // restart interval whenever active changes (including manual clicks)

    return (
        <section className="w-full bg-background py-20 lg:py-28">
            <Container>
                {/* Header */}
                <div className="flex flex-col gap-5 mb-8">
                    <Eyebrow>How We Work</Eyebrow>
                    <Heading variant="big" className="font-normal tracking-tight max-w-[560px]">
                        <span className="text-foreground/40">A System Built for </span>
                        <span className="italic">Structured Execution</span>
                    </Heading>
                </div>

                {/* Body — step list + image, both locked to same fixed height */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_520px] gap-0">

                    {/* Left — step list */}
                    <div className="flex flex-col border-t border-foreground/10 lg:h-[560px]">
                        {steps.map((step, i) => {
                            const isActive = i === active;
                            return (
                                <button
                                    key={step.index}
                                    onClick={() => goTo(i)}
                                    className={[
                                        "group w-full text-left flex-1 border-b border-foreground/10 transition-colors duration-200",
                                        isActive ? "bg-foreground/4" : "hover:bg-foreground/2",
                                    ].join(" ")}
                                >
                                    <div className="flex items-center gap-5 px-6 py-0 h-full lg:pr-16 relative">
                                        {/* Step number */}
                                        <span className={`font-mono tracking-widest shrink-0 w-6 select-none transition-colors duration-200 ${isActive ? "text-foreground" : "text-foreground/40"}`}>
                                            {step.index}
                                        </span>
                                        {/* Content — body always visible, active = full brightness */}
                                        <div className="flex flex-col gap-2 w-full justify-center h-full">
                                            <h3 className={`font-mono text-base tracking-tight transition-colors duration-200 ${isActive ? "text-foreground" : "text-foreground/40 group-hover:text-foreground/60"}`}>
                                                {step.title}
                                            </h3>
                                            <p className={`font-mono text-sm leading-relaxed transition-colors duration-300 ${isActive ? "text-foreground/70" : "text-foreground/25"}`}>
                                                {step.body}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right — image panel, same fixed height as left column */}
                    <div className="hidden lg:block relative overflow-hidden border-l border-foreground/10 lg:h-[560px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={steps[active].image}
                                    alt={steps[active].title}
                                    fill
                                    className="object-cover object-center grayscale brightness-75"
                                />
                                {/* Halftone overlay */}
                                <div
                                    className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-40"
                                    style={{
                                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)",
                                        backgroundSize: "4px 4px",
                                    }}
                                    aria-hidden="true"
                                />
                                {/* Left fade */}
                                <div
                                    className="absolute inset-y-0 left-0 w-16 pointer-events-none"
                                    style={{ background: "linear-gradient(to right, var(--background) 0%, transparent 100%)" }}
                                    aria-hidden="true"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </Container>
        </section>
    );
}
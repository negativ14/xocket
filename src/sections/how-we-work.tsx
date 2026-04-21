"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Container from "@/components/container";
import howWeWork1 from "@/assets/images/how-we-work.jpg";
import howWeWork2 from "@/assets/images/how-we-work-2.jpg";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";
import Eyebrow from "@/components/eyebrow";

// ── Types ─────────────────────────────────────────────────
interface Step {
    title: string;
    body: string;
    image: StaticImageData;
}

// ── Data ──────────────────────────────────────────────────
const steps: Step[] = [
    {
        title: "Discovery & Product Definition",
        body: "We align on product goals, user needs, and technical direction to create a clear execution plan.",
        image: howWeWork1,
    },
    {
        title: "UX & System Architecture",
        body: "Design and system structure are developed in parallel, ensuring alignment from the start.",
        image: howWeWork2,
    },
    {
        title: "Build & Iterate in Sprints",
        body: "We execute in focused cycles, continuously testing, refining, and improving.",
        image: howWeWork1,
    },
    {
        title: "Launch, Measure, Improve",
        body: "We ship with confidence, monitor performance, and evolve the product over time.",
        image: howWeWork2,
    },
];

// ── Reusable Step Card (info strip) ───────────────────────
function StepCard({ step }: { step: Step }) {
    return (
        <div className="flex flex-col gap-2 pt-4 border-b border-foreground pb-6">
            <h3 className="font-sans text-xl font-semibold text-foreground">
                {step.title}
            </h3>
            <p className="font-sans  text-foreground/60 leading-relaxed">
                {step.body}
            </p>
        </div>
    );
}

// ── Main Section ──────────────────────────────────────────
export default function HowWeWork() {
    const [active, setActive] = useState(0);

    const prev = () => setActive((i) => Math.max(0, i - 1));
    const next = () => setActive((i) => Math.min(steps.length - 1, i + 1));

    const current = steps[active];

    return (
        <section className="w-full bg-background min-h-screen">
            <Container className="min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

                    {/* ── Left: Content ── */}
                    <div className="flex flex-col py-16 lg:py-20">
                        {/* Tag */}
                        <Eyebrow className="mb-10">
                            How We Work
                        </Eyebrow>
                        {/* Heading — static */}
                        <Heading variant="big" className="text-foreground mb-6">
                            <span className="text-foreground/40">A System Built for </span>
                            <span className="text-foreground italic">Structured</span>
                            <br />
                            <span className="text-foreground italic">Execution</span>
                        </Heading>

                        {/* Subtext — static */}
                        <SubHeading variant="big" className="font-sans text-foreground/80 max-w-[680px]">
                            A structured approach to building products where design, engineering, and
                            scalability are considered from day one.
                        </SubHeading>

                        {/* Spacer */}
                        <div className="flex-1" />

                        {/* Navigation buttons */}
                        <div className="flex items-center gap-4 mb-8">
                            <button
                                onClick={prev}
                                disabled={active === 0}
                                aria-label="Previous step"
                                className="w-12 h-12 flex items-center justify-center border border-foreground text-foreground hover:border-foreground transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                <ArrowLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={next}
                                disabled={active === steps.length - 1}
                                aria-label="Next step"
                                className="w-12 h-12 flex items-center justify-center border border-foreground text-foreground hover:border-foreground transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Current step card info */}
                        <StepCard step={current} />
                    </div>

                    {/* ── Right: Image — fixed 632 × 742 ── */}
                    <div className="flex items-center justify-center lg:justify-end py-12 lg:py-0">
                        <div className="relative w-[632px] h-[742px] max-w-full overflow-hidden shrink-0">
                            {steps.map((step, i) => (
                                <div
                                    key={step.title}
                                    className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
                                >
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        width={632}
                                        height={742}
                                        className="w-[632px] h-[742px] object-cover object-center grayscale brightness-80"
                                        priority={i === 0}
                                    />
                                    {/* Halftone overlay */}
                                    <div
                                        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-50"
                                        style={{
                                            backgroundImage:
                                                "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)",
                                            backgroundSize: "4px 4px",
                                        }}
                                        aria-hidden="true"
                                    />
                                    {/* Left-edge gradient */}
                                    <div
                                        className="absolute inset-y-0 left-0 w-16 pointer-events-none"
                                        style={{
                                            background: "linear-gradient(to right, var(--background) 0%, transparent 100%)",
                                        }}
                                        aria-hidden="true"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
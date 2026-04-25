"use client";

import { ElementType } from "react";
import {
    Clock,
    PenLine,
    Rocket,
    TriangleAlert,
    Shield,
    ShieldCheck,
    RefreshCw,
    X,
    Check,
} from "lucide-react";
import Container from "@/components/container";
import Layers from "@/assets/icons/layers";
import Heading from "@/components/heading";
import LogoIcon from "@/assets/images/logo-icon.svg";
import Image from "next/image";
import Eyebrow from "@/components/eyebrow";
import { AnimatedList, AnimatedListItem } from "@/components/animated-list";

// ── Types ──────────────────────────────────────────────────
interface ComparisonRow {
    typicalIcon: ElementType;
    typicalText: string;
    ourIcon: ElementType;
    ourText: string;
}

interface StatItem {
    value: string;
    label: string;
}

// ── Data ───────────────────────────────────────────────────
const rows: ComparisonRow[] = [
    {
        typicalIcon: Clock,
        typicalText: "Chasing speed with random AI tools",
        ourIcon: Clock,
        ourText: "AI-accelerated, engineering-first execution",
    },
    {
        typicalIcon: PenLine,
        typicalText: "Design and development happen in silos",
        ourIcon: PenLine,
        ourText: "Design and engineering run in parallel",
    },
    {
        typicalIcon: Rocket,
        typicalText: "Built for quick launch",
        ourIcon: Layers,
        ourText: "Built for long-term scale",
    },
    {
        typicalIcon: TriangleAlert,
        typicalText: "Technical debt accumulates early",
        ourIcon: ShieldCheck,
        ourText: "Clean, structured systems from day one",
    },
    {
        typicalIcon: Shield,
        typicalText: "Compliance handled later (or ignored)",
        ourIcon: ShieldCheck,
        ourText: "Compliance considered from the start",
    },
    {
        typicalIcon: Clock,
        typicalText: "Slower iteration over time",
        ourIcon: RefreshCw,
        ourText: "Faster iteration with stability",
    },
];

const stats: StatItem[] = [
    { value: "50%", label: "Faster Product Delivery" },
    { value: "30%", label: "More Capital-Efficient" },
];

// ── Stat block ─────────────────────────────────────────────
function Stat({ value, label }: StatItem) {
    return (
        <div className="flex flex-col items-center gap-1.5">
            <span className="font-mono text-2xl md:text-3xl lg:text-4xl font-medium text-foreground">{value}</span>
            <span className="font-sans text-center  text-sm md:text-base lg:text-lg text-foreground/60">{label}</span>
        </div>
    );
}

// ── Main Section ───────────────────────────────────────────
export default function Comparison() {
    return (
        <section className="w-full bg-background py-20 lg:py-28">
            <Container>
                {/* ── Header ── */}
                <div className="flex flex-col gap-8 mb-14">
                    <Eyebrow>We vs Others</Eyebrow>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-end">
                        <Heading variant="big" className="text-neutral-400 lg:text-[48px]">
                            <span className="text-neutral-400">Move </span>
                            <span className="font-heading text-foreground italic">Faster </span>
                            Without Breaking
                            <br />
                            Your{" "}
                            <span className="font-heading text-foreground italic">Product</span>
                        </Heading>

                        <p className="font-sans text-lg text-foreground/80 leading-relaxed lg:pt-2 max-w-[480px]">
                            Most teams optimize for speed and pay for it later. We optimize for speed
                            and structure from the start.
                        </p>
                    </div>
                </div>

                {/* ── Comparison Table ── */}
                <div className="mb-16">
                    {/* Column headers */}
                    <div className="hidden md:grid md:grid-cols-2 mb-3 px-1">
                        {/* Typical header */}
                        <div className="flex items-center gap-2 px-4">
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-foreground/10">
                                <X className="w-3 h-3 text-foreground/40" strokeWidth={2.5} />
                            </span>
                            <span className="font-mono text-lg text-foreground/80 tracking-wider uppercase">
                                Typical Approach
                            </span>
                        </div>

                        {/* Ours header */}
                        <div className="flex items-center gap-2 px-4">
                            <Image
                                src={LogoIcon}
                                alt="logo"
                                className="w-5 h-5"
                                style={{ width: "auto", height: "20px" }}
                            />
                            <span className="font-mono text-lg text-foreground tracking-wider uppercase">
                                Our Approach
                            </span>
                        </div>
                    </div>

                    {/* Rows — relative wrapper holds the gradient center divider */}
                    <div className="relative">
                        {/* Gradient center divider — hidden on mobile, visible from md */}
                        <div
                            aria-hidden
                            className="pointer-events-none hidden md:block absolute inset-y-0 left-1/2 -translate-x-px w-px bg-foreground/20"
                            style={{
                                maskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
                                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
                            }}
                        />
                        {/* Floating VS pill — hidden on mobile */}
                        <div
                            aria-hidden
                            className="pointer-events-none hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                        >
                            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-background border border-foreground/12 font-mono text-[10px] tracking-widest text-foreground select-none">
                                vs
                            </span>
                        </div>
                        <AnimatedList className="flex flex-col divide-y divide-foreground/8">
                        {rows.map((row, i) => {
                            const TypicalIcon = row.typicalIcon;
                            return (
                                <AnimatedListItem key={i}>
                                    <div className="flex flex-col md:grid md:grid-cols-2 group">
                                        {/* Typical cell */}
                                        <div className="flex items-center gap-3 px-4 py-4 md:py-5 md:pr-8 border-b border-foreground/8 md:border-b-0">
                                            {/* Mobile label */}
                                            <span className="md:hidden inline-flex items-center justify-center w-5 h-5 rounded-full bg-foreground/10 shrink-0">
                                                <X className="w-3 h-3 text-foreground/40" strokeWidth={2.5} />
                                            </span>
                                            <TypicalIcon
                                                className="hidden md:block w-4 h-4 shrink-0 text-foreground/25"
                                                strokeWidth={1.5}
                                            />
                                            <span className="font-sans text-base text-foreground/35 leading-snug line-through decoration-foreground/15">
                                                {row.typicalText}
                                            </span>
                                        </div>

                                        {/* Our cell */}
                                        <div className="flex items-center gap-3 px-4 py-4 md:py-5 md:pl-8 md:pr-4 transition-colors duration-200 group-hover:bg-foreground/3">
                                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-foreground/8 shrink-0">
                                                <Check
                                                    className="w-3 h-3 text-foreground/70"
                                                    strokeWidth={2.5}
                                                />
                                            </span>
                                            <span className="font-sans text-base text-foreground leading-snug">
                                                {row.ourText}
                                            </span>
                                        </div>
                                    </div>
                                </AnimatedListItem>
                            );
                        })}
                        </AnimatedList>
                    </div>
                </div>

                {/* ── Stats ── */}
                <div className="flex items-center justify-center gap-24">
                    {stats.map((stat) => (
                        <Stat key={stat.label} {...stat} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
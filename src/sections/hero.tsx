import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import heroImage from "@/assets/images/hero-1.jpg";
import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";
import Eyebrow from "@/components/eyebrow";

export default function Hero() {
    return (
        <section className="relative w-full bg-background overflow-hidden">
            <Container>
                {/* Main Hero grid — left content / right image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0 py-16 lg:py-0 min-h-[850px]">
                    {/* ── Left Column ────────────────────────────── */}
                    <div className="flex flex-col justify-center gap-4 lg:pr-16">
                        {/* Tag badge */}
                        <Eyebrow className="mb-2">
                            From Idea → MVP or Execution Sprints for Scaling Startups.
                        </Eyebrow>

                        {/* Heading */}
                        <Heading variant="big" as="h1" className="italic">
                            <span className="text-neutral-400 not-italic">Structured Execution{" "}</span>
                            <span>for</span>
                            <br />
                            Growing Startups
                        </Heading>

                        {/* Subheading */}
                        <SubHeading variant="big" className="font-sans text-foreground/60 max-w-[620px]">
                            We partner with founders and teams to design, build, and launch production-ready
                            products with scalable architecture, structured workflows, and built-in compliance.
                        </SubHeading>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-5 pt-8">
                            <Link
                                href="#start-project"
                                className="inline-flex items-center gap-2 bg-foreground text-background font-mono tracking-wide uppercase px-6 py-3.5 hover:opacity-90 transition-opacity duration-200"
                            >
                                Start a Project
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="M7 17L17 7" />
                                    <path d="M7 7h10v10" />
                                </svg>
                            </Link>

                            <Link
                                href="#how-it-works"
                                className="inline-flex items-center gap-2 text-foreground font-mono tracking-wide uppercase px-6 py-3.5 hover:border-foreground/60 hover:bg-foreground/5 transition-all duration-200 bg-muted/80"
                            >
                                See How It Works
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="M7 17L17 7" />
                                    <path d="M7 7h10v10" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* ── Right Column — Hero Image ───────────────── */}
                    <div className="relative flex items-center justify-end h-full">
                        <div className="relative w-full max-w-[540px] max-h-[738px] lg:h-full overflow-hidden">
                            <Image
                                src={heroImage}
                                alt="Structured architectural composition representing execution and precision"
                                fill
                                className="object-cover object-center grayscale"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Halftone dot-grid overlay (matches design aesthetic) */}
                            <div
                                className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-60"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                                    backgroundSize: "4px 4px",
                                }}
                                aria-hidden="true"
                            />
                            {/* Subtle bottom gradient */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                                style={{
                                    background:
                                        "linear-gradient(to top, var(--background) 0%, transparent 100%)",
                                }}
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
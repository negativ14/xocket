import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import mvpHeroImage from "@/assets/images/mvp-hero.svg";
import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";

export default function MvpHero() {
    return (
        <section className="relative w-full bg-background overflow-hidden">
            <Container>
                {/* Main Hero grid — left content / right image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0 py-16 lg:py-0 min-h-[750px]">
                    {/* ── Left Column ────────────────────────────── */}
                    <div className="flex flex-col justify-center gap-4 lg:pr-16">
                        {/* Tag badge */}
                        <div className="flex items-center gap-2.5 bg-muted py-1.5 px-2 w-fit mb-2">
                            <span
                                className="inline-block w-3 h-3 bg-foreground shrink-0"
                                aria-hidden="true"
                            />
                            <p className="font-mono text-xs xl:text-sm uppercase text-foreground leading-none">
                                From Idea → MVP or Execution Sprints for Scaling Startups.
                            </p>
                        </div>

                        {/* Heading */}
                        <Heading variant="big" as="h1" className="text-neutral-400 leading-tight">
                            Launch an Investor-Ready{" "}
                            <span className="">MVP</span>{" "}
                            <span className="italic text-foreground">in 6–8 Weeks</span>
                        </Heading>

                        {/* Subheading */}
                        <SubHeading variant="big" className="font-sans text-foreground/60 max-w-[600px]">
                            We design, build, and launch investor-ready products — engineered for scale,
                            speed, and real-world use from day one.
                        </SubHeading>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-5 pt-8">
                            <Link
                                href="#start-mvp"
                                className="inline-flex items-center gap-2 bg-foreground text-background font-mono tracking-wide uppercase px-6 py-3.5 hover:opacity-90 transition-opacity duration-200"
                            >
                                Start MVP Program
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
                                href="#book-a-call"
                                className="inline-flex items-center gap-2 text-foreground font-mono tracking-wide uppercase px-6 py-3.5 hover:border-foreground/60 hover:bg-foreground/5 transition-all duration-200 bg-muted/80"
                            >
                                Book a Call
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
                        <div className="relative">
                            <Image
                                src={mvpHeroImage}
                                alt="Investor-ready MVP — classical statue representing clarity, precision, and execution"
                                width={532}
                                height={608}
                                className="object-contain"
                                priority
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
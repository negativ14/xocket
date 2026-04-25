import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import howWeWorkImage from "@/assets/images/how-we-work.jpg";
import Heading from "@/components/heading";
import { ArrowUpRight } from "lucide-react";
import Eyebrow from "@/components/eyebrow";

export default function ExecutionHero() {
    return (
        <section className="relative w-full bg-background overflow-hidden">
            <Container>
                {/* Main Hero grid — left content / right image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0 py-16 lg:py-0 min-h-[750px]">
                    {/* ── Left Column ────────────────────────────── */}
                    <div className="flex flex-col justify-center gap-4 lg:pr-10">
                        {/* Tag badge */}
                        <Eyebrow className="mb-2">
                            FROM MVP → EXECUTION <span className="hidden md:inline-flex">SPRINTS FOR SCALING STARTUPS.</span> 
                        </Eyebrow>


                        {/* Heading */}
                        <Heading variant="big" as="h1" className="text-neutral-400 font-normal leading-[1.1] tracking-tight max-w-[600px]">
                            <span className="text-neutral-400 block">Engineering Acceleration for</span>
                            <span className="text-white italic block">Growing Startups</span>
                        </Heading>

                        {/* Subheading */}
                        <p className="font-sans xl:text-lg text-neutral-400 leading-relaxed max-w-[620px]">
                            We partner with early-stage teams to design, build, and launch production-ready products with scalable architecture, structured workflows, and built-in compliance.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-8">
                            <Link
                                href="#start-mvp"
                                className="inline-flex text-sm md:text-base w-full md:w-auto justify-center items-center gap-2 bg-foreground text-background font-mono tracking-wide uppercase px-6 py-3 hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
                            >
                                START MVP PROGRAM
                                <ArrowUpRight className="w-[18px] h-[18px]" strokeWidth={1.5} />
                            </Link>

                            <Link
                                href="/contact-us"
                                className="inline-flex w-full text-sm md:text-base md:w-auto justify-center items-center gap-2 text-foreground font-mono tracking-wide uppercase px-6 py-3 hover:border-foreground/60 hover:bg-foreground/5 transition-all duration-200 bg-muted/80 whitespace-nowrap"
                            >
                                BOOK STRATEGY CALL
                                <ArrowUpRight className="w-[18px] h-[18px]" strokeWidth={1.5} />
                            </Link>
                        </div>
                    </div>

                    {/* ── Right Column — Hero Image ───────────────── */}
                    <div className="relative flex items-center justify-end h-full w-full">
                        <div className="relative">
                            <Image
                                src={howWeWorkImage}
                                alt="Engineering Acceleration for Growing Startups"
                                width={532}
                                height={608}
                                className="object-contain -scale-x-100"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

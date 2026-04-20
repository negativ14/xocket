import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import howWeWorkImage from "@/assets/images/how-we-work.jpg";
import Heading from "@/components/heading";
import { ArrowUpRight } from "lucide-react";

export default function ExecutionHero() {
    return (
        <section className="relative w-full bg-background overflow-hidden">
            <Container>
                {/* Main Hero grid — left content / right image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0 py-16 lg:py-0 min-h-[750px]">
                    {/* ── Left Column ────────────────────────────── */}
                    <div className="flex flex-col justify-center gap-4 lg:pr-10">
                        {/* Tag badge */}
                        <div className="flex items-center gap-2.5 bg-[#1C1C1C] py-1.5 px-2.5 w-fit mb-4">
                            <span
                                className="inline-block w-2.5 h-2.5 bg-white shrink-0"
                                aria-hidden="true"
                            />
                            <p className="font-mono text-xs xl:text-sm uppercase text-neutral-300 leading-none mt-0.5 tracking-wider">
                                FROM MVP → EXECUTION SPRINTS FOR SCALING STARTUPS.
                            </p>
                        </div>

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
                        <div className="flex flex-wrap items-center gap-5 pt-8">
                            <Link
                                href="#start-mvp"
                                className="inline-flex items-center gap-3 bg-white text-black font-mono text-sm md:text-base uppercase px-7 py-4 hover:opacity-90 transition-opacity duration-200"
                            >
                                START MVP PROGRAM
                                <ArrowUpRight className="w-[18px] h-[18px]" strokeWidth={1.5} />
                            </Link>

                            <Link
                                href="#book-a-call"
                                className="inline-flex items-center gap-3 text-white font-mono text-sm md:text-base uppercase px-7 py-4 bg-muted hover:bg-white hover:text-black transition-colors duration-200"
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

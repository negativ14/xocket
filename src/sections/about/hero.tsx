import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/container";
import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";

export default function AboutHero() {
    return (
        <section className="relative w-full bg-background pt-24 pb-20 lg:pt-36 lg:pb-32 border-b border-border/10">
            <Container>
                {/* ── Main Layout Stack ── */}
                <div className="flex flex-col gap-4 md:gap-8 w-full">

                    {/* Top: Huge Hero Heading */}
                    <Heading as="h1" variant="big" className="leading-[1.1] font-normal tracking-tight lg:text-[72px]">
                        <span className="text-neutral-400 block pb-1 lg:pb-3">We Build Products That Are</span>
                        <span className="text-neutral-400">Meant </span>
                        <span className="text-white italic">to Scale</span>
                    </Heading>

                    {/* Bottom: Subtext block and CTA group */}
                    <div className="flex flex-col xl:flex-row items-start xl:items-end w-full justify-between gap-12 xl:gap-20">
                        {/* Subheading */}
                        <SubHeading variant="big" className="font-sans text-neutral-400 max-w-[620px] text-left">
                            Xocket helps with founders and teams to design, build, and scale production-ready products, with the systems, structure, and engineering discipline most teams lack.
                        </SubHeading>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 shrink-0">
                            <Link
                                href="#start-mvp"
                                className="inline-flex items-center gap-3 bg-white text-black font-mono uppercase px-6 py-4 hover:opacity-90 transition-opacity duration-200"
                            >
                                START MVP PROGRAM
                                <ArrowUpRight className="w-[18px] h-[18px]" strokeWidth={1.5} />
                            </Link>

                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-3 text-white font-mono uppercase px-6 py-4 bg-muted hover:bg-white hover:text-black transition-colors duration-200"
                            >
                                BOOK STRATEGY CALL
                                <ArrowUpRight className="w-[18px] h-[18px]" strokeWidth={1.5} />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
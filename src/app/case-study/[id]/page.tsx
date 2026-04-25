import { AnimatedList, AnimatedListItem } from "@/components/animated-list";
import Container from "@/components/container";
import Heading from "@/components/heading";
import Footer from "@/sections/footer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const faults = [
    { index: "01", text: "Design and engineering fall out of sync." },
    { index: "02", text: "Speed is prioritized over structure." },
    { index: "03", text: "What gets built isn\u2019t designed to scale." },
    { index: "04", text: "Technical debt accumulates and slows everything down." },
];

export default function CaseStudyPage() {
    return (
        <div className="w-full bg-background text-foreground min-h-screen pt-24 pb-0">
            {/* ── Hero Section ── */}
            <section className="mb-20">
                <Container>
                    <div className="flex flex-col max-w-5xl">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 rounded-full bg-foreground" />
                            <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground font-semibold">
                                OUR WORK / TSENTA
                            </p>
                        </div>

                        {/* Title */}
                        <Heading as="h1" variant="big" className="text-foreground mb-8 uppercase tracking-tight font-semibold">
                            TSENTA
                        </Heading>

                        {/* Subtext */}
                        <p className="font-sans text-lg md:text-xl text-foreground/70 leading-relaxed mb-16 max-w-4xl">
                            Tsenta is an AI-powered platform designed to automate the repetitive process of applying for jobs online. Instead of manually filling out the same information across hundreds of job portals, Tsenta helps users streamline the process through intelligent automation, resume optimization, and application tracking. The product focuses on reducing friction in the job search experience.
                        </p>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-10 border-t border-border/40">
                            <div className="flex flex-col gap-1.5">
                                <p className="font-mono text-[11px] tracking-widest text-foreground/40 uppercase font-medium">Client</p>
                                <p className="font-sans text-[15px] font-semibold text-foreground">Tsenta</p>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <p className="font-mono text-[11px] tracking-widest text-foreground/40 uppercase font-medium">Industry</p>
                                <p className="font-sans text-[15px] font-semibold text-foreground">Fintech</p>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <p className="font-mono text-[11px] tracking-widest text-foreground/40 uppercase font-medium">Scope</p>
                                <p className="font-sans text-[15px] font-semibold text-foreground">Brand, UX Strategy, UI Design</p>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <p className="font-mono text-[11px] tracking-widest text-foreground/40 uppercase font-medium">Duration</p>
                                <p className="font-sans text-[15px] font-semibold text-foreground">2 Weeks</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── Images Section ── */}
            <section className="w-full flex flex-col gap-8 md:gap-16 pb-20">
                <Container className="w-full">
                    <div className="flex flex-col gap-8 w-full ">
                        {/* Image Block 1 */}
                        <div className="w-full bg-[#111111] p-6 rounded-sm border border-foreground/10">
                            <div
                                className="w-full aspect-video bg-background border border-foreground/10 shadow-sm relative overflow-hidden"
                                style={{
                                    backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                                    backgroundSize: "32px 32px"
                                }}
                            />
                        </div>

                        {/* Image Block 2 */}
                        <div className="w-full bg-[#111111] p-6 rounded-sm border border-foreground/10">
                            <div
                                className="w-full aspect-video bg-background border border-foreground/10 shadow-sm relative overflow-hidden"
                                style={{
                                    backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                                    backgroundSize: "32px 32px"
                                }}
                            />
                        </div>

                        {/* Image Block 3 */}
                        <div className="w-full bg-[#111111] p-6 rounded-sm border border-foreground/10">
                            <div
                                className="w-full aspect-video bg-background border border-foreground/10 shadow-sm relative overflow-hidden"
                                style={{
                                    backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                                    backgroundSize: "32px 32px"
                                }}
                            />
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-12 md:py-24">
                <Container>
                    <div className="flex flex-col gap-4 md:gap-8">

                        <Heading as="h2" variant="big" className="text-foreground mb-6 font-semibold">
                            The problem we solved
                        </Heading>

                        {/* Lead */}
                        <p className="font-sans text-lg md:text-xl text-pretty text-foreground/55 max-w-2xl leading-relaxed">
                            Most startup products don&apos;t fail because of bad ideas, they fail
                            because execution is fragmented.
                        </p>

                        {/* Fault lines */}
                        <AnimatedList className="flex flex-col divide-y divide-foreground/8">
                            {faults.map((fault) => (
                                <AnimatedListItem key={fault.index}>
                                    <div className="flex items-center gap-6 py-5 group">
                                        <span className="font-mono text-xs text-foreground/20 tracking-widest shrink-0 w-6 select-none">
                                            {fault.index}
                                        </span>
                                        <p className="font-sans text-xl md:text-2xl lg:text-[26px] tracking-tight text-foreground leading-snug transition-colors duration-300 group-hover:text-foreground/80">
                                            {fault.text}
                                        </p>
                                    </div>
                                </AnimatedListItem>
                            ))}
                        </AnimatedList>
                    </div>
                </Container>
            </section>

            {/* ── Outcome Section ── */}
            <section className="py-12 md:py-24">
                <Container>
                    <div className="flex flex-col mb-16">
                        <Heading as="h2" variant="big" className="text-foreground mb-6 font-semibold">
                            Outcome
                        </Heading>
                        <p className="font-sans text-foreground/70 text-lg leading-relaxed max-w-5xl">
                            Tsenta successfully managed to secure a dominant spot in their market within its first year. Under a robust brand identity, scalable system, clean architecture with 0 bugs built right. Our streamlined UI processes have given the users intuitive experiences leading to immense growth with over 1.2M+ active users using the platform entirely seamlessly without lag, drop or issues whatsoever.
                        </p>
                    </div>




                    {/* Project Navigation */}
                    <div className="flex items-center justify-between mb-8 md:mb-12 mt-12 md:mt-24">
                        <Link href="#" className="flex items-center gap-3 group">
                            <ArrowLeft className="w-5 h-5 text-foreground group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
                            <span className="font-mono text-sm md:text-base tracking-widest uppercase text-foreground font-semibold">Previous Project</span>
                        </Link>
                        <Link href="#" className="flex items-center gap-3 group">
                            <span className="font-mono text-sm md:text-base tracking-widest uppercase text-foreground font-semibold">Next Project</span>
                            <ArrowRight className="w-5 h-5 text-foreground group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                        </Link>
                    </div>

                    {/* Small Images Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Box 1 */}
                        <div className="flex flex-col gap-6">
                            <div className="w-full bg-[#111111] p-6 md:p-12 lg:p-16 rounded-sm border border-foreground/10">
                                <div
                                    className="w-full aspect-4/3 bg-background border border-foreground/10 shadow-sm"
                                    style={{
                                        backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                                        backgroundSize: "24px 24px"
                                    }}
                                />
                            </div>

                            {/* Badges */}
                            <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-2">
                                {["UX Strategy", "UI Design", "Web App Design", "Development"].map((tag) => (
                                    <span key={tag} className="bg-foreground/5 px-3 py-1.5 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-foreground/60 border border-foreground/10 whitespace-nowrap">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Details */}
                            <div className="flex flex-col gap-4 items-start mt-2">
                                <h3 className="font-sans text-xl md:text-2xl font-semibold text-foreground xl:w-1/4 shrink-0">
                                    MarkIt
                                </h3>
                                <p className="font-sans text-foreground/70 text-[15px] leading-relaxed">
                                    Tsenta is an AI-powered platform that automates job applications, eliminating the need to repeatedly fill out form.
                                </p>
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div className="flex flex-col gap-6">
                            <div className="w-full bg-[#111111] p-6 md:p-12 lg:p-16 rounded-sm border border-foreground/10">
                                <div
                                    className="w-full aspect-4/3 bg-background border border-foreground/10 shadow-sm"
                                    style={{
                                        backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                                        backgroundSize: "24px 24px"
                                    }}
                                />
                            </div>

                            {/* Badges */}
                            <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-2">
                                {["UX Strategy", "UI Design", "Web App Design", "Development"].map((tag) => (
                                    <span key={tag} className="bg-foreground/5 px-3 py-1.5 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-foreground/60 border border-foreground/10 whitespace-nowrap">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Details */}
                            <div className="flex flex-col gap-4 items-start mt-2">
                                <h3 className="font-sans text-xl md:text-2xl font-semibold text-foreground xl:w-1/4 shrink-0">
                                    MarkIt
                                </h3>
                                <p className="font-sans text-foreground/70 text-[15px] leading-relaxed">
                                    Tsenta is an AI-powered platform that automates job applications, eliminating the need to repeatedly fill out form.
                                </p>
                            </div>
                        </div>
                    </div>

                </Container>
            </section>

            <Footer />
        </div>
    );
}
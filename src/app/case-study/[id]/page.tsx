import Container from "@/components/container";
import Heading from "@/components/heading";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function CaseStudyPage() {
    return (
        <div className="w-full bg-white text-black min-h-screen pt-24 pb-0">
            {/* ── Hero Section ── */}
            <section className="mb-20">
                <Container>
                    <div className="flex flex-col max-w-5xl">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 rounded-full bg-sky-400" />
                            <p className="font-mono text-xs tracking-widest uppercase text-neutral-500 font-semibold">
                                OUR WORK / TSENTA
                            </p>
                        </div>

                        {/* Title */}
                        <Heading as="h1" variant="big" className="text-black mb-8 uppercase tracking-tight font-semibold">
                            TSENTA
                        </Heading>

                        {/* Subtext */}
                        <p className="font-sans text-lg md:text-xl text-neutral-600 leading-relaxed mb-16 max-w-4xl">
                            Tsenta is an AI powered platform designed to automate the manual requirements of auditing for internal teams. Based strictly in Sydney, Australia the entire system was built from the ground up right from brand research, product architecture to executing the entire front end and UX systems, marketing, the product hosts 1.2M+ users on a daily basis with deep performance improvements.
                        </p>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-10 border-t border-neutral-200">
                            <div className="flex flex-col gap-1.5">
                                <p className="font-mono text-[11px] tracking-widest text-neutral-400 uppercase font-medium">Client</p>
                                <p className="font-sans text-[15px] font-semibold text-black">Tsenta</p>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <p className="font-mono text-[11px] tracking-widest text-neutral-400 uppercase font-medium">Industry</p>
                                <p className="font-sans text-[15px] font-semibold text-black">Fintech</p>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <p className="font-mono text-[11px] tracking-widest text-neutral-400 uppercase font-medium">Scope</p>
                                <p className="font-sans text-[15px] font-semibold text-black">Brand, UX Strategy, UI Design</p>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <p className="font-mono text-[11px] tracking-widest text-neutral-400 uppercase font-medium">Duration</p>
                                <p className="font-sans text-[15px] font-semibold text-black">8 Weeks</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── Images Section ── */}
            <section className="w-full flex flex-col gap-8 md:gap-16 pb-20">
                <Container>
                    <div className="flex flex-col gap-8">
                        {/* Image Block 1 */}
                        <div className="w-full bg-[#FAFAFA] p-6 md:p-16 lg:p-24 rounded-sm">
                            <div 
                                className="w-full aspect-[16/9] bg-white border border-neutral-200 shadow-sm relative overflow-hidden"
                                style={{
                                    backgroundImage: "linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)",
                                    backgroundSize: "32px 32px"
                                }}
                            />
                        </div>
                        
                        {/* Image Block 2 */}
                        <div className="w-full bg-[#FAFAFA] p-6 md:p-16 lg:p-24 rounded-sm">
                            <div 
                                className="w-full aspect-[16/9] bg-white border border-neutral-200 shadow-sm relative overflow-hidden"
                                style={{
                                    backgroundImage: "linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)",
                                    backgroundSize: "32px 32px"
                                }}
                            />
                        </div>

                        {/* Image Block 3 */}
                        <div className="w-full bg-[#FAFAFA] p-6 md:p-16 lg:p-24 rounded-sm">
                            <div 
                                className="w-full aspect-[16/9] bg-white border border-neutral-200 shadow-sm relative overflow-hidden"
                                style={{
                                    backgroundImage: "linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)",
                                    backgroundSize: "32px 32px"
                                }}
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── Outcome Section ── */}
            <section className="py-20 md:py-32">
                <Container>
                    <div className="flex flex-col mb-16">
                        <Heading as="h2" variant="medium" className="text-black mb-6 font-semibold">
                            Outcome
                        </Heading>
                        <p className="font-sans text-neutral-600 text-lg leading-relaxed max-w-5xl">
                            Tsenta successfully managed to secure a dominant spot in their market within its first year. Under a robust brand identity, scalable system, clean architecture with 0 bugs built right. Our streamlined UI processes have given the users intuitive experiences leading to immense growth with over 1.2M+ active users using the platform entirely seamlessly without lag, drop or issues whatsoever.
                        </p>
                    </div>

                    {/* Small Images Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Box 1 */}
                        <div className="flex flex-col gap-5">
                            <div className="w-full bg-[#FAFAFA] p-8 md:p-12 rounded-sm border border-neutral-100">
                                <div 
                                    className="w-full aspect-[4/3] bg-white border border-neutral-200 shadow-sm"
                                    style={{
                                        backgroundImage: "linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)",
                                        backgroundSize: "24px 24px"
                                    }}
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                                    <p className="font-mono text-[11px] uppercase tracking-widest text-black font-semibold">Prototype / Gallery</p>
                                </div>
                                <p className="font-sans text-[15px] text-neutral-500">The core structural layout focusing on modular scalability.</p>
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div className="flex flex-col gap-5">
                            <div className="w-full bg-[#FAFAFA] p-8 md:p-12 rounded-sm border border-neutral-100">
                                <div 
                                    className="w-full aspect-[4/3] bg-white border border-neutral-200 shadow-sm"
                                    style={{
                                        backgroundImage: "linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)",
                                        backgroundSize: "24px 24px"
                                    }}
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                                    <p className="font-mono text-[11px] uppercase tracking-widest text-black font-semibold">App / Design</p>
                                </div>
                                <p className="font-sans text-[15px] text-neutral-500">The core structural layout focusing on modular scalability.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── CTA Section ── */}
            <section className="relative w-full py-32 overflow-hidden bg-[#F0F7FF] border-t border-blue-100">
                {/* Decorative background noise/gradient */}
                <div 
                    className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
                    style={{
                        backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')"
                    }}
                />
                
                <Container className="relative z-10 flex flex-col items-center justify-center text-center">
                    <Heading as="h2" variant="medium" className="text-black mb-4 font-medium md:text-4xl">
                        Interested in working with us?
                    </Heading>
                    <p className="font-sans text-neutral-600 mb-10 max-w-md text-[17px]">
                        Have a project in mind? Book a call with our team to see how we can help bring your vision to life.
                    </p>
                    <button className="bg-[#111111] text-white px-8 py-4 font-mono text-sm tracking-[0.15em] uppercase hover:bg-black transition-colors flex items-center gap-3">
                        BOOK A CALL <ArrowUpRight className="w-[18px] h-[18px]" strokeWidth={1.5} />
                    </button>
                </Container>
            </section>
        </div>
    );
}
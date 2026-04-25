'use client'

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/container";
import Heading from "@/components/heading";
import buildingsImage from "@/assets/images/buildings.png";
import Eyebrow from "@/components/eyebrow";

export default function ContactUsHero() {
    return (
        <section className="w-full bg-background py-18">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col col-span-2">
                        {/* Tag */}
                        <Eyebrow className="mb-6 md:mb-12">
                            CONTACT US
                        </Eyebrow>

                        {/* Heading */}
                        <Heading as="h1" variant="big" className="font-normal leading-[1.1] tracking-tight mb-6 text-5xl lg:text-[64px]">
                            <span className="text-neutral-400">Let&apos;s build </span>
                            <span className="text-white">together.</span>
                        </Heading>

                        {/* Subtext */}
                        <p className="font-sans text-neutral-400 md:text-lg leading-relaxed max-w-[520px] mb-12">
                            Ready to accelerate your startup execution? Fill out the form or book a strategy call directly.
                        </p>

                        {/* Info Blocks */}
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-3">
                                <p className="font-mono text-lg uppercase text-white font-medium">EMAIL US</p>
                                <a href="mailto:hello@xocket.io" className="font-sans text-neutral-400 text-xl hover:text-white transition-colors">hello@xocket.io</a>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="font-mono text-lg uppercase text-white font-medium">OFFICE</p>
                                <p className="font-sans text-neutral-400 text-xl">San Francisco, CA</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="relative col-span-3 w-full h-full p-2 md:p-6 lg:p-8 xl:p-10 lg:ml-auto max-w-[600px] lg:max-w-none">
                        {/* Background Image behind the form */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src={buildingsImage}
                                alt="Buildings"
                                fill
                                className="object-cover object-center grayscale brightness-[0.25]"
                                priority
                            />
                            {/* Halftone dot-grid overlay */}
                            <div
                                className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                                    backgroundSize: "4px 4px",
                                }}
                                aria-hidden="true"
                            />
                        </div>

                        {/* Form Container */}
                        <div className="relative z-10 bg-[#111111] p-2 sm:p-4 lg:p-10 w-full shadow-2xl">
                            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                                {/* Name */}
                                <div className="flex flex-col gap-2.5">
                                    <label className="font-mono tracking-widest uppercase text-white font-medium">NAME</label>
                                    <input
                                        type="text"
                                        placeholder="input your name"
                                        className="bg-transparent border border-white/10 px-4 py-3.5 text-white font-sans text-sm focus:outline-none focus:border-white/30 placeholder:text-white/40 transition-colors"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-2.5">
                                    <label className="font-mono tracking-widest uppercase text-white font-medium">EMAIL</label>
                                    <input
                                        type="email"
                                        placeholder="input your email adress"
                                        className="bg-transparent border border-white/10 px-4 py-3.5 text-white font-sans text-sm focus:outline-none focus:border-white/30 placeholder:text-white/40 transition-colors"
                                    />
                                </div>

                                {/* Company */}
                                <div className="flex flex-col gap-2.5">
                                    <label className="font-mono tracking-widest uppercase text-white font-medium">COMPANY</label>
                                    <input
                                        type="text"
                                        placeholder="input your email adress"
                                        className="bg-transparent border border-white/10 px-4 py-3.5 text-white font-sans text-sm focus:outline-none focus:border-white/30 placeholder:text-white/40 transition-colors"
                                    />
                                </div>

                                {/* Pricing */}
                                <div className="flex flex-col gap-2.5">
                                    <label className="font-mono tracking-widest uppercase text-white font-medium">PRICING</label>
                                    <div className="relative">
                                        <select
                                            className="bg-transparent border border-white/10 px-4 py-3.5 text-white/40 font-sans text-sm w-full appearance-none focus:outline-none focus:border-white/30 transition-colors cursor-pointer"
                                            defaultValue=""
                                        >
                                            <option value="" disabled className="bg-[#111111] text-white/40">select...</option>
                                            <option value="1" className="bg-[#111111] text-white">Under $10k</option>
                                            <option value="2" className="bg-[#111111] text-white">$10k - $25k</option>
                                            <option value="3" className="bg-[#111111] text-white">$25k - $50k</option>
                                            <option value="4" className="bg-[#111111] text-white">$50k+</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/60"><path d="m6 9 6 6 6-6" /></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Description */}
                                <div className="flex flex-col gap-2.5 mb-2">
                                    <label className="font-mono tracking-widest uppercase text-white font-medium">PROJECT DESCRIPTION</label>
                                    <textarea
                                        rows={6}
                                        className="bg-transparent border border-white/10 px-4 py-3.5 text-white font-sans text-sm resize-none focus:outline-none focus:border-white/30 transition-colors"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button type="submit" className="flex items-center justify-center gap-3 bg-white text-black font-mono tracking-widest uppercase px-6 py-3 text-sm md:text-base hover:opacity-90 transition-opacity duration-200 mt-2">
                                    SUBMIT
                                    <ArrowUpRight className="w-[18px] h-[18px]" strokeWidth={1.5} />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
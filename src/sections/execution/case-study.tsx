import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/container";
import Heading from "@/components/heading";
import product1 from "@/assets/images/product-1.jpg";
import product2 from "@/assets/images/product-2.jpg";
import SubHeading from "@/components/sub-heading";
import Eyebrow from "@/components/eyebrow";

// ── Data ───────────────────────────────────────────────────
const caseStudies = [
    { image: product1, label: "AI SAAS Platform", alt: "AI SaaS Platform product screenshot" },
    { image: product2, label: "Typical Approach", alt: "Typical Approach product screenshot" },
] as const;

// ── Main Section ────────────────────────────────────────────
export default function ExecutionCaseStudies() {
    return (
        <section className="w-full bg-background py-20 lg:py-28">
            <Container>
                {/* ── Header ── */}
                <div className="flex flex-col gap-6 mb-16">
                    {/* Tag */}
                    <Eyebrow className="mb-2">
                        CASE STUDIES
                    </Eyebrow>

                    {/* Heading — left-aligned */}
                    <Heading as="h2" variant="big" className="text-neutral-400 font-normal leading-[1.1] tracking-tight max-w-[640px]">
                        Built for <span className="text-white">Real Products,</span> Not
                        <br />
                        <span className="text-white">Just Ideas</span>
                    </Heading>

                    {/* Subtext */}
                    <SubHeading variant="big" className="text-neutral-400 max-w-[440px] font-sans text-[15px] md:text-base leading-relaxed">
                        A look at how we&apos;ve helped teams design, build, and scale
                        production-ready products.
                    </SubHeading>
                </div>

                {/* ── Product image grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-16">
                    {caseStudies.map(({ image, label, alt }) => (
                        <div key={label} className="flex flex-col gap-5 lg:gap-6">
                            {/* Image with halftone overlay */}
                            <div className="relative w-full aspect-16/10 overflow-hidden">
                                <Image
                                    src={image}
                                    alt={alt}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Caption label */}
                            <p className="font-mono md:text-xl font-medium tracking-wide text-white/80">
                                {label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ── SEE ALL CTA ── */}
                <div className="flex justify-center mt-2">
                    <Link
                        href="#case-studies"
                        className="inline-flex items-center gap-3 bg-[#131313] px-7 py-3.5 md:px-8 md:py-4 font-mono tracking-wider uppercase text-white hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        SEE ALL
                        <ArrowUpRight className="w-[18px] h-[18px]" />
                    </Link>
                </div>
            </Container>
        </section>
    );
}

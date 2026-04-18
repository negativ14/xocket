import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/container";
import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";
import product1 from "@/assets/images/product-1.jpg";
import product2 from "@/assets/images/product-2.jpg";

// ── Data ───────────────────────────────────────────────────
const caseStudies = [
    { image: product1, label: "AI SAAS Platform", alt: "AI SaaS Platform product screenshot" },
    { image: product2, label: "Typical Approach", alt: "Typical Approach product screenshot" },
] as const;

// ── Main Section ────────────────────────────────────────────
export default function CaseStudy() {
    return (
        <section className="w-full bg-background py-20 lg:py-28">
            <Container>
                {/* ── Header ── */}
                <div className="flex flex-col gap-6 mb-16">
                    {/* Tag — matches comparison.tsx style */}
                    <div className="flex items-center gap-2.5 bg-muted px-2 py-1.5 w-fit">
                        <span
                            className="inline-block w-3 h-3 bg-foreground shrink-0"
                            aria-hidden="true"
                        />
                        <p className="font-mono text-xs xl:text-sm uppercase tracking-widest text-foreground leading-none">
                            Case Studies
                        </p>
                    </div>

                    {/* Heading — left-aligned, same variant as other sections */}
                    <Heading as="h2" variant="big" className="text-neutral-400 max-w-[640px]">
                        Built for{" "}
                        <span className="text-foreground font-heading italic">
                            Real Products,
                        </span>{" "}
                        Not
                        <br />
                        Just Ideas
                    </Heading>

                    {/* Subtext */}
                    <SubHeading
                        variant="big"
                        className="text-foreground/60 max-w-[480px] font-sans"
                    >
                        A look at how we&apos;ve helped teams design, build, and scale
                        production-ready products.
                    </SubHeading>
                </div>

                {/* ── Product image grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {caseStudies.map(({ image, label, alt }) => (
                        <div key={label} className="flex flex-col gap-6">
                            {/* Image with halftone overlay */}
                            <div className="relative w-full aspect-16/10 overflow-hidden">
                                <Image
                                    src={image}
                                    alt={alt}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Halftone dot-grid overlay — matches work-with-us.tsx */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen"
                                    style={{
                                        backgroundImage:
                                            "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
                                        backgroundSize: "4px 4px",
                                    }}
                                    aria-hidden="true"
                                />
                            </div>

                            {/* Caption label */}
                            <p className="font-mono text-xl tracking-wider text-foreground">
                                {label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ── SEE ALL CTA ── */}
                <div className="flex justify-center">
                    <Link
                        href="#case-studies"
                        className="inline-flex items-center gap-3 border border-foreground/30 bg-[#111111] px-8 py-4 font-mono uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
                    >
                        See All
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </Container>
        </section>
    );
}
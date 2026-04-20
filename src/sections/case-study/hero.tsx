import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/container";
import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";
import product1 from "@/assets/images/product-1.jpg";
import product2 from "@/assets/images/product-2.jpg";

const caseStudiesItems = [
    { image: product1, label: "AI SaaS Platform for Customer Operations" },
    { image: product2, label: "Internal Tooling for Workflow Automation" },
    { image: product1, label: "AI SAAS Platform" },
    { image: product2, label: "Typical Approach" },
    { image: product1, label: "AI SAAS Platform" },
    { image: product2, label: "Typical Approach" },
];

export default function CaseStudyHero() {
    return (
        <section className="relative w-full bg-background pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-border/10">
            <Container>
                <div className="flex flex-col gap-6 lg:gap-8 max-w-[800px]">
                    <Heading as="h1" variant="big" className="leading-[1.1] font-normal tracking-tight">
                        <span className="text-neutral-400 block">From Idea to Production —</span>
                        <span className="text-neutral-400">Without </span>
                        <span className="text-white">the Chaos</span>
                    </Heading>

                    <SubHeading variant="big" className="font-sans text-neutral-400 max-w-[600px]">
                        A selection of products we&apos;ve designed, built, and scaled.
                    </SubHeading>
                </div>

                <div className="mt-20 lg:mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-12 lg:gap-10 lg:gap-y-16 mb-16">
                        {caseStudiesItems.map(({ image, label }, idx) => (
                            <div key={idx} className="flex flex-col gap-5 lg:gap-6">
                                {/* Image frame */}
                                <div className="relative w-full aspect-16/10 overflow-hidden">
                                    <Image
                                        src={image}
                                        alt={label}
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>

                                {/* Caption label */}
                                <p className="font-mono text-[15px] md:text-base lg:text-[17px] font-medium tracking-wide text-white/80">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* ── SEE MORE CTA ── */}
                    <div className="flex justify-center mt-2">
                        <Link
                            href="#case-studies"
                            className="inline-flex items-center gap-3 bg-[#131313] px-7 py-3.5 md:px-8 md:py-4 font-mono text-[13px] tracking-wider uppercase text-white hover:bg-white hover:text-black transition-colors duration-300"
                        >
                            SEE MORE
                            <ArrowUpRight className="w-[18px] h-[18px]" strokeWidth={1.5} />
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}

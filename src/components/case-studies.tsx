import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/container";
import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";
import Eyebrow from "@/components/eyebrow";
import { cn } from "@/lib/utils";

// ── Types ──────────────────────────────────────────────────
export interface CaseStudyItem {
    image: StaticImageData;
    label: string;
    alt: string;
}

export interface CaseStudiesProps {
    eyebrow: string;
    heading: React.ReactNode;
    subheading: string;
    items: CaseStudyItem[];
    ctaLabel?: string;
    ctaHref?: string;
    className?: string;
}

// ── Component ──────────────────────────────────────────────
export default function CaseStudies({
    eyebrow,
    heading,
    subheading,
    items,
    ctaLabel = "SEE ALL",
    ctaHref = "#case-studies",
    className,
}: CaseStudiesProps) {
    return (
        <section className={cn("w-full bg-background py-20 lg:py-28", className)}>
            <Container>
                {/* Header */}
                <div className="flex flex-col gap-6 mb-16">
                    <Eyebrow className="mb-2">{eyebrow}</Eyebrow>

                    <Heading
                        as="h2"
                        variant="big"
                        className="text-neutral-400 font-normal leading-[1.1] tracking-tight max-w-[640px]"
                    >
                        {heading}
                    </Heading>

                    <SubHeading
                        variant="big"
                        className="text-neutral-400 max-w-[440px] font-sans text-[15px] md:text-base leading-relaxed"
                    >
                        {subheading}
                    </SubHeading>
                </div>

                {/* Image grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-16">
                    {items.map(({ image, label, alt }) => (
                        <div key={label} className="flex flex-col gap-5 lg:gap-6">
                            <div className="relative w-full aspect-16/10 overflow-hidden">
                                <Image
                                    src={image}
                                    alt={alt}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <p className="font-mono md:text-xl font-medium tracking-wide text-white/80">
                                {label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-center mt-2">
                    <Link
                        href={"/case-study"}
                        className="inline-flex items-center gap-3 bg-[#131313] px-7 py-3.5 md:px-8 md:py-4 font-mono tracking-wider uppercase text-white hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        {ctaLabel}
                        <ArrowUpRight className="w-[18px] h-[18px]" />
                    </Link>
                </div>
            </Container>
        </section>
    );
}

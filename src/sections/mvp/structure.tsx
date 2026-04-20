import Image from "next/image";
import Container from "@/components/container";
import Heading from "@/components/heading";
import heroImage from "@/assets/images/hero-1.jpg";

const cards = [
    {
        title: "Product Discovery & Scoping",
        body: "We work with founders to clarify the product vision, define features, and prioritize what should be built for the first version.",
    },
    {
        title: "Technical Architecture",
        body: "Our engineers design a scalable architecture so the product can grow without needing to be rebuilt later.",
    },
    {
        title: "UI Foundation",
        body: "Clean, modern interface design focused on usability and product clarity.",
    },
    {
        title: "Structured Development Cycles",
        body: "Development is organized into focused execution sprints to ensure consistent progress.",
    },
    {
        title: "Deployment & Infrastructure",
        body: "Your product is deployed to modern cloud infrastructure with proper configuration and performance optimization.",
    },
    {
        title: "Post-Launch Support",
        body: "After launch, we provide a 30-day support window to fix issues and stabilize the product.",
    },
];

export default function MvpStructure() {
    return (
        <section className="relative w-full overflow-hidden py-20">
            {/* Background image with dark overlay */}
            <div className="absolute inset-0 z-0 brightness-60">
                <Image
                    src={heroImage}
                    alt=""
                    fill
                    className="object-cover object-center grayscale"
                    priority={false}
                    sizes="100vw"
                    aria-hidden="true"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/80" aria-hidden="true" />
                {/* Halftone dot-grid overlay */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-40"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
                        backgroundSize: "4px 4px",
                    }}
                    aria-hidden="true"
                />
            </div>

            {/* Content */}
            <Container className="relative z-10">
                {/* ── Top Area: tag + heading/subtext ── */}
                <div className="flex flex-col gap-10 mb-12">
                    {/* Tag */}
                    <div className="flex items-center gap-2.5 bg-muted px-2 py-1.5 w-fit">
                        <span
                            className="inline-block w-3 h-3 bg-white shrink-0"
                            aria-hidden="true"
                        />
                        <p className="font-mono text-xs xl:text-sm uppercase tracking-widest text-white leading-none">
                            Structure
                        </p>
                    </div>

                    {/* Two-column: heading | subtext */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
                        <Heading as="h2" variant="big" className="text-white leading-tight font-sans lg:text-[40px] font-normal">
                            <span className="text-neutral-400">What&apos;s </span>
                            <span className="">included</span>
                        </Heading>

                        <p className="font-sans text-base xl:text-lg text-white/60 leading-relaxed text-balance">
                            Senior engineers. Clear decisions. Architecture designed for long-term scale.
                        </p>
                    </div>
                </div>

                {/* ── Cards ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {cards.map(({ title, body }) => (
                        <div
                            key={title}
                            className="flex flex-col gap-2 bg-white p-6 min-h-[160px]"
                        >
                            <h3 className="font-mono text-xl font-semibold text-background tracking-tighter leading-snug">
                                {title}
                            </h3>
                            <p className="font-sans text-base text-background/60 leading-relaxed">
                                {body}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
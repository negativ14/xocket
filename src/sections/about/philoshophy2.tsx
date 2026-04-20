import Image from "next/image";
import Container from "@/components/container";
import Heading from "@/components/heading";
import heroImage from "@/assets/images/hero-1.jpg";

const cards = [
    {
        title: "Structured Development",
        body: "Clear systems and processes — not chaotic iteration.",
    },
    {
        title: "Senior Engineering Leadership",
        body: "Strong decisions early prevent costly rebuilds later.",
    },
    {
        title: "AI-Accelerated Workflows",
        body: "Faster execution using modern tools — without sacrificing quality.",
    },
];

export default function AboutPhiloshophy2() {
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
                    <div className="flex items-center gap-2.5 bg-muted px-2.5 py-1.5 w-fit">
                        <span
                            className="inline-block w-2.5 h-2.5 bg-white shrink-0"
                            aria-hidden="true"
                        />
                        <p className="font-mono text-xs xl:text-sm uppercase tracking-widest text-white leading-none mt-0.5">
                            OUR PHILOSOPHY
                        </p>
                    </div>

                    {/* heading */}
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-16 items-end">
                        <Heading as="h2" variant="big" className="font-normal leading-[1.1] tracking-tight">
                            <span className="text-neutral-400">Our Execution Philosophy Focuses On<br /></span>
                            <span className="text-white italic">Three Principles:</span>
                        </Heading>
                    </div>
                </div>

                {/* ── Cards ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {cards.map(({ title, body }) => (
                        <div
                            key={title}
                            className="flex flex-col gap-2 bg-white p-6 min-h-[120px]"
                        >
                            <h3 className="font-mono text-xl font-semibold text-background tracking-tighter leading-snug">
                                {title}
                            </h3>
                            <p className="font-sans text-lg text-background/60 leading-relaxed">
                                {body}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
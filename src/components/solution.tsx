import Image from "next/image";
import Container from "@/components/container";
import Heading from "@/components/heading";
import DownArrow from "@/assets/icons/down-arrow";
import Layers from "@/assets/icons/layers";
import Share from "@/assets/icons/share";
import heroImage from "@/assets/images/hero-1.jpg";
import Eyebrow from "./eyebrow";
import FeatureCard from "./feature-card";

const cards = [
    {
        icon: DownArrow,
        title: "Structured AI Product Development",
        body: "scalable systems with defined processes and consistent execution — ensuring predictable outcomes as you move fast.",
    },
    {
        icon: Layers,
        title: "Senior Engineering Leadership",
        body: "Senior engineers guiding architecture, maintaining quality, and ensuring long-term scalability as your product evolves.",
    },
    {
        icon: Share,
        title: "AI-Accelerated Workflows",
        body: "Faster, efficient iteration cycles powered by modern AI tooling — helping you ship quickly without compromising quality.",
    },
];

export default function Solution() {
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
                <div className="flex flex-col gap-6 mb-12">
                    {/* Tag */}
                    <Eyebrow className="mb-0">
                        Our Solution
                    </Eyebrow>


                    {/* Two-column: heading | subtext */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
                        <Heading as="h2" variant="big" className="text-white leading-tight font-heading lg:text-[40px] font-normal italic">
                            <span className="text-neutral-400 not-italic"> A System Built for{" "}</span>
                            <br />
                            Structured Execution
                        </Heading>

                        <p className="font-sans text-base xl:text-lg text-white/60 leading-relaxed text-balance">
                            A better approach to build products where design, engineering, and
                            scalability are considered from day one.
                        </p>
                    </div>
                </div>

                {/* ── Cards ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {cards.map(({ icon, title, body }) => (
                        <FeatureCard key={title} icon={icon} title={title} body={body} />
                    ))}
                </div>
            </Container>
        </section >
    );
}
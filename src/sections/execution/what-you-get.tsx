import Image from "next/image";
import Container from "@/components/container";
import Heading from "@/components/heading";
import heroImage from "@/assets/images/hero-1.jpg";
import Eyebrow from "@/components/eyebrow";
import { PlanCard, type Plan } from "@/components/work-with-us";

const executionPlan: Plan = {
    title: "Startups receive:",
    subtitle: "This model provides the flexibility to scale development effort based on product needs.",
    features: [
        "Consistent Development Capacity",
        "Sprint-Based Execution",
        "Engineering Oversight",
        "Documentation And Handover"
    ],
    cta: "START MVP PROGRAM",
    href: "#start-mvp",
    featured: true,
};

export default function ExecutionWhatYouGet() {
    return (
        <section className="relative w-full overflow-hidden py-12 md:py-20">
            {/* Background image with dark overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroImage}
                    alt=""
                    fill
                    className="object-cover object-center grayscale brightness-50"
                    sizes="100vw"
                    aria-hidden="true"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
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

            <Container className="relative z-10">
                {/* ── Centered header ── */}
                <div className="flex flex-col items-center text-center gap-5 lg:gap-6 mb-12 lg:mb-16">
                    {/* Tag */}
                    <Eyebrow className="mb-2">
                        WHAT YOU GET
                    </Eyebrow>

                    {/* Heading */}
                    <Heading as="h2" variant="big" className="font-normal leading-tight tracking-tight">
                        <span className="text-neutral-400">Monthly Engagement </span>
                        <span className="text-white italic">Model</span>
                    </Heading>

                    {/* Subtext */}
                    <p className="text-neutral-300 text-[15px] md:text-base max-w-[480px] font-sans leading-relaxed text-balance">
                        Execution Acceleration works through a<br className="hidden md:block" />
                        monthly engagement structure.
                    </p>
                </div>

                {/* ── Core Card ── */}
                <div className="max-w-[420px] w-full mx-auto">
                    <PlanCard plan={executionPlan} />
                </div>
            </Container>
        </section>
    );
}
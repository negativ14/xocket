import Image from "next/image";
import Container from "@/components/container";
import Heading from "@/components/heading";
import heroImage from "@/assets/images/hero-1.jpg";
import Eyebrow from "@/components/eyebrow";
import { PlanCard, type Plan } from "@/components/work-with-us";

const mvpPlan: Plan = {
    title: "MVP Program",
    subtitle: "At the end of the program, you receive a fully working product ready for real users.",
    features: [
        "Working MVP product",
        "Clean Codebase",
        "Product Documentation",
        "Deployment Infrastructure",
        "Technical Handover",
    ],
    cta: "START MVP PROGRAM",
    href: "/contact-us",
    featured: true,
};

export default function Deliverables() {
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
                    <Heading as="h2" variant="big" className="text-white font-normal leading-tight tracking-tight">
                        Deliverables
                    </Heading>

                    {/* Subtext */}
                    <p className="text-neutral-300 text-[15px] md:text-base max-w-[480px] font-sans leading-relaxed text-balance">
                        At the end of the MVP program, founders receive a fully working product ready for real users.
                    </p>
                </div>

                {/* ── Core Card ── */}
                <div className="max-w-[420px] w-full mx-auto">
                    <PlanCard plan={mvpPlan} />
                </div>
            </Container>
        </section>
    );
}
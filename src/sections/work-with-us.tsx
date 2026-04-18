import Image from "next/image";
import Link from "next/link";
import { CircleCheck, ArrowUpRight } from "lucide-react";
import Container from "@/components/container";
import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";
import heroImage from "@/assets/images/hero-1.jpg";

// ── Types ──────────────────────────────────────────────────
interface Plan {
    title: string;
    subtitle: string;
    features: string[];
    cta: string;
    href: string;
    featured?: boolean;
}

// ── Data ───────────────────────────────────────────────────
const plans: Plan[] = [
    {
        title: "MVP Launch Program",
        subtitle: "For founders going from idea to a production-ready product.",
        features: [
            "End-to-end product design + build",
            "Scalable architecture from day one",
            "Fast, structured delivery",
        ],
        cta: "START MVP PROGRAM",
        href: "#mvp",
    },
    {
        title: "Execution Sprints",
        subtitle: "For teams that need to move faster without losing structure.",
        features: [
            "Focused design + development cycles",
            "Continuous iteration and improvement",
            "Clear workflows and rapid delivery",
        ],
        cta: "START MVP PROGRAM",
        href: "#execution",
        featured: true,
    },
    {
        title: "Product Scaling & Optimization",
        subtitle: "For products that need to evolve, stabilize, and scale.",
        features: [
            "Performance and system improvements",
            "UX refinement and feature expansion",
            "Long-term product support",
        ],
        cta: "CONTACT SALES",
        href: "#scaling",
    },
];

// ── Reusable Plan Card ─────────────────────────────────────
function PlanCard({ plan }: { plan: Plan }) {
    const { title, subtitle, features, cta, href, featured } = plan;

    if (featured) {
        // White / inverted card
        return (
            <div className="relative flex flex-col justify-between bg-white p-7">
                {/* Content */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h3 className="font-sans text-xl font-semibold text-background leading-snug mb-2">
                            {title}
                        </h3>
                        <p className="font-sans font-medium text-background/70 leading-relaxed">
                            {subtitle}
                        </p>
                    </div>

                    <ul className="flex flex-col gap-6 mt-8">
                        {features.map((f) => (
                            <li key={f} className="flex items-center gap-4 text-background">
                                <CircleCheck className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                                <span className="font-sans">{f}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA */}
                <Link
                    href={href}
                    className="mt-12 flex items-center justify-between w-full bg-background text-foreground px-5 py-3 font-mono tracking-[0.12em] uppercase hover:opacity-90 transition-opacity duration-200"
                >
                    {cta}
                    <ArrowUpRight className="w-5 h-5" />
                </Link>
            </div>
        );
    }

    // Dark card with corner brackets
    return (
        <div className="relative flex flex-col justify-between bg-[#0E0E0E] p-7">
            {/* Corner L-brackets */}
            <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-foreground/40" />
            <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-foreground/40" />
            <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-foreground/40" />
            <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-foreground/40" />

            {/* Content */}
            <div className="flex flex-col gap-6">
                <div>
                    <h3 className="font-sans text-xl font-semibold text-foreground leading-snug mb-2">
                        {title}
                    </h3>
                    <p className="font-sans text-foreground/50 leading-relaxed">
                        {subtitle}
                    </p>
                </div>

                <ul className="flex flex-col gap-6 mt-8">
                    {features.map((f) => (
                        <li key={f} className="flex items-center gap-4 text-foreground/70">
                            <CircleCheck className="w-4 h-4 shrink-0 text-foreground/40" strokeWidth={1.5} />
                            <span className="font-sans">{f}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* CTA */}
            <Link
                href={href}
                className="mt-12 flex items-center justify-between w-full bg-foreground text-background px-5 py-3 font-mono tracking-[0.12em] uppercase hover:bg-foreground/90 transition-all duration-200"
            >
                {cta}
                <ArrowUpRight className="w-5 h-5" />
            </Link>
        </div>
    );
}

// ── Main Section ───────────────────────────────────────────
export default function WorkWithUs() {
    return (
        <section className="relative w-full overflow-hidden py-20 lg:py-28">
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

            {/* Content */}
            <Container className="relative z-10">
                {/* ── Centered header ── */}
                <div className="flex flex-col items-center text-center gap-6 mb-14">
                    {/* Tag */}
                    <div className="flex items-center gap-2.5 bg-white/10 px-2 py-1.5 w-fit">
                        <span
                            className="inline-block w-3 h-3 bg-white shrink-0"
                            aria-hidden="true"
                        />
                        <p className="font-mono text-xs xl:text-sm uppercase tracking-widest text-white leading-none">
                            Execution Paths
                        </p>
                    </div>

                    {/* Heading */}
                    <Heading as="h2" variant="big" className="text-neutral-400 text-center">
                        How You Can Work
                        <br />
                        With <span className="text-foreground">Us</span>
                    </Heading>

                    {/* Subtext */}
                    <SubHeading
                        variant="big"
                        className="text-white/60 max-w-[580px] font-sans"
                    >
                        We partner with teams that care about building products the
                        right way from the start.
                    </SubHeading>
                </div>

                {/* ── 3-column plan cards ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                    {plans.map((plan) => (
                        <PlanCard key={plan.title} plan={plan} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
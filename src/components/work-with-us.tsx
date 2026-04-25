import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/container";
import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";
import Eyebrow from "@/components/eyebrow";
import heroImage from "@/assets/images/buildings.png";
import { cn } from "@/lib/utils";
import { AnimatedPlanCardContent } from "./animated-plan-card-content";
import { BlueprintCorners } from "./blue-print-corners";

// ── Types ──────────────────────────────────────────────────
export interface Plan {
    title: string;
    subtitle: string;
    features: string[];
    cta: string;
    href: string;
    featured?: boolean;
}

export interface WorkWithUsProps {
    eyebrow: string;
    heading: React.ReactNode;
    subheading: string;
    plans: Plan[];
    /** When true renders the dark image-background section (default for main page).
     *  When false renders a plain transparent section (used on /about). */
    withBackground?: boolean;
    /** Override section className */
    className?: string;
}

// ── PlanCard ───────────────────────────────────────────────
export function PlanCard({ plan }: { plan: Plan }) {
    const { title, subtitle, features, cta, href, featured } = plan;

    if (featured) {
        return (
            <div className="relative flex flex-col justify-between border border-black bg-white p-7">
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-background" />
                <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-background" />
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-background" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-background" />
                <AnimatedPlanCardContent
                    title={title}
                    subtitle={subtitle}
                    features={features}
                    featured={true}
                />
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

    return (
        <div className="relative flex flex-col justify-between bg-[#0E0E0E] p-7">
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-foreground" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-foreground" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-foreground" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-foreground" />
            <AnimatedPlanCardContent
                title={title}
                subtitle={subtitle}
                features={features}
                featured={false}
            />
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
export default function WorkWithUs({
    eyebrow,
    heading,
    subheading,
    plans,
    withBackground = true,
    className,
}: WorkWithUsProps) {
    return (
        <section className={cn("relative w-full overflow-hidden py-20 lg:py-28", className)}>
            {/* Optional dark image background */}
            {withBackground && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroImage}
                        alt=""
                        fill
                        className="object-cover object-center grayscale brightness-50"
                        sizes="100vw"
                        aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
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
            )}

            <Container className="relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center gap-6 mb-14">
                    <Eyebrow className="mb-2">{eyebrow}</Eyebrow>

                    <Heading as="h2" variant="big" className="text-neutral-400 text-center">
                        {heading}
                    </Heading>

                    <SubHeading variant="big" className="text-white/60 max-w-[580px] font-sans">
                        {subheading}
                    </SubHeading>
                </div>

                {/* Plan cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                    {plans.map((plan) => (
                        <PlanCard key={plan.title} plan={plan} />
                    ))}
                </div>
            </Container>
        </section>
    );
}


import Container from "@/components/container";
import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";
import { Plan, PlanCard } from "../work-with-us";
import Eyebrow from "@/components/eyebrow";

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

// ── Main Section ───────────────────────────────────────────
export default function AboutWorkWithUs() {
    return (
        <section className="relative w-full overflow-hidden py-20 lg:py-28">

            <Container className="relative z-10">
                {/* ── Header ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-16">
                    <div className="flex flex-col gap-6">
                        {/* Tag */}
                        <Eyebrow className="mb-2">
                            EXECUTION PATHS
                        </Eyebrow>

                        {/* Heading */}
                        <Heading as="h2" variant="big" className="font-normal leading-[1.1] tracking-tight">
                            <span className="text-neutral-400">How You Can <span className="text-white italic">Work</span><br /></span>
                            <span className="text-white italic">With Us</span>
                        </Heading>
                    </div>

                    {/* Subtext */}
                    <div className="mb-2">
                        <SubHeading
                            variant="big"
                            className="text-white/60 max-w-[580px] font-sans text-left lg:text-left ml-auto"
                        >
                            We partner with teams that care about building products the
                            right way from the start.
                        </SubHeading>
                    </div>
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
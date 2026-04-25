import WorkWithUsSection, { Plan } from "@/components/work-with-us";

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
        href: "/mvp",
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
        href: "/execution",
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
        href: "/contact-us",
    },
];

export default function WorkWithUs() {
    return (
        <WorkWithUsSection
            eyebrow="Execution Paths"
            heading={
                <>
                    How You Can Work
                    <br />
                    With <span className="text-foreground italic">Us</span>
                </>
            }
            subheading="We partner with teams that care about building products the right way from the start."
            plans={plans}
            withBackground={true}
        />
    );
}
import { ArrowRight } from "lucide-react";
import Container from "@/components/container";
import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";
import Eyebrow from "@/components/eyebrow";

const sprintFeatures = [
    "AI-Assisted Development",
    "2-Week Sprint Cycles",
    "Continuous Iteration",
    "Weekly Product Demos",
];

export default function ExecutionHowSprintWork() {
    return (
        <section className="w-full bg-background py-20 lg:py-28">
            <Container>
                {/* ── Top Area: tag + heading/subtext ── */}
                <div className="flex flex-col gap-8 mb-16 lg:mb-20">
                    {/* Tag */}
                    <Eyebrow className="mb-2">
                        OW SPRINT WORK
                    </Eyebrow >

                    {/* Two-column: heading | subtext */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
                        <Heading as="h2" variant="big" className="font-normal tracking-tight max-w-[600px]">
                            <span className="text-neutral-400 block">We use AI + structured sprints</span>
                            <span className="text-white">to move 2–3x faster</span>
                        </Heading>

                        <SubHeading variant="big" className="font-sans text-neutral-400 max-w-[600px]">
                            We combine AI-driven development with structured 2-week sprints to move faster, iterate quickly, and ship production-ready systems.
                        </SubHeading>
                    </div>
                </div>

                {/* ── Sprint Features Row ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                    {sprintFeatures.map((feature) => (
                        <div
                            key={feature}
                            className="flex items-center gap-4 bg-[#111111] px-4 py-3 hover:bg-[#161616] transition-colors duration-200"
                        >
                            <ArrowRight className="w-5 h-5 text-white/70 shrink-0" strokeWidth={1.5} />
                            <span className="font-sans text-lg text-white">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
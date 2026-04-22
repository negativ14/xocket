import Container from "@/components/container";
import Eyebrow from "@/components/eyebrow";
import Heading from "@/components/heading";
import { CheckCircle2 } from "lucide-react";
import React from "react";

const timelineData = [
    {
        week: "Week 1",
        phase: "Product Discovery",
        items: [
            "Product Roadmap",
            "Feature Prioritization",
            "System Architecture Planning",
        ],
    },
    {
        week: "Week 2 – 4",
        phase: "Core Development",
        items: [
            "Frontend Interfaces",
            "Backend Systems",
            "Database Structure",
            "API Integrations",
        ],
    },
    {
        week: "Week 5 – 6",
        phase: "Polishing & Features",
        items: [
            "Authentication",
            "RBAC Implementation",
            "Analytics Integration",
            "Security Checks",
        ],
    },
    {
        week: "Week 7 – 8",
        phase: "Testing & Launch Preparation",
        items: [
            "Deployment",
            "Optimization & Refinements",
            "Performance Testing",
            "Bug Fixing",
        ],
    },
];

const CornerBrackets = () => (
    <>
        <div className="absolute top-[2px] left-[2px] -translate-y-1/2 -translate-x-1/2 w-[10px] h-[10px] border-t-2 border-l-2 border-white" />
        <div className="absolute top-[2px] right-[2px] -translate-y-1/2 translate-x-1/2 w-[10px] h-[10px] border-t-2 border-r-2 border-white" />
        <div className="absolute bottom-[2px] left-[2px] translate-y-1/2 -translate-x-1/2 w-[10px] h-[10px] border-b-2 border-l-2 border-white" />
        <div className="absolute bottom-[2px] right-[2px] translate-y-1/2 translate-x-1/2 w-[10px] h-[10px] border-b-2 border-r-2 border-white" />
    </>
);

export default function MvpTimeline() {
    return (
        <section className="bg-background py-20 lg:py-32 w-full overflow-hidden">
            <Container>
                {/* Header section (Two columns) */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 lg:mb-28">
                    <div className="flex flex-col gap-6">
                        <Eyebrow className="mb-2">
                            Timeline
                        </Eyebrow>
                        <Heading as="h2" variant="big" className="font-normal leading-none tracking-tight">
                            <span className="text-neutral-400 block mb-1.5">MVP Project</span>
                            <span className="text-white block italic">Timeline</span>
                        </Heading>
                    </div>

                    <p className="font-sans text-lg text-neutral-400 lg:text-center lg:pl-12 mx-auto leading-relaxed pb-2 lg:pb-3">
                        A typical MVP build follows a 6–8 week execution timeline.
                    </p>
                </div>

                {/* Timeline Grid */}
                <div className="relative mx-auto">
                    {/* Center vertical line — desktop only */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/15 -translate-x-1/2" />

                    <div className="flex flex-col gap-16 lg:gap-20">
                        {timelineData.map((item, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={item.week}
                                    className={`relative flex w-full ${isEven ? "justify-start" : "justify-end"}`}
                                >
                                    <div className={`w-full md:w-[48%] flex flex-col gap-5 ${isEven ? "pr-10" : "pl-10"}`}>
                                        <div className="flex items-center gap-3">
                                            <span className="shrink-0 w-2.5 h-2.5 bg-white" aria-hidden="true" />
                                            <h3 className="font-mono text-xl font-semibold text-white tracking-wide">
                                                {item.week} : {item.phase}
                                            </h3>
                                        </div>

                                        {/* Card + connector */}
                                        <div className="relative border border-white p-6 md:p-8 bg-transparent w-full">
                                            <CornerBrackets />
                                            <ul className="flex flex-col gap-4">
                                                {item.items.map((listItem) => (
                                                    <li key={listItem} className="flex items-center gap-4">
                                                        <CheckCircle2 className="w-[18px] h-[18px] text-white shrink-0 font-light" strokeWidth={1.2} />
                                                        <span className="font-sans text-lg text-white">
                                                            {listItem}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Dashed horizontal connector to center line — desktop only */}
                                            {isEven ? (
                                                /* Left card → connector goes RIGHT from card edge to center dot */
                                                <>
                                                    {/* Dashed line */}
                                                    <div
                                                        className="hidden md:block absolute top-1/2 -right-15 w-15 -translate-y-1/2"
                                                        style={{
                                                            borderTop: "1px dashed rgba(255,255,255,0.4)",
                                                        }}
                                                    />
                                                    {/* Dot on the center line */}
                                                    <div className="hidden md:block absolute top-1/2 -right-15 w-[18px] h-[18px] rounded-full bg-white border-2 border-white -translate-y-1/2 translate-x-full z-10">
                                                        <div className="w-full h-full rounded-full bg-neutral-400" />
                                                    </div>
                                                </>
                                            ) : (
                                                /* Right card → connector goes LEFT from card edge to center dot */
                                                <>
                                                    {/* Dashed line */}
                                                    <div
                                                        className="hidden md:block absolute top-1/2 -left-15 w-15 -translate-y-1/2"
                                                        style={{
                                                            borderTop: "1px dashed rgba(255,255,255,0.4)",
                                                        }}
                                                    />
                                                    {/* Dot on the center line */}
                                                    <div className="hidden md:block absolute top-1/2 -left-15 w-[18px] h-[18px] rounded-full bg-white border-2 border-white -translate-y-1/2 -translate-x-full z-10" >
                                                        <div className="w-full h-full rounded-full bg-neutral-400" />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
import Container from "@/components/container";
import Eyebrow from "./eyebrow";
import { AnimatedList, AnimatedListItem } from "@/components/animated-list";

const faults = [
    { index: "01", text: "Design and engineering fall out of sync." },
    { index: "02", text: "Speed is prioritized over structure." },
    { index: "03", text: "What gets built isn\u2019t designed to scale." },
    { index: "04", text: "Technical debt accumulates and slows everything down." },
];

export default function Problem() {
    return (
        <section className="w-full bg-background py-20 lg:py-28">
            <Container>
                <div className="flex flex-col gap-4 md:gap-8">
                    <Eyebrow className="mb-2">The Problem</Eyebrow>

                    {/* Lead */}
                    <p className="font-sans text-lg md:text-xl text-pretty text-foreground/55 max-w-2xl leading-relaxed">
                        Most startup products don&apos;t fail because of bad ideas, they fail
                        because execution is fragmented.
                    </p>

                    {/* Fault lines */}
                    <AnimatedList className="flex flex-col divide-y divide-foreground/8">
                        {faults.map((fault) => (
                            <AnimatedListItem key={fault.index}>
                                <div className="flex items-center gap-6 py-5 group">
                                    <span className="font-mono text-xs text-foreground/20 tracking-widest shrink-0 w-6 select-none">
                                        {fault.index}
                                    </span>
                                    <p className="font-sans text-xl md:text-2xl lg:text-[26px] tracking-tight text-foreground leading-snug transition-colors duration-300 group-hover:text-foreground/80">
                                        {fault.text}
                                    </p>
                                </div>
                            </AnimatedListItem>
                        ))}
                    </AnimatedList>
                </div>
            </Container>
        </section>
    );
}

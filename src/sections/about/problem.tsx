import Container from "@/components/container";
import Eyebrow from "@/components/eyebrow";
import Heading from "@/components/heading";
import Image from "next/image";
import LogoIcon from "@/assets/images/logo-icon.svg";
import { AnimatedList, AnimatedListItem } from "@/components/animated-list";

const faults = [
    {
        index: "01",
        text: "Design and engineering fall out of sync.",
    },
    {
        index: "02",
        text: "Speed is prioritized over structure.",
    },
    {
        index: "03",
        text: "What gets built isn\u2019t designed to scale.",
    },
];

export default function AboutProblem() {
    return (
        <section className="py-20 lg:py-28 w-full overflow-hidden">
            <Container>
                {/* ── Header ── */}
                <div className="flex flex-col gap-6 md:gap-12 mb-12">
                    <Eyebrow className="mb-2">THE PROBLEM</Eyebrow>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-start">
                        <Heading
                            as="h2"
                            variant="big"
                            className="font-normal leading-[1.1] tracking-tight"
                        >
                            <span className="text-neutral-400">Why Most Products </span>
                            <span className="text-foreground italic">Fail</span>
                        </Heading>

                        {/* Lead */}
                        <p className="font-sans text-lg text-foreground/60 leading-relaxed lg:pt-2 max-w-[480px]">
                            Most products don&apos;t fail because of bad ideas, they fail
                            because execution is fragmented.
                        </p>
                    </div>
                </div>

                {/* ── Fault lines ── */}
                <AnimatedList className="flex flex-col divide-y divide-foreground/8 mb-0">
                    {faults.map((fault) => (
                        <AnimatedListItem key={fault.index}>
                            <div className="flex items-center gap-6 py-6 group">
                                <span className="font-mono text-xs text-foreground/20 tracking-widest shrink-0 w-6 select-none">
                                    {fault.index}
                                </span>
                                <p className="font-sans text-xl md:text-2xl lg:text-[28px] tracking-tight text-foreground/50 leading-snug transition-colors duration-300 group-hover:text-foreground/80">
                                    {fault.text}
                                </p>
                            </div>
                        </AnimatedListItem>
                    ))}
                </AnimatedList>

                {/* ── Resolution statement ── */}
                <div className="border-t border-foreground/10 pt-10 mt-0 flex items-center justify-between gap-6 flex-wrap">
                    <p className="font-sans font-medium text-2xl md:text-3xl lg:text-[36px] tracking-tight text-foreground">
                        We exist to fix that.
                    </p>
                    <Image
                        src={LogoIcon}
                        alt="Xocket"
                        style={{ width: "auto", height: "36px" }}
                        className="opacity-60"
                    />
                </div>
            </Container>
        </section>
    );
}
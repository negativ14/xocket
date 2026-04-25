import { ElementType } from "react";
import Container from "@/components/container";
import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";
import Eyebrow from "@/components/eyebrow";
import { FrameMarker } from "@/components/frame";
import { cn } from "@/lib/utils";
import { WorkCardText } from "./work-card-text";
// ── Types ──────────────────────────────────────────────────
export interface WorkCard {
    icon: ElementType;
    title: string;
    body: string;
}

export interface WhoWeWorkWithProps {
    eyebrow: string;
    heading: React.ReactNode;
    subheading: string;
    cards: WorkCard[];
    className?: string;
}

// ── Internal: single card ──────────────────────────────────
function WorkCardItem({ icon: Icon, title, body, isLast }: WorkCard & { isLast: boolean }) {
    return (
        <div
            className={cn(
                "relative flex flex-col gap-4 lg:gap-6 p-4 lg:p-6 h-46 lg:h-[274px] bg-[#0E0E0E] overflow-hidden group",
                !isLast && "border-b sm:border-r border-foreground/10"
            )}
        >
            <Icon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-foreground shrink-0" strokeWidth={1.5} />
            <FrameMarker className="size-6 stroke-2" />
            <WorkCardText title={title} body={body} />
        </div>
    );
}

// ── Internal: corner brackets ──────────────────────────────
function CornerBrackets() {
    const size = "w-3 h-3";
    return (
        <>
            <span className={`absolute top-0 left-0 ${size} border-t border-l border-foreground/30`} />
            <span className={`absolute top-0 right-0 ${size} border-t border-r border-foreground/30`} />
            <span className={`absolute bottom-0 left-0 ${size} border-b border-l border-foreground/30`} />
            <span className={`absolute bottom-0 right-0 ${size} border-b border-r border-foreground/30`} />
        </>
    );
}

// ── Internal: T-junction tick marks ───────────────────────
function TickMarks({ count }: { count: number }) {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => {
                const pct = ((i + 1) / (count + 1)) * 100;
                return (
                    <span key={i}>
                        <span
                            className="absolute top-0 w-px h-2 bg-foreground/30 -translate-x-1/2"
                            style={{ left: `${pct}%` }}
                        />
                        <span
                            className="absolute bottom-0 w-px h-2 bg-foreground/30 -translate-x-1/2"
                            style={{ left: `${pct}%` }}
                        />
                    </span>
                );
            })}
        </>
    );
}

// ── Main exported component ────────────────────────────────
export default function WhoWeWorkWith({
    eyebrow,
    heading,
    subheading,
    cards,
    className,
}: WhoWeWorkWithProps) {
    return (
        <section className={cn("w-full bg-background py-20 lg:py-28", className)}>
            <Container>
                {/* Header — centered */}
                <div className="flex flex-col items-center text-center gap-6 mb-14">
                    <Eyebrow>{eyebrow}</Eyebrow>

                    <Heading as="h2" variant="big" className="leading-tight">
                        {heading}
                    </Heading>

                    <SubHeading variant="big" className="font-sans text-foreground/80 max-w-[580px]">
                        {subheading}
                    </SubHeading>
                </div>

                {/* Cards with border + corner brackets */}
                <div className="relative border border-foreground/15">
                    <CornerBrackets />
                    <TickMarks count={cards.length - 1} />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {cards.map((card, i) => ( 
                            <WorkCardItem
                                key={card.title}
                                {...card}
                                isLast={i === cards.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

import Container from "@/components/container";
import Heading from "@/components/heading";
import Bulb from "@/assets/icons/bulb";
import Peoples from "@/assets/icons/peoples";
import { TrendingUp, Building2 } from "lucide-react";
import { ElementType } from "react";
import { FrameMarker } from "@/components/frame";
import SubHeading from "@/components/sub-heading";
import Eyebrow from "@/components/eyebrow";

// ── Types ──────────────────────────────────────────────────
interface Card {
    icon: ElementType;
    title: string;
    body: string;
}

// ── Data ───────────────────────────────────────────────────
const cards: Card[] = [
    {
        icon: Bulb,
        title: "Growing Startup Teams",
        body: "Moving fast, but need structure to scale without breaking the product.",
    },
    {
        icon: Peoples,
        title: "Product Teams Under Pressure",
        body: "Shipping fast while maintaining performance, reliability, and quality.",
    },
    {
        icon: TrendingUp,
        title: "Venture-Backed Companies",
        body: "Scaling products that require performance, reliability, and long-term stability.",
    },
    {
        icon: Building2,
        title: "Enterprise Innovation Teams",
        body: "Products that must meet compliance and system-level requirements.",
    },
];

// ── Reusable Card ──────────────────────────────────────────
function WorkCard({ icon: Icon, title, body, isLast }: Card & { isLast: boolean }) {
    return (
        <div
            className={`relative flex flex-col gap-10 p-7 h-[274px] bg-[#0E0E0E] overflow-hidden group ${!isLast ? "border-r border-foreground/10" : ""}`}
        >
            {/* Icon */}
            <Icon className="w-10 h-10 text-foreground" strokeWidth={1.5} />

            <FrameMarker className="size-6 stroke-2" />

            {/* Text */}
            <div className="flex flex-col gap-2.5 mt-6">
                <h3 className="font-sans text-xl font-semibold text-foreground leading-snug">
                    {title}
                </h3>
                <p className="font-sans text-foreground/50 leading-relaxed">
                    {body}
                </p>
            </div>
        </div>
    );
}

// ── Corner bracket helper ──────────────────────────────────
function CornerBrackets() {
    const size = "w-3 h-3";
    return (
        <>
            {/* Top-left */}
            <span className={`absolute top-0 left-0 ${size} border-t border-l border-foreground/30`} />
            {/* Top-right */}
            <span className={`absolute top-0 right-0 ${size} border-t border-r border-foreground/30`} />
            {/* Bottom-left */}
            <span className={`absolute bottom-0 left-0 ${size} border-b border-l border-foreground/30`} />
            {/* Bottom-right */}
            <span className={`absolute bottom-0 right-0 ${size} border-b border-r border-foreground/30`} />
        </>
    );
}

// ── T-junction tick marks between cards ────────────────────
function TickMarks({ count }: { count: number }) {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => {
                const pct = ((i + 1) / (count + 1)) * 100;
                return (
                    <span key={i}>
                        {/* Top tick */}
                        <span
                            className="absolute top-0 w-px h-2 bg-foreground/30 -translate-x-1/2"
                            style={{ left: `${pct}%` }}
                        />
                        {/* Bottom tick */}
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

// ── Main Section ───────────────────────────────────────────
export default function ExecutionWhoWeWorkWith() {
    return (
        <section className="w-full bg-background py-20 lg:py-28">
            <Container>
                {/* ── Header — centered ── */}
                <div className="flex flex-col items-center text-center gap-6 mb-14">
                    {/* Tag */}
                    <Eyebrow className="mb-2">
                        Who We Work For
                    </Eyebrow>

                    {/* Heading */}
                    <Heading as="h2" variant="big" className="leading-tight">
                        <span className="text-neutral-400">Who We Work </span>
                        <span className="text-foreground italic">With</span>
                    </Heading>

                    {/* Subtext */}
                    <SubHeading variant="big" className="font-sans text-foreground/80 max-w-[580px]">
                        We partner with teams that care about building products the
                        right way from the start.
                    </SubHeading>
                </div>

                {/* ── Cards with border + corner brackets ── */}
                <div className="relative border border-foreground/15">
                    <CornerBrackets />
                    <TickMarks count={3} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -space-x-0.5">
                        {cards.map((card, i) => (
                            <WorkCard
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
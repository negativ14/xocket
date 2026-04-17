import { ElementType } from "react";
import {
    Clock,
    PenLine,
    Rocket,
    TriangleAlert,
    Shield,
    ShieldCheck,
    RefreshCw,
} from "lucide-react";
import Container from "@/components/container";
import { FrameMarker } from "@/components/frame";
import Layers from "@/assets/icons/layers";
import DownArrow from "@/assets/icons/down-arrow";
import Heading from "@/components/heading";
import Logo from "@/assets/icons/logo";
import LogoIcon from "@/assets/images/logo-icon.svg";
import Image from "next/image";


// ── Types ──────────────────────────────────────────────────
interface ComparisonRow {
    typicalIcon: ElementType;
    typicalText: string;
    ourIcon: ElementType;
    ourText: string;
}

interface StatItem {
    value: string;
    label: string;
}

// ── Data ───────────────────────────────────────────────────
const rows: ComparisonRow[] = [
    {
        typicalIcon: Clock,
        typicalText: "Chasing speed with random AI tools",
        ourIcon: Clock,
        ourText: "AI-accelerated, engineering-first execution",
    },
    {
        typicalIcon: PenLine,
        typicalText: "Design and development happen in silos",
        ourIcon: PenLine,
        ourText: "Design and engineering run in parallel",
    },
    {
        typicalIcon: Rocket,
        typicalText: "Built for quick launch",
        ourIcon: Layers,
        ourText: "Built for long-term scale",
    },
    {
        typicalIcon: TriangleAlert,
        typicalText: "Technical debt accumulates early",
        ourIcon: ShieldCheck,
        ourText: "Clean, structured systems from day one",
    },
    {
        typicalIcon: Shield,
        typicalText: "Compliance handled later (or ignored)",
        ourIcon: ShieldCheck,
        ourText: "Compliance considered from the start",
    },
    {
        typicalIcon: Clock,
        typicalText: "Slower iteration over time",
        ourIcon: RefreshCw,
        ourText: "Faster iteration with stability",
    },
];

const stats: StatItem[] = [
    { value: "50%", label: "Faster Product Delivery" },
    { value: "30%", label: "More Capital-Efficient" },
];

// ── Reusable row item ──────────────────────────────────────
function ComparisonItem({
    icon: Icon,
    text,
    muted = false,
}: {
    icon: ElementType;
    text: string;
    muted?: boolean;
}) {
    return (
        <div
            className={`flex items-center gap-4 py-4 last:border-b-0 ${muted ? "text-foreground/60" : "text-foreground"}`}
        >
            <Icon className="w-5 h-5 shrink-0" strokeWidth={1.5} />
            <span className="font-sans text-xl leading-snug">{text}</span>
        </div>
    );
}

// ── Reusable stat block ────────────────────────────────────
function Stat({ value, label }: StatItem) {
    return (
        <div className="flex flex-col items-center gap-1.5">
            <span className="font-sans text-[40px] font-medium text-foreground">{value}</span>
            <span className="font-sans text-lg text-foreground/80">{label}</span>
        </div>
    );
}

// ── Main Section ───────────────────────────────────────────
export default function Comparison() {
    return (
        <section className="w-full bg-background py-20 lg:py-28">
            <Container>
                {/* ── Header: tag + 2-col (heading | subtext) ── */}
                <div className="flex flex-col gap-8 mb-14">
                    {/* Tag */}
                    <div className="flex items-center gap-2.5 bg-muted px-2 py-1.5 w-fit">
                        <span
                            className="inline-block w-3 h-3 bg-foreground shrink-0"
                            aria-hidden="true"
                        />
                        <p className="font-mono text-xs xl:text-sm uppercase tracking-widest text-foreground leading-none">
                            We vs Others
                        </p>
                    </div>

                    {/* Two-column: heading | subtext */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                        {/* Mixed-typography heading */}
                        <Heading variant="big" className="text-neutral-400 lg:text-[48px]">
                            <span className="text-neutral-400">Move </span>
                            <span className="font-heading text-foreground">Faster </span>
                            Without Breaking
                            <br />
                            Your{" "}
                            <span className="font-heading text-foreground">Product</span>
                        </Heading>

                        <p className="font-sans text-lg text-foreground/80 leading-relaxed lg:pt-2 max-w-[480px]">
                            Most teams optimize for speed and pay for it later. We optimize for speed
                            and structure from the start.
                        </p>
                    </div>
                </div>

                {/* ── Comparison columns ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                    {/* Left: Typical Approach */}
                    <div className="flex flex-col gap-4 justify-end">
                        <p className="font-mono text-xl text-foreground tracking-wider">
                            Typical Approach
                        </p>

                        {/* Box with corner brackets */}
                        <div className="relative border border-foreground/15 px-6 py-2">
                            {/* Corner L-brackets */}
                            <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-foreground/30" />
                            <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-foreground/30" />
                            <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-foreground/30" />
                            <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-foreground/30" />

                            {rows.map((row) => (
                                <ComparisonItem
                                    key={row.typicalText}
                                    icon={row.typicalIcon}
                                    text={row.typicalText}
                                    muted
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Our Approach */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <Image src={LogoIcon} alt="logo" className="h-10 w-10" />
                            <p className="font-mono text-xl text-foreground tracking-wider">
                                Our Approach
                            </p>
                        </div>

                        {/* Box with FrameMarker Plus corners + full border */}
                        <div className="relative border border-foreground bg-[#0E0E0E] px-6 py-2 group overflow-hidden">
                            <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-foreground" />
                            <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-foreground" />
                            <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-foreground" />
                            <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-foreground" />

                            {rows.map((row) => (
                                <ComparisonItem
                                    key={row.ourText}
                                    icon={row.ourIcon}
                                    text={row.ourText}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Stats ── */}
                <div className="flex items-center justify-center gap-24">
                    {stats.map((stat) => (
                        <Stat key={stat.label} {...stat} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
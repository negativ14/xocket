import Image from "next/image";
import Link from "next/link";
import { CircleCheck, ArrowUpRight } from "lucide-react";
import Container from "@/components/container";
import Heading from "@/components/heading";
import heroImage from "@/assets/images/hero-1.jpg";
import Eyebrow from "@/components/eyebrow";

const deliverablesData = [
    "Consistent Development Capacity",
    "Sprint-Based Execution",
    "Engineering Oversight",
    "Documentation And Handover"
];

export default function ExecutionWhatYouGet() {
    return (
        <section className="relative w-full overflow-hidden py-12 md:py-20">
            {/* Background image with dark overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroImage}
                    alt=""
                    fill
                    className="object-cover object-center grayscale brightness-50"
                    sizes="100vw"
                    aria-hidden="true"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
                {/* Halftone dot-grid overlay */}
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

            <Container className="relative z-10">
                {/* ── Centered header ── */}
                <div className="flex flex-col items-center text-center gap-5 lg:gap-6 mb-12 lg:mb-16">
                    {/* Tag */}
                    <Eyebrow className="mb-2">
                        WHAT YOU GET
                    </Eyebrow>

                    {/* Heading */}
                    <Heading as="h2" variant="big" className="font-normal leading-tight tracking-tight">
                        <span className="text-neutral-400">Monthly Engagement </span>
                        <span className="text-white italic">Model</span>
                    </Heading>

                    {/* Subtext */}
                    <p className="text-neutral-300 text-[15px] md:text-base max-w-[480px] font-sans leading-relaxed text-balance">
                        Execution Acceleration works through a<br className="hidden md:block" />
                        monthly engagement structure.
                    </p>
                </div>

                {/* ── Core Card ── */}
                <div className="relative max-w-[420px] w-full mx-auto">
                    {/* Corner accents */}
                    <div className="absolute top-[2px] left-[2px] -translate-y-1/2 -translate-x-1/2 w-[10px] h-[10px] border-t-2 border-l-2 border-white z-20 pointer-events-none" />
                    <div className="absolute top-[2px] right-[2px] -translate-y-1/2 translate-x-1/2 w-[10px] h-[10px] border-t-2 border-r-2 border-white z-20 pointer-events-none" />
                    <div className="absolute bottom-[2px] left-[2px] translate-y-1/2 -translate-x-1/2 w-[10px] h-[10px] border-b-2 border-l-2 border-white z-20 pointer-events-none" />
                    <div className="absolute bottom-[2px] right-[2px] translate-y-1/2 translate-x-1/2 w-[10px] h-[10px] border-b-2 border-r-2 border-white z-20 pointer-events-none" />

                    {/* Card Content */}
                    <div className="relative bg-white w-full flex flex-col p-8 md:p-10">
                        <div className="mb-8 flex flex-col gap-2">
                            <p className="font-sans font-semibold text-[17px] text-background">
                                Startups receive:
                            </p>
                            <p className="font-sans text-[15px] leading-snug tracking-tight text-neutral-700">
                                This model provides the flexibility to scale<br />
                                development effort based on product needs.
                            </p>
                        </div>

                        <ul className="flex flex-col gap-5">
                            {deliverablesData.map((item) => (
                                <li key={item} className="flex items-center gap-4 text-background">
                                    <CircleCheck className="w-[20px] h-[20px] shrink-0 font-light" strokeWidth={1.2} />
                                    <span className="font-sans">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="#start-mvp"
                            className="mt-12 flex items-center justify-between w-full bg-background text-foreground px-5 py-3 font-mono tracking-[0.12em] uppercase hover:opacity-90 transition-opacity duration-200"
                        >
                            START MVP PROGRAM
                            <ArrowUpRight className="w-[18px] h-[18px]" />
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
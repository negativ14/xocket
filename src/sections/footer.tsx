import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/container";
import Heading from "@/components/heading";
import SubHeading from "@/components/sub-heading";
import LogoIcon from "@/assets/images/logo.svg";
import heroImage from "@/assets/images/hero-1.jpg";

// ── Nav Data ────────────────────────────────────────────────
const navLinks = [
    { label: "Home", href: "/" },
    { label: "How We Works", href: "#how-we-work" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "About", href: "#about" },
];

const serviceLinks = [
    { label: "MVP Launch Program", href: "#mvp" },
    { label: "Executions", href: "#execution" },
];

const supportLinks = [
    { label: "Help center", href: "#help" },
    { label: "+1 (999) 888-77-6", href: "tel:+19998887776" },
    { label: "xocket@gmail.com", href: "mailto:xocket@gmail.com" },
];

// ── Footer Link Column ──────────────────────────────────────
function FooterColumn({
    title,
    links,
}: {
    title: string;
    links: { label: string; href: string }[];
}) {
    return (
        <div className="flex flex-col gap-4">
            <p className="font-sans text-lg font-medium text-foreground">{title}</p>
            <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                    <li key={label}>
                        <Link
                            href={href}
                            className="font-sans text-foreground/60 hover:text-foreground transition-colors duration-200"
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// ── Main Footer ─────────────────────────────────────────────
export default function Footer() {
    return (
        <footer className="w-full bg-background">
            {/* ── CTA Section ── */}
            <div className="relative w-full overflow-hidden py-28 lg:py-36">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroImage}
                        alt=""
                        fill
                        className="object-cover object-center grayscale brightness-[0.3]"
                        sizes="100vw"
                        aria-hidden="true"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
                    {/* Halftone dot-grid overlay */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-50"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
                            backgroundSize: "4px 4px",
                        }}
                        aria-hidden="true"
                    />
                </div>

                {/* CTA Content */}
                <Container className="relative z-10 flex flex-col items-center text-center gap-8">
                    {/* Tag */}
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-3 bg-muted px-3 py-2 hover:bg-white/15 transition-colors duration-200"
                    >
                        <span
                            className="inline-block w-3 h-3 bg-white shrink-0"
                            aria-hidden="true"
                        />
                        <span className="font-mono text-xs xl:text-sm uppercase tracking-widest text-white leading-none">
                            Start a Conversation
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-white" />
                    </Link>

                    {/* Heading */}
                    <Heading as="h2" variant="big" className="text-neutral-400 text-center max-w-[700px]">
                        Let&apos;s Build Something That
                        <br />
                        Actually{" "}
                        <span className="italic text-white">Scales</span>
                    </Heading>

                    {/* Subtext */}
                    <SubHeading
                        variant="big"
                        className="text-white/60 max-w-[640px] font-sans text-center"
                    >
                        Whether you&apos;re starting from scratch or scaling an existing product,
                        we&apos;ll help you move fast with structure, clarity, and long-term stability.
                    </SubHeading>

                    {/* CTA Button */}
                    <Link
                        href="#strategy-call"
                        className="inline-flex items-center gap-3 bg-foreground px-8 py-4 font-mono uppercase text-background transition-all duration-200 mt-2"
                    >
                        Book A Strategy Call
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </Container>
            </div>

            {/* ── Nav / Links Section ── */}
            <div className="border-t border-foreground/10 py-14 pt-20">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                        {/* Logo */}
                        <div className="flex items-start">
                            <Image src={LogoIcon} alt="Xocket" className="h-10 w-auto" />
                        </div>

                        {/* Navigation */}
                        <FooterColumn title="Navigation" links={navLinks} />

                        {/* Services */}
                        <FooterColumn title="Services" links={serviceLinks} />

                        {/* Support */}
                        <FooterColumn title="Support" links={supportLinks} />
                    </div>
                </Container>
            </div>

            {/* ── Bottom Bar ── */}
            <div className="border-t border-foreground/10 py-6 pb-10">
                <Container className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="font-mono text-foreground/50">
                        © 2026 Xocket
                    </p>
                    <div className="flex items-center gap-6">
                        <Link
                            href="#terms"
                            className="font-mono text-foreground hover:text-foreground transition-colors duration-200"
                        >
                            Terms
                        </Link>
                        <Link
                            href="#privacy"
                            className="font-mono text-foreground hover:text-foreground transition-colors duration-200"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </Container>
            </div>
        </footer>
    );
}
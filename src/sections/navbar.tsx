"use client";

import Link from "next/link";
import Image from "next/image";
import LogoPng from "@/assets/images/logo-image.png";
import LogoSvg from "@/assets/images/logo.svg";
import Container from "@/components/container";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "MVP", href: "/mvp" },
    { label: "Execution", href: "/execution" },
    { label: "Case Studies", href: "/case-study" },
    { label: "About", href: "/about" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [svgLoaded, setSvgLoaded] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full bg-background border-b border-border/40">
            <Container>
                <nav className="flex items-center justify-between py-7" aria-label="Main navigation">
                    {/* Logo — PNG loads instantly (priority), SVG crossfades in once ready */}
                    <Link href="/" aria-label="Xocket home" className="relative shrink-0 block h-10">
                        {/* Low-res PNG: visible immediately, fades out when SVG is ready */}
                        <Image
                            src={LogoPng}
                            alt="Xocket logo"
                            height={80}
                            width={180}
                            priority
                            className={`h-10 w-auto transition-opacity duration-400 ${
                                svgLoaded ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        {/* High-res SVG: loads silently, crossfades in on top */}
                        <Image
                            src={LogoSvg}
                            alt="Xocket logo"
                            height={80}
                            width={180}
                            onLoad={() => setSvgLoaded(true)}
                            className={`absolute inset-0 h-10 w-auto transition-opacity duration-400 ${
                                svgLoaded ? "opacity-100" : "opacity-0"
                            }`}
                        />
                    </Link>

                    {/* Center Nav Links — hidden on mobile */}
                    <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => {
                            const isActive = link.href.startsWith("/")
                                ? pathname === link.href
                                : false;
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={[
                                            "font-mono tracking-wide transition-colors duration-200 relative pb-0.5",
                                            isActive
                                                ? "text-foreground"
                                                : "text-muted-foreground hover:text-foreground",
                                        ].join(" ")}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact-us"
                            className="hidden md:inline-flex items-center justify-center bg-foreground px-2 py-2.5 font-mono uppercase text-background hover:bg-foreground hover:text-background transition-colors duration-200"
                        >
                            Book a Call
                        </Link>

                        {/* Mobile hamburger */}
                        <button
                            className="md:hidden flex flex-col gap-1.5 p-1"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            <span className={`block h-px w-6 bg-foreground transition-transform duration-200 ${isOpen ? "translate-y-2.5 rotate-45" : ""}`} />
                            <span className={`block h-px w-6 bg-foreground transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`} />
                            <span className={`block h-px w-6 bg-foreground transition-transform duration-200 ${isOpen ? "-translate-y-2.5 -rotate-45" : ""}`} />
                        </button>
                    </div>
                </nav>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden border-t border-border/40 py-6 flex flex-col gap-4">
                        {navLinks.map((link) => {
                            const isActive = link.href.startsWith("/")
                                ? pathname === link.href
                                : false;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={[
                                        "font-mono text-sm tracking-wide transition-colors duration-200 uppercase",
                                        isActive
                                            ? "text-foreground"
                                            : "text-foreground/80 hover:text-foreground",
                                    ].join(" ")}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <Link
                            href="#book-a-call"
                            className="mt-2 inline-flex items-center justify-center border border-foreground px-5 py-3 font-mono text-xs tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-colors duration-200 self-start"
                        >
                            Book a Call
                        </Link>
                    </div>
                )}
            </Container>
        </header>
    );
}
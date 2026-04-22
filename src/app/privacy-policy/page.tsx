import Link from "next/link";
import Container from "@/components/container";

// ── Section data ─────────────────────────────────────────────
const sections = [
    {
        title: "Information We Collect",
        body: `Xocket ("we", "us", "our") collects information you provide directly — such as your name, email address, company name, and any details you share through our contact or booking forms. We also collect basic usage data (page views, device type, browser) to understand how visitors interact with our site and improve the experience.`,
    },
    {
        title: "How We Use Your Information",
        body: `We use the information we collect to respond to enquiries, schedule strategy calls, and communicate about potential or ongoing engagements. We do not sell, rent, or trade your personal information to third parties. Your data is only ever used to serve you better.`,
    },
    {
        title: "Cookies & Analytics",
        body: `Our website may use cookies and third-party analytics tools (such as Vercel Analytics) to collect aggregated, anonymised usage statistics. These help us understand which pages perform well and where we can improve. You can disable cookies through your browser settings at any time.`,
    },
    {
        title: "Data Retention",
        body: `We retain personal information only for as long as necessary to fulfil the purpose for which it was collected, or as required by law. Enquiry data submitted through our contact forms is retained for a maximum of 24 months unless an active engagement exists.`,
    },
    {
        title: "Third-Party Services",
        body: `We may use third-party services to operate our business — including but not limited to email delivery, scheduling tools, and analytics platforms. These providers process data on our behalf and are bound by their own privacy policies. We choose only reputable providers with strong data protection standards.`,
    },
    {
        title: "Your Rights",
        body: `You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise any of these rights, please reach out to us directly at the contact details below. We will respond within 30 days.`,
    },
    {
        title: "Contact",
        body: null,
        contact: {
            text: "If you have questions about this policy or how your data is handled, reach out at",
            email: "xocket@gmail.com",
        },
    },
];

// ── Page ─────────────────────────────────────────────────────
export default function PrivacyPolicyPage() {
    return (
        <>
            <main className="min-h-screen w-full bg-background">
                <Container>
                    <div className="max-w-[1000px] py-8 md:py-12">

                        {/* Brand slug */}
                        <p className="font-mono tracking-widest uppercase text-foreground mb-12">
                            — Xocket
                        </p>

                        {/* Title */}
                        <h1 className="font-mono text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
                            Privacy Policy
                        </h1>

                        {/* Date badge */}
                        <p className="font-mono text-xs tracking-widest uppercase text-foreground/40 mb-8">
                            Last Updated — April 2026
                        </p>

                        {/* Intro */}
                        <p className="font-mono leading-7 text-foreground/70 mb-10">
                            Xocket operates the xocket.com website and related services. This page
                            informs you of our policies regarding the collection, use, and disclosure
                            of personal information when you interact with us.
                        </p>

                        {/* Sections */}
                        <div className="flex flex-col">
                            {sections.map((section) => (
                                <div key={section.title}>
                                    {/* Horizontal rule */}
                                    <div className="w-full h-px bg-foreground/10 mb-10" />

                                    {/* Section heading */}
                                    <h2 className="font-mono text-lg font-semibold tracking-widest uppercase text-foreground mb-5">
                                        {section.title}
                                    </h2>

                                    {/* Body */}
                                    {section.body && (
                                        <p className="font-mono leading-7 text-foreground/70 mb-10">
                                            {section.body}
                                        </p>
                                    )}

                                    {/* Contact variant */}
                                    {section.contact && (
                                        <p className="font-mono leading-7 text-foreground/70 mb-10">
                                            {section.contact.text}{" "}
                                            <Link
                                                href={`mailto:${section.contact.email}`}
                                                className="text-foreground underline underline-offset-4 hover:text-foreground/70 transition-colors duration-200"
                                            >
                                                {section.contact.email}
                                            </Link>
                                        </p>
                                    )}
                                </div>
                            ))}

                            {/* Final rule */}
                            <div className="w-full h-px bg-foreground/10" />
                        </div>

                        {/* Bottom strip */}
                        <div className="flex flex-col sm:flex-row text-sm items-start sm:items-center justify-between gap-4 pt-8 mt-2">
                            <p className="font-mono text-foreground/40 tracking-wide">
                                AI-accelerated execution for modern startups.
                            </p>
                            <Link
                                href="mailto:xocket@gmail.com"
                                className="font-mono text-foreground/40 underline underline-offset-4 hover:text-foreground/70 transition-colors duration-200"
                            >
                                xocket@gmail.com
                            </Link>
                        </div>
                    </div>
                </Container>
            </main>
        </>
    );
}
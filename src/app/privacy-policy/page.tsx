import Link from "next/link";
import Container from "@/components/container";

// ── Section data ─────────────────────────────────────────────
const sections = [
    {
        title: "1. Information We Collect",
        body: "We may collect basic information such as your name, email address, and usage data when you use our platform. This helps us improve our services and provide a better experience.",
    },
    {
        title: "2. How We Use Information",
        body: "We use your information to:\n● Operate and improve Xocket\n● Communicate with you\n● Provide customer support\n● Ensure platform security",
    },
    {
        title: "3. Data Sharing",
        body: "We do not sell your personal data. We may share limited information with trusted third-party services only when necessary to operate our platform (e.g., analytics, payments, or infrastructure).",
    },
    {
        title: "4. Data Security",
        body: "We take reasonable measures to protect your data from unauthorized access, loss, or misuse.",
    },
    {
        title: "5. Cookies & Tracking",
        body: "Xocket may use cookies or similar technologies to enhance user experience and analyze usage.",
    },
    {
        title: "6. Your Rights",
        body: "You can request access, correction, or deletion of your personal data by contacting us.",
    },
    {
        title: "7. Updates",
        body: "We may update this policy from time to time. Continued use of Xocket means you accept the updated policy.",
    },
    {
        title: "8. Contact",
        body: null,
        contact: {
            text: "If you have any questions, contact us at:",
            email: "vanshpatel@xocket.sh",
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
                            At Xocket, we value your privacy and are committed to protecting your personal information.
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
                                        <p className="font-mono leading-7 text-foreground/70 mb-10 whitespace-pre-wrap">
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
                                href="mailto:vanshpatel@xocket.sh"
                                className="font-mono text-foreground/40 underline underline-offset-4 hover:text-foreground/70 transition-colors duration-200"
                            >
                                vanshpatel@xocket.sh
                            </Link>
                        </div>
                    </div>
                </Container>
            </main>
        </>
    );
}
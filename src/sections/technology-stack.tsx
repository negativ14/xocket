import Container from "@/components/container";
import Eyebrow from "@/components/eyebrow";
import Heading from "@/components/heading";

// ── Data ───────────────────────────────────────────────────
interface TechCategory {
    label: string;
    items: string[];
}

const techCategories: TechCategory[] = [
    {
        label: "FRONTEND",
        items: ["Next.JS", "ReactJS", "Astro", "Angular", "TypeScript"],
    },
    {
        label: "INFRASTRUCTURE",
        items: ["AWS", "GCP", "Cloudflare", "Vercel", "Azure", "Digital Ocean"],
    },
    {
        label: "BACKEND",
        items: ["NodeJS", "Supabase", "NeonDB", "GoLang", "Python", "PostgreSQL"],
    },
    {
        label: "MOBILE",
        items: ["React Native", "Flutter", "Android", "iOS"],
    },
    {
        label: "AI",
        items: ["Vector DB", "AI Agents", "OpenAI", "ClaudeAI", "Knowledge Graph"],
    },
    {
        label: "DESIGN",
        items: ["Figma", "Framer", "Unicorn Studio", "Spline 3D", "Webflow", "Lottie"],
    },
];

const aiTooling: TechCategory = {
    label: "AI TOOLING",
    items: [
        "Google Antigravity",
        "Claude Code",
        "Lovable",
        "Base44",
        "Replit",
        "Cursor AI",
        "Copilot",
        "Bolt",
        "Code Rabbit",
    ],
};

// ── Pill Badge ──────────────────────────────────────────────
function TechBadge({ label }: { label: string }) {
    return (
        <span className="inline-flex items-center border border-foreground/20 bg-[#111111] px-4 py-2 font-mono tracking-wide text-foreground/80 whitespace-nowrap">
            {label}
        </span>
    );
}

// ── Category Block ──────────────────────────────────────────
function TechCategory({ category }: { category: TechCategory }) {
    return (
        <div className="flex flex-col gap-4">
            <p className="font-mono text-xl uppercase text-foreground font-medium">
                {category.label}
            </p>
            <div className="flex flex-wrap gap-4">
                {category.items.map((item) => (
                    <TechBadge key={item} label={item} />
                ))}
            </div>
        </div>
    );
}

// ── Main Section ────────────────────────────────────────────
export default function TechnologyStack() {
    return (
        <section className="relative w-full bg-background py-20 lg:py-28">
            <Container>
                {/* ── Centered header ── */}
                <div className="flex flex-col items-center text-center gap-6 mb-16">
                    {/* Tag — matches work-with-us.tsx style */}
                    <Eyebrow className="mb-2">
                        AI + Tech Stack
                    </Eyebrow>

                    {/* Heading — same variant/size as work-with-us.tsx */}
                    <Heading as="h2" variant="big" className="text-neutral-400 text-center">
                        Modern Startup{" "}
                        <span className="text-foreground italic">Technology</span>
                        <br />
                        <span className="text-foreground italic">Stack</span>
                    </Heading>
                </div>

                {/* ── 2-column grid of categories ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    {techCategories.map((cat) => (
                        <TechCategory key={cat.label} category={cat} />
                    ))}
                </div>

                {/* ── Full-width AI Tooling row ── */}
                <div className="mt-12">
                    <TechCategory category={aiTooling} />
                </div>
            </Container>
        </section>
    );
}
import Image from "next/image";
import { FaCode, FaDatabase, FaRobot, FaPencilRuler } from "react-icons/fa";
import { SiCloudflare } from "react-icons/si";
import clsx from "clsx";
import Heading from "@/components/heading";
import Eyebrow from "@/components/eyebrow";

const techStackCategories = [
    {
        number: "01",
        title: "FRONTEND",
        items: [
            { name: "Next.JS", icon: "/icons/nextjs.svg" },
            { name: "ReactJS", icon: "/icons/react_light.svg" },
            { name: "Astro", icon: "/icons/astro-icon-dark.svg" },
            { name: "Angular", icon: "/icons/angular.svg" },
            { name: "TypeScript", icon: "/icons/typescript.svg" },
            { name: "shadcn/ui", icon: "/icons/shadcn-ui_dark.svg" },
        ],
    },
    {
        number: "02",
        title: "INFRASTRUCTURE",
        items: [
            { name: "AWS", icon: "/icons/aws_dark.svg" },
            { name: "GCP", icon: "/icons/google-cloud.svg" },
            { name: "Cloudflare", icon: <SiCloudflare className="h-5 w-5" /> },
            { name: "Vercel", icon: "/icons/vercel_dark.svg" },
            { name: "Azure", icon: "/icons/azure.svg" },
            { name: "Digital Ocean", icon: "/icons/digitalocean.svg" },
        ],
    },
    {
        number: "03",
        title: "BACKEND",
        items: [
            { name: "NodeJS", icon: "/icons/nodejs.svg" },
            { name: "Supabase", icon: "/icons/supabase.svg" },
            { name: "NeonDB", icon: "/icons/neon.svg" },
            { name: "GoLang", icon: "/icons/golang_dark.svg" },
            { name: "Python", icon: "/icons/python.svg" },
            { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
        ],
    },
    {
        number: "04",
        title: "MOBILE",
        items: [
            { name: "React Native", icon: "/icons/react_light.svg" },
            { name: "Flutter", icon: "/icons/flutter.svg" },
            { name: "Android", icon: "/icons/android-icon.svg" },
            { name: "IOS", icon: "/icons/apple_dark.svg" },
        ],
    },
    {
        number: "05",
        title: "AI",
        items: [
            { name: "Vector DB", icon: <FaDatabase className="h-5 w-5" /> },
            { name: "AI Agents", icon: <FaRobot className="h-5 w-5" /> },
            { name: "OpenAI", icon: "/icons/openai_dark.svg" },
            { name: "ClaudeAI", icon: "/icons/claude-ai-icon.svg" },
            { name: "Knowledge Graph", icon: <FaDatabase className="h-5 w-5" /> },
        ],
    },
    {
        number: "06",
        title: "DESIGN",
        items: [
            { name: "Figma", icon: "/icons/figma.svg" },
            { name: "Framer", icon: "/icons/framer_dark.svg" },
            { name: "Unicorn Studio", icon: <FaPencilRuler className="h-5 w-5" /> },
            { name: "Spline 3D", icon: <FaPencilRuler className="h-5 w-5" /> },
            { name: "Webflow", icon: "/icons/webflow.svg" },
            { name: "Lottie", icon: "/icons/lottielab.svg" },
        ],
    },
    {
        number: "07",
        title: "AI TOOLING",
        items: [
            { name: "Google Antigravity", icon: "/icons/antigravity.svg" },
            { name: "Claude Code", icon: null },
            { name: "Lovable", icon: "/icons/lovable.svg" },
            { name: "Base44", icon: null },
            { name: "Replit", icon: "/icons/replit.svg" },
            { name: "Cursor AI", icon: "/icons/cursor_light.svg" },
            { name: "Copilot", icon: "/icons/copilot_dark.svg" },
            { name: "Bolt", icon: "/icons/bolt-new_dark.svg" },
            { name: "Code Rabbit", icon: null },
        ],
    },
];

const BlueprintCorners = () => (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-lg"
    >
        <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-white opacity-0 transition-all duration-300 group-hover:opacity-100" />
        <div className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-white opacity-0 transition-all duration-300 group-hover:opacity-100" />
        <div className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-white opacity-0 transition-all duration-300 group-hover:opacity-100" />
        <div className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-white opacity-0 transition-all duration-300 group-hover:opacity-100" />
    </div>
);

const TechItem = ({
    name,
    icon,
}: {
    name: string;
    icon: string | React.ReactNode | null;
}) => {
    const FallbackIcon = <FaCode className="h-5 w-5" />;

    const renderIcon = () => {
        if (typeof icon === "string") {
            return (
                <Image
                    src={icon}
                    alt={`${name} logo`}
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                />
            );
        }
        return icon || FallbackIcon;
    };

    return (
        <div className="flex items-start gap-3 px-6">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-zinc-500">
                {renderIcon()}
            </div>
            <p className="text-sm font-medium text-white">{name}</p>
        </div>
    );
};

const TechCategoryCard = ({
    number,
    title,
    items,
    isFullWidth = false,
    className,
}: {
    number: string;
    title: string;
    items: { name: string; icon: string | React.ReactNode | null }[];
    isFullWidth?: boolean;
    className?: string;
}) => {
    return (
        <div
            className={clsx(
                "group relative h-full border border-zinc-800 bg-zinc-900/20 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/50",
                className,
            )}
        >
            <BlueprintCorners />
            <div className="relative z-20 flex h-full flex-col">
                <div className="mb-6 border-b border-zinc-800 px-6 py-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                        /{number}
                    </p>
                    <h3 className="font-mono text-sm font-medium uppercase tracking-widest text-white">
                        {title}
                    </h3>
                </div>

                <div
                    className={
                        isFullWidth
                            ? "grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pb-6"
                            : "flex flex-col gap-4 pb-6"
                    }
                >
                    {items.map((tech) => (
                        <TechItem key={tech.name} name={tech.name} icon={tech.icon} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function TechStackSection() {
    return (
        <section className="flex w-full flex-col items-center bg-black px-4 py-24 text-white selection:bg-white selection:text-black md:px-8 lg:px-12">
            <div className="mb-20 flex max-w-4xl flex-col items-center text-center">
                <Eyebrow className="mb-8">
                    AI + Tech Stack
                </Eyebrow>
                <Heading as="h2" variant="big" className="text-neutral-400 text-center">
                    Modern Startup{" "}
                    <span className="text-foreground italic">Technology</span>
                    <br />
                    <span className="text-foreground italic">Stack</span>
                </Heading>
            </div>

            <div className="w-full max-w-7xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {techStackCategories.map((category, index) => {
                        const isLastCategory = index === techStackCategories.length - 1;

                        return (
                            <TechCategoryCard
                                key={category.number}
                                number={category.number}
                                title={category.title}
                                items={category.items}
                                isFullWidth={isLastCategory}
                                className={isLastCategory ? "md:col-span-2 lg:col-span-3" : ""}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
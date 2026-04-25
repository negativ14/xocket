import { cn } from "@/lib/utils";
import { ElementType } from "react";
import { FeatureCardText } from "./feature-card-text";
interface FeatureCardProps {
    title: string;
    body: string;
    /** Optional icon component. When provided, renders a tall card with icon at
     *  top and text pinned to the bottom. Without an icon, renders a compact
     *  card with title + body stacked. */
    icon?: ElementType;
    className?: string;
}

export default function FeatureCard({ title, body, icon: Icon, className }: FeatureCardProps) {
    const haIcon = Boolean(Icon);

    return (
        <div
            className={cn(
                "flex flex-col bg-white p-6",
                haIcon ? "justify-between min-h-[160px] md:min-h-[240px]" : "gap-2 min-h-[120px] md:min-h-[160px]",
                className
            )}
        >
            {/* Icon at top — only when present */}
            {Icon && (
                <div className="mb-6">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-background" />
                </div>
            )}

            {/* Text — pinned to bottom when icon present, otherwise flows naturally */}
            <FeatureCardText title={title} body={body} haIcon={haIcon} />
        </div>
    );
}

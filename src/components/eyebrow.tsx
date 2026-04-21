import { cn } from "@/lib/utils";

interface EyebrowProps {
    children: React.ReactNode;
    className?: string;
}

export default function Eyebrow({ children, className }: EyebrowProps) {
    return (
        <div className={cn("flex items-center gap-2.5 bg-muted py-1.5 px-2 w-fit", className)}>
            <span
                className="inline-block w-3 h-3 bg-foreground shrink-0"
                aria-hidden="true"
            />
            <p className="font-mono text-xs xl:text-sm uppercase text-foreground leading-none">
                {children}
            </p>
        </div>
    );
}

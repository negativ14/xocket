import { cn } from "@/lib/utils";

export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn("mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16", className)}>
            {children}
        </div>
    )
} 
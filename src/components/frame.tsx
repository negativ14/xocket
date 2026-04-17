import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

export function FrameMarker({ className }: { className?: string }) {
  return (
    <>
      <Plus
        className={cn(
          "absolute top-0 left-0 size-4 -translate-x-1/2 -translate-y-1/2 text-foreground transition-all duration-300 ease-in-out group-hover:scale-110",
          className,
        )}
      />
      <Plus
        className={cn(
          "absolute top-0 right-0 size-4 translate-x-1/2 -translate-y-1/2 text-foreground transition-all duration-300 ease-in-out group-hover:scale-110",
          className,
        )}
      />
      <Plus
        className={cn(
          "absolute bottom-0 left-0 size-4 -translate-x-1/2 translate-y-1/2 text-foreground transition-all duration-300 ease-in-out group-hover:scale-110",
          className,
        )}
      />
      <Plus
        className={cn(
          "absolute bottom-0 right-0 size-4 translate-x-1/2 translate-y-1/2 text-foreground transition-all duration-300 ease-in-out group-hover:scale-110",
          className,
        )}
      />
    </>
  );
}
export const BlueprintCorners = ({ light = true }: { light?: boolean }) => {
    const color = light ? "border-white" : "border-black";
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 rounded-lg"
        >
            <div className={`absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 ${color} opacity-0 transition-all duration-300 group-hover:opacity-100`} />
            <div className={`absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 ${color} opacity-0 transition-all duration-300 group-hover:opacity-100`} />
            <div className={`absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 ${color} opacity-0 transition-all duration-300 group-hover:opacity-100`} />
            <div className={`absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 ${color} opacity-0 transition-all duration-300 group-hover:opacity-100`} />
        </div>
    );
};

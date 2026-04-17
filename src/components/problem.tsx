import Container from "@/components/container";

export default function Problem() {
    return (
        <section className="w-full bg-background py-20 lg:py-28">
            <Container>
                <div className="flex flex-col gap-8">
                    {/* Section tag */}
                    <div className="flex items-center gap-2.5 bg-muted px-2 py-1.5 w-fit">
                        <span
                            className="inline-block w-3 h-3 bg-foreground shrink-0"
                            aria-hidden="true"
                        />
                        <p className="font-mono text-xs xl:text-sm uppercase tracking-widest text-foreground leading-none">
                            The Problem
                        </p>
                    </div>

                    {/* Body copy */}
                    <p className="font-sans text-xl md:text-2xl lg:text-[32px] text-foreground">
                        Most startup products don&apos;t fail because of bad ideas, they fail because
                        execution is fragmented. Design and engineering fall out of sync, speed is
                        prioritized over structure, and what gets built isn&apos;t designed to scale.
                        Over time, this creates technical debt and slows everything down.
                    </p>
                </div>
            </Container>
        </section>
    );
}

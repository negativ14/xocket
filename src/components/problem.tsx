import Container from "@/components/container";
import Eyebrow from "./eyebrow";

export default function Problem() {
    return (
        <section className="w-full bg-background py-20 lg:py-28">
            <Container>
                <div className="flex flex-col gap-8">
                    {/* Section tag */}
                    <Eyebrow className="mb-2">
                        The Problem
                    </Eyebrow>

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

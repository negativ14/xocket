import Container from "@/components/container";
import Heading from "@/components/heading";

export default function AboutProblem() {
    return (
        <section className="py-20 lg:py-28 w-full overflow-hidden">
            <Container>
                <div className="flex flex-col gap-6 mb-12">
                    {/* Tag */}
                    <div className="flex items-center gap-2.5 bg-muted px-2.5 py-1.5 w-fit">
                        <span
                            className="inline-block w-2.5 h-2.5 bg-white shrink-0"
                            aria-hidden="true"
                        />
                        <p className="font-mono text-xs xl:text-sm uppercase tracking-widest text-white leading-none mt-0.5">
                            THE PROBLEM
                        </p>
                    </div>

                    {/* header */}
                    <div className="flex flex-col gap-8">
                        <Heading as="h2" variant="big" className="font-normal leading-[1.1] tracking-tight lg:text-5xl">
                            <span className="text-neutral-400">Why Most Products </span>
                            <span className="text-white">Fail</span>
                        </Heading>

                        {/* Body copy */}
                        <p className="font-sans font-medium text-xl md:text-3xl lg:text-[32px] tracking-tighter text-foreground/80 leading-12">
                            Most products don&apos;t fail because of bad ideas — they fail because execution is fragmented.  <br />
                            Design and engineering fall out of sync. Speed is prioritized over structure. <br />
                            What gets built isn&apos;t designed to scale. <br />
                        </p>
                        <p className="font-sans font-medium text-xl md:text-3xl lg:text-[32px] tracking-tighter text-foreground">
                            We exist to fix that.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}
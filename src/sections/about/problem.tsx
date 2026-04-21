import Container from "@/components/container";
import Eyebrow from "@/components/eyebrow";
import Heading from "@/components/heading";

export default function AboutProblem() {
    return (
        <section className="py-20 lg:py-28 w-full overflow-hidden">
            <Container>
                <div className="flex flex-col gap-6 mb-12">
                    {/* Tag */}
                    <Eyebrow className="mb-2">
                        THE PROBLEM
                    </Eyebrow>

                    {/* header */}
                    <div className="flex flex-col gap-8">
                        <Heading as="h2" variant="big" className="font-normal leading-[1.1] tracking-tight">
                            <span className="text-neutral-400">Why Most Products </span>
                            <span className="text-white italic">Fail</span>
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
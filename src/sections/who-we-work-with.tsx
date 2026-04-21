import Bulb from "@/assets/icons/bulb";
import Peoples from "@/assets/icons/peoples";
import { TrendingUp, Building2 } from "lucide-react";
import WhoWeWorkWith from "@/components/who-we-work-with";

const cards = [
    {
        icon: Bulb,
        title: "Early-Stage Founders",
        body: "Building from idea to MVP and need a strong foundation from day one.",
    },
    {
        icon: Peoples,
        title: "Startup Teams",
        body: "Moving fast and need structure to scale without breaking their product.",
    },
    {
        icon: TrendingUp,
        title: "Venture-Backed Companies",
        body: "Scaling products that require performance, reliability, and long-term stability.",
    },
    {
        icon: Building2,
        title: "Enterprise Innovation Teams",
        body: "Launching new products that must meet compliance and system-level requirements.",
    },
];

export default function WhoWeWorkWithSection() {
    return (
        <WhoWeWorkWith
            eyebrow="Who We Work For"
            heading={
                <>
                    <span className="text-neutral-400">Who We Work </span>
                    <span className="text-foreground italic">With</span>
                </>
            }
            subheading="We partner with teams that care about building products the right way from the start."
            cards={cards}
        />
    );
}

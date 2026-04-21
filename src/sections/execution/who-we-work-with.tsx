import Bulb from "@/assets/icons/bulb";
import Peoples from "@/assets/icons/peoples";
import { TrendingUp, Building2 } from "lucide-react";
import WhoWeWorkWith from "@/components/who-we-work-with";

const cards = [
    {
        icon: Bulb,
        title: "Growing Startup Teams",
        body: "Moving fast, but need structure to scale without breaking the product.",
    },
    {
        icon: Peoples,
        title: "Product Teams Under Pressure",
        body: "Shipping fast while maintaining performance, reliability, and quality.",
    },
    {
        icon: TrendingUp,
        title: "Venture-Backed Companies",
        body: "Scaling products that require performance, reliability, and long-term stability.",
    },
    {
        icon: Building2,
        title: "Enterprise Innovation Teams",
        body: "Products that must meet compliance and system-level requirements.",
    },
];

export default function ExecutionWhoWeWorkWith() {
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
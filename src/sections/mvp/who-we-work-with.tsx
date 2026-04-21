import Bulb from "@/assets/icons/bulb";
import Peoples from "@/assets/icons/peoples";
import { TrendingUp, Building2 } from "lucide-react";
import WhoWeWorkWith from "@/components/who-we-work-with";

const cards = [
    {
        icon: Bulb,
        title: "First-Time Founders",
        body: "Turning ideas into structured, buildable products with clear direction.",
    },
    {
        icon: Peoples,
        title: "Non-Technical Founders",
        body: "Bringing technical execution, architecture, and product clarity from day one.",
    },
    {
        icon: TrendingUp,
        title: "Pre-Seed / Seed Startups",
        body: "Moving from concept to investor-ready MVP with speed and structure.",
    },
    {
        icon: Building2,
        title: "Founders Validating Ideas",
        body: "Building fast, focused MVPs to test real market demand.",
    },
];

export default function MvpWhoWeWorkWith() {
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
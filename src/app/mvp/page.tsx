import MvpHero from "@/sections/mvp/hero";
import MvpWhoWeWorkWith from "@/sections/mvp/who-we-work-with";
import MvpStructure from "@/sections/mvp/structure";
import MvpTimeline from "@/sections/mvp/timeline";
import Deliverables from "@/sections/mvp/deliverables";
import MvpCaseStudies from "@/sections/mvp/case-studies";
import Footer from "@/sections/footer";

export default function MvpPage() {
    return (
        <main>
            <MvpHero />
            <MvpWhoWeWorkWith />
            <MvpStructure />
            <MvpTimeline />
            <Deliverables />
            <MvpCaseStudies />
            <Footer />
        </main>
    );
}
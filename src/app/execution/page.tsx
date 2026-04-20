import ExecutionCaseStudies from "@/sections/execution/case-study";
import ExecutionHero from "@/sections/execution/hero";
import ExecutionHowSprintWork from "@/sections/execution/how-sprint-work";
import ExecutionStructure from "@/sections/execution/structure";
import ExecutionWhatYouGet from "@/sections/execution/what-you-get";
import ExecutionWhoWeWorkWith from "@/sections/execution/who-we-work-with";
import Footer from "@/sections/footer";


export default function ExecutionPage() {
    return (
        <main>
            <ExecutionHero />
            <ExecutionWhoWeWorkWith />
            <ExecutionStructure />
            <ExecutionHowSprintWork />
            <ExecutionWhatYouGet />
            <ExecutionCaseStudies />
            <Footer />
        </main>
    );
}
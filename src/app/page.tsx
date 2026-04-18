import Problem from "@/components/problem";
import Solution from "@/components/solution";
import CaseStudy from "@/sections/case-study";
import Comparison from "@/sections/comparison";
import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import HowWeWork from "@/sections/how-we-work";
import TechnologyStack from "@/sections/technology-stack";
import WhoWeWorkWith from "@/sections/who-we-work-with";
import WorkWithUs from "@/sections/work-with-us";

export default function Home() {
  return <main>
    <Hero />
    <Problem />
    <HowWeWork />
    <Solution />
    <WhoWeWorkWith />
    <Comparison />
    <WorkWithUs />
    <TechnologyStack />
    <CaseStudy />
    <Footer />
  </main>
}
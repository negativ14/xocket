import Problem from "@/components/problem";
import Solution from "@/components/solution";
import TrustedBy from "@/components/trusted-by";
import CaseStudy from "@/sections/case-study";
import Comparison from "@/sections/comparison";
import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import HowWeWork from "@/sections/how-we-work";
import TechStackSection from "@/sections/tech-stack";
import WhoWeWorkWith from "@/sections/who-we-work-with";
import WorkWithUs from "@/sections/work-with-us";

export default function Home() {
  return <main>
    <Hero />
    <TrustedBy />
    <Problem />
    <HowWeWork />
    <Solution />
    <WhoWeWorkWith />
    <Comparison />
    <WorkWithUs />
    <TechStackSection />
    <CaseStudy />
    <Footer />
  </main>
}
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import Comparison from "@/sections/comparison";
import Hero from "@/sections/hero";
import HowWeWork from "@/sections/how-we-work";
import WhoWeWorkWith from "@/sections/who-we-work-with";

export default function Home() {
  return <main>
    <Hero />
    <Problem />
    <HowWeWork />
    <Solution />
    <WhoWeWorkWith />
    <Comparison />
  </main>
}
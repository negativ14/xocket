import AboutHero from "@/sections/about/hero";
import AboutPhiloshophy from "@/sections/about/philoshophy";
import AboutPhiloshophy2 from "@/sections/about/philoshophy2";
import AboutProblem from "@/sections/about/problem";
import AboutWorkWithUs from "@/sections/about/work-with-us";
import Footer from "@/sections/footer";

export default function Page() {
    return <main>
        <AboutHero />
        <AboutPhiloshophy />
        <AboutProblem />
        <AboutPhiloshophy2 />
        <AboutWorkWithUs />
        <Footer />
    </main>
}
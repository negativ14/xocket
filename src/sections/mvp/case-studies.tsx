import product1 from "@/assets/images/product-1.jpg";
import product2 from "@/assets/images/product-2.jpg";
import CaseStudies from "@/components/case-studies";

const items = [
    { image: product1, label: "AI SAAS Platform", alt: "AI SaaS Platform product screenshot" },
    { image: product2, label: "Typical Approach", alt: "Typical Approach product screenshot" },
];

export default function MvpCaseStudies() {
    return (
        <CaseStudies
            eyebrow="Case Studies"
            heading={
                <>
                    Built for <span className="text-white">Real Products,</span> Not
                    <br />
                    <span className="text-white">Just Ideas</span>
                </>
            }
            subheading="A look at how we've helped teams design, build, and scale production-ready products."
            items={items}
        />
    );
}

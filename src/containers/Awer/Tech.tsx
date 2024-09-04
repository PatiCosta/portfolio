import { SectionTitle } from "@/layouts/Section/SectionTitle";
import { Banner } from "@/layouts/Section/Banner";
import { Content } from "@/layouts/Section/Content";

export function Tech() {
    return (
        <>
            <SectionTitle
                subtitle="For the tech"
                title="Helping companies to maximize their efficiency"
            />
            <Content
                title="Front-end development"
                img="/assets/img/mockups/tech-awer-mockup.png"
                variant="normal"
                badges={["Systems", "Websites", "Landing Pages"]}
                badgeType="tag"
                description="I've created numerous landing pages and websites
                        aimed at optimizing companies' SEO, and I've
                        developed custom systems with various functionalities. I
                        began this journey as a full stack developer, later
                        transitioning to front-end development."
            />
            <Banner img="/assets/img/banners/tech-awer-banner.png" />
        </>
    );
}

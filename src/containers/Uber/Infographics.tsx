import { SectionTitle } from "@/layouts/Section/SectionTitle";
import { Banner } from "@/layouts/Section/Banner";
import { Content } from "@/layouts/Section/Content";

export function Infographics() {
    return (
        <>
            <SectionTitle
                subtitle="For the infos"
                title="From complex information to crystal-clear visual"
            />
            <Content
                title="Infographics"
                img="/assets/img/mockups/infographic-uber-mockup.png"
                variant="normal"
                badges={["Digital", "Printed"]}
                badgeType="tag"
                description="A real blend of art and science. By adhering to
                        Uber's design system guidelines, I focus on
                        creating a clear layout that guides the viewer's
                        eyes, prioritizing simplicity and enhancing overall
                        clarity."
            />
            <Banner img="/assets/img/banners/banner-infografico2.png" />
        </>
    );
}

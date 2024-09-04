import { SectionTitle } from "@/components/Section/SectionTitle";
import { Banner } from "@/components/Section/Banner";
import { Content } from "@/components/Section/Content";

export function UXUI() {
    return (
        <>
            <SectionTitle
                subtitle="For the experience"
                title="Every interaction is a seamless journey"
            />
            <Content
                title="User experience & interface"
                img="/assets/img/mockups/uxui-awer-mockup.png"
                variant="inverted"
                badges={["Research", "Interfaces"]}
                badgeType="tag"
                description="By realizing the need to elevate my front-end to the
                        next level, I began to delve into UX/UI and fell in love
                        with it. I have developed various interfaces for clients
                        across different industries, each with its own unique
                        visuals."
            />
            <Banner img="/assets/img/banners/uxui-awer-banner.png" />
        </>
    );
}

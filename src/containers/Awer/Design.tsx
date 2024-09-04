import { SectionTitle } from "@/layouts/Section/SectionTitle";
import { Banner } from "@/layouts/Section/Banner";
import { Content } from "@/layouts/Section/Content";

export function Design() {
    return (
        <>
            <SectionTitle
                subtitle="For the eyes"
                title="Speaking volumes without a single word"
            />
            <Content
                title="Graphic Design"
                img="/assets/img/mockups/design-awer-mockup.png"
                variant="normal"
                badges={["Digital", "Printed"]}
                badgeType="tag"
                description="After gaining experience in UX/UI, I discovered a hidden
                        talent for design within myself. Since then, I have
                        created and reimagined presentations, proposals, social
                        media posts, banners, catalogs, and much more."
            />
            <Banner img="/assets/img/banners/banner-awer-design.png" />
        </>
    );
}

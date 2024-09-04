import { SectionTitle } from "@/components/Section/SectionTitle";
import { Badge } from "@/components/Badges/Badge";
import { BadgeGroup } from "@/components/Badges/BadgeGroup";
import { Banner } from "@/components/Section/Banner";
import { Content } from "@/components/Section/Content";

export function Website() {
    return (
        <>
            <SectionTitle
                subtitle="For the marketing"
                title="Attracting new subscribers and donors"
            />
            <Content
                title="Re-imagined website"
                img="/assets/img/mockups/tech-awer-mockup.png"
                variant="inverted"
                badges={["UX & UI Design", "Front-end development"]}
                badgeType="fineline"
                description="I redesigned the website layout, making it more
                        appealing to the target audience with a younger and
                        informal approach. I optimized the SEO to improve the
                        ranking on search engines and aligned it with the
                        proposed digital marketing strategies."
            />
            <BadgeGroup mt={12} mb={16}>
                <Badge text="Figma" />
                <Badge text="Wireframes design" />
                <Badge text="React" />
                <Badge text="NextJS" />
                <Badge text="Typescript" />
                <Badge text="Context API" />
                <Badge text="Chakra UI" />
                <Badge text="Stripe" />
                <Badge text="Phosphor Icons" />
                <Badge text="Lottie" />
                <Badge text="React Hook Form" />
                <Badge text="Testing Library" />
            </BadgeGroup>
            <Banner img="/assets/img/banners/uxui-awer-banner.png" />
        </>
    );
}

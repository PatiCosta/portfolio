import { SectionTitle } from "@/layouts/Section/SectionTitle";
import { BadgeGroup } from "@/components/Badges/BadgeGroup";
import { Badge } from "@/components/Badges/Badge";
import { Banner } from "@/layouts/Section/Banner";
import { Content } from "@/layouts/Section/Content";

export function System() {
    return (
        <>
            <SectionTitle
                subtitle="For the donations and inscriptions"
                title="Making the whole process much easier"
            />
            <Content
                title="The payments & management system"
                img="/assets/img/mockups/cursinho-system-mockup.png"
                variant="normal"
                badges={["UX & UI Design", "Front-end development"]}
                badgeType="fineline"
                description="I designed all the interfaces and carried out all the
                        front-end development of the system, which had the focus
                        to manage the registrations received through the
                        website, from payment to the selection process, as well
                        as the donations they receive."
            />
            <BadgeGroup mt={12} mb={16}>
                <Badge text="Figma" />
                <Badge text="User journey" />
                <Badge text="Wireframes design" />
                <Badge text="React" />
                <Badge text="Typescript" />
                <Badge text="Context API" />
                <Badge text="Chakra UI" />
                <Badge text="Stripe" />
                <Badge text="Phosphor Icons" />
                <Badge text="Axios" />
                <Badge text="JWT Auth" />
                <Badge text="React Hook Form" />
                <Badge text="Testing Library" />
                <Badge text="NodeJS" />
                <Badge text="Express" />
                <Badge text="MongoDB" />
                <Badge text="Prisma" />
                <Badge text="SOLID" />
            </BadgeGroup>
            <Banner img="/assets/img/banners/sistema-cursinho-banner.png" />
        </>
    );
}

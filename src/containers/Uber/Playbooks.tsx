import { SectionTitle } from "@/layouts/Section/SectionTitle";
import { Banner } from "@/layouts/Section/Banner";
import { Content } from "@/layouts/Section/Content";

export function Playbooks() {
    return (
        <>
            <SectionTitle
                subtitle="For the team"
                title="Empowering teams to achieve their goals"
            />
            <Content
                title="Playbooks"
                img="/assets/img/mockups/playbook-uber-mockup.png"
                variant="normal"
                badges={["Digital", "Printed"]}
                badgeType="tag"
                description="It is like mapping a journey. Creating a structured
                        framework that breaks down strategies into actionable
                        steps, making it easy for team members to follow."
            />
            <Banner img="/assets/img/banners/banner-playbook-uber.png" />
        </>
    );
}

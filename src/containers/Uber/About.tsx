import { Image } from "@chakra-ui/react";
import { SectionTitle } from "@/layouts/Section/SectionTitle";
import { Wrapper } from "@/layouts/About/Wrapper";
import { Description } from "@/layouts/About/Description";
import { TagGroup } from "@/layouts/About/TagGroup";
import { Tag } from "@/layouts/About/Tag";

export function About() {
    return (
        <Wrapper>
            <SectionTitle
                subtitle="About the partnership"
                title="Helping to increase the visibility of the team"
            />
            <Image
                src="/assets/img/logos/uber-logo.svg"
                alt="Logo da Uber"
                h={{ base: 10, "2xl": 12 }}
            />
            <Description
                text="In early 2024 Uber’s legal team contacted me to enhance
                their materials in terms of design and layout. Since
                then, their meetings have featured beautiful, concise,
                and easy-to-understand playbooks and presentations, as
                well as their documents have gained greater visibility."
            />
            <TagGroup>
                <Tag
                    title="Since"
                    info="Early 2024"
                    variant="circle.bounce"
                    delay="0.2s"
                />
                <Tag
                    title="Main role"
                    info="Graphic & Digital Designer"
                    variant="diamond.bounce"
                    delay="0.4s"
                />
                <Tag
                    title="Deliverables"
                    info="Infographics, playbooks and presentations"
                    variant="square.scale"
                    delay="0.55s"
                />
            </TagGroup>
        </Wrapper>
    );
}

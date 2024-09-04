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
                subtitle="My consultancy and advisory company"
                title="Creating my own way to assist other businesses"
            />
            <Image
                src="/assets/img/logos/awer-logo.png"
                alt="Logo da Awer"
                h={{base: 10, '2xl': 12}}
            />
            <Description
                text="After years of helping other teams at our previous job,
                my team and I decided to launch Awer to assist teams in
                various organizations. As the Head of Technology and
                Design, I focus on meeting clients’ technology needs,
                from developing new systems to landing pages and
                websites, all with an emphasis on user experience and
                interface design. Additionally, I offer graphic design
                support by understanding the client’s needs and creating
                a diverse range of materials."
            />
            <TagGroup>
                <Tag
                    title="Since"
                    info="October 2020"
                    variant="circle.bounce"
                    delay="0.2s"
                />
                <Tag
                    title="Main role"
                    info="Head of technology and design"
                    variant="diamond.bounce"
                    delay="0.4s"
                />
                <Tag
                    title="Main tech deliverables"
                    info="System development and implementation"
                    variant="square.scale"
                    delay="0.55s"
                />
                <Tag
                    title="Main design deliverables"
                    info="UX, UI and Graphic design"
                    variant="circle.scale"
                    delay="0.65s"
                />
            </TagGroup>
        </Wrapper>
    );
}

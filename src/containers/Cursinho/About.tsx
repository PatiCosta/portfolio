import { SectionTitle } from "@/layouts/Section/SectionTitle";
import { Wrapper } from "@/layouts/About/Wrapper";
import { Description } from "@/layouts/About/Description";
import { TagGroup } from "@/layouts/About/TagGroup";
import { Tag } from "@/layouts/About/Tag";

export function About() {
    return (
        <Wrapper>
            <SectionTitle
                subtitle="The project"
                title="A new way to gather and manage the students"
            />
            <div></div>
            <Description
                text="The FEAUSP Prep Course is a popular preparatory program
                for college entrance exams that prepares its students to
                enter the best university in Latin America: USP. They
                contacted me in order to redesign their website, making
                it more visually appealing and attractive to new
                applicants, with a strong focus on digital marketing.
                They were also interested in developing a new payment
                and management system to help them manage the
                inscriptions more efficiently, as they were currently
                handling everything manually."
            />
            <TagGroup>
                <Tag
                    title="When"
                    info="2022"
                    variant="circle.bounce"
                    delay="0.2s"
                />
                <Tag
                    title="Main role"
                    info="UX/UI Designer and Front-end developer"
                    variant="diamond.bounce"
                    delay="0.4s"
                />
                <Tag
                    title="Client"
                    info="Cursinho FEAUSP"
                    variant="square.scale"
                    delay="0.55s"
                />
                <Tag
                    title="Deliverables"
                    info="Management system and redesigned website"
                    variant="circle.scale"
                    delay="0.65s"
                />
            </TagGroup>
        </Wrapper>
    );
}

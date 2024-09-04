import { SectionTitle } from "@/layouts/Section/SectionTitle";
import { Content } from "@/layouts/Section/Content";

export function Presentations() {
    return (
        <>
            <SectionTitle
                subtitle="For the meetings"
                title="Communicating ideas and sparking interest"
            />
            <Content
                title="Presentations"
                img="/assets/img/banners/presentations-uber-gif.gif"
                variant="inverted"
                badges={["Digital"]}
                badgeType="tag"
                description="Striking a balance between aesthetics and clarity. By
                        combining compelling visuals with succinct content, the
                        presentations capture attention and leave a lasting
                        impression."
            />
        </>
    );
}

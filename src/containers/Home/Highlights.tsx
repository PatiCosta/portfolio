import { SectionTitle } from "@/layouts/Section/SectionTitle";
import { HighlightCard } from "@/components/Project/HighlightCard";

export function Highlights() {
    return (
        <>
            <SectionTitle
                subtitle="Who am I working with"
                title="Special partners who always believe in my work"
            />
            <HighlightCard
                variant="normal"
                img="/assets/img/heroImages/uber-hero.png"
                logo="/assets/img/logos/uber-logo.svg"
                badges={["Design"]}
                link="/uber"
                summary="Since early 2024, I have been collaborating with
                        Uber's legal team as the main graphic designer of
                        projects such as digital and printed infographics,
                        playbooks and presentations."
            />
            <HighlightCard
                variant="inverted"
                img="/assets/img/heroImages/awer-hero.png"
                logo="/assets/img/logos/awer-logo.png"
                badges={["Front-end development", "Design", "UX & UI"]}
                link="/awer"
                summary="As a co-founder at Awer, my main role is Head of Design
                        and Technology. I focus on UX/UI design, front-end
                        development, and have participated in the development of
                        numerous automations, applications, and websites."
            />
        </>
    );
}

import { Footer } from "@/components/Footer";
import { Section } from "@/layouts/Section/Section";
import { About } from "@/containers/Uber/About";
import { Infographics } from "@/containers/Uber/Infographics";
import { Playbooks } from "@/containers/Uber/Playbooks";
import { Presentations } from "@/containers/Uber/Presentations";
import { Main } from "@/layouts/Main";
import { opacity } from "@/styles/animations";
import { Box, Image } from "@chakra-ui/react";
import { useRef } from "react";

export default function Uber() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const infographicsRef = useRef<HTMLDivElement>(null);
    const presentationsRef = useRef<HTMLDivElement>(null);
    const playbooksRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Main
                subtitle="Working as a freelancer with Uber's legal team"
                title={{
                    first: "Being their",
                    second: "main graphic &",
                    third: "digital designer",
                }}
                variant="back"
                links={[
                    {
                        title: "about",
                        to: () => aboutRef.current?.scrollIntoView(),
                    },
                    {
                        title: "infographics",
                        to: () => infographicsRef.current?.scrollIntoView(),
                    },
                    {
                        title: "presentations",
                        to: () => presentationsRef.current?.scrollIntoView(),
                    },
                    {
                        title: "playbooks",
                        to: () => playbooksRef.current?.scrollIntoView(),
                    },
                ]}
            >
                <Box
                    h="40vh"
                    w="40vh"
                    bg="gradients.medium.horizontal"
                    position="absolute"
                    ml="auto"
                    mr="auto"
                    left="0"
                    right="0"
                    animation={`${opacity.appear} 2s ease`}
                    transform="rotate(135deg)"
                />
                <Image
                    src="/assets/img/logos/uber-logo-transparent.svg"
                    alt="logo da Uber"
                    h={32}
                    position="absolute"
                    right={{ base: 24, '2xl': 40 }}
                    bottom={{ base: 16, '2xl': 24 }}
                    animation={`${opacity.appear} 2s ease`}
                />
            </Main>
            <Section sectionRef={aboutRef}>
                <About />
            </Section>
            <Section sectionRef={infographicsRef}>
                <Infographics />
            </Section>
            <Section sectionRef={presentationsRef}>
                <Presentations />
            </Section>
            <Section sectionRef={playbooksRef}>
                <Playbooks />
            </Section>
            <Footer />
        </>
    );
}

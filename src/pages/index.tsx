import { Footer } from "@/components/Footer";
import { Section } from "@/layouts/Section/Section";
import { About } from "@/containers/Home/About";
import { Highlights } from "@/containers/Home/Highlights";
import { Skills } from "@/containers/Home/Skills";
import { Works } from "@/containers/Home/Works";
import { Main } from "@/layouts/Main";
import { slide } from "@/styles/animations";
import { Box } from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function Home() {
    const [mainFinishedRendered, setMainFinishedRendered] = useState(false);

    const highlightsRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const worksRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Main
                subtitle="Hi! I'm Patrícia, a front-end developer and digital
                    designer"
                title={{
                    first: "I create powerful",
                    second: "user experiences &",
                    third: "beautiful interfaces",
                }}
                variant="locale"
                links={[
                    {
                        title: "highlights",
                        to: () => highlightsRef.current?.scrollIntoView(),
                    },
                    {
                        title: "my skills",
                        to: () => skillsRef.current?.scrollIntoView(),
                    },
                    {
                        title: "works",
                        to: () => worksRef.current?.scrollIntoView(),
                    },
                    {
                        title: "about me",
                        to: () => aboutRef.current?.scrollIntoView(),
                    },
                ]}
            >
                <Box
                    h="48vh"
                    w="48vh"
                    bg="gradients.medium.horizontal"
                    borderRadius="full"
                    position="absolute"
                    ml="auto"
                    mr="auto"
                    left="0"
                    right="0"
                    animation={`${slide.up.full} 1.5s ease`}
                    onAnimationEnd={() => setMainFinishedRendered(true)}
                />
            </Main>
            {mainFinishedRendered && (
                <Section sectionRef={highlightsRef}>
                    <Highlights />
                </Section>
            )}
            {mainFinishedRendered && (
                <Section sectionRef={skillsRef}>
                    <Skills />
                </Section>
            )}
            {mainFinishedRendered && (
                <Section sectionRef={worksRef}>
                    <Works />
                </Section>
            )}
            {/* {mainFinishedRendered && (
                <Section sectionRef={aboutRef}>
                    <About />
                </Section>
            )} */}
            {mainFinishedRendered && <Footer />}
        </>
    );
}

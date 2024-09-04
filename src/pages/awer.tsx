import { About } from "@/containers/Awer/About";
import { Design } from "@/containers/Awer/Design";
import { Tech } from "@/containers/Awer/Tech";
import { UXUI } from "@/containers/Awer/UXUI";
import { Footer } from "@/components/Footer";
import { useRef } from "react";
import { Main } from "@/layouts/Main";
import { Box, Image } from "@chakra-ui/react";
import { opacity } from "@/styles/animations";
import { Wrapper } from "@/components/Section/Wrapper";

export default function Awer() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const designRef = useRef<HTMLDivElement>(null);
    const techRef = useRef<HTMLDivElement>(null);
    const UXUIRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Main
                subtitle="Co-founding Awer to help minor companies"
                title={{
                    first: "Boosting their",
                    second: "daily routines &",
                    third: "financial results",
                }}
                variant="back"
                links={[
                    {
                        title: "about",
                        to: () => aboutRef.current?.scrollIntoView(),
                    },
                    {
                        title: "tech",
                        to: () => techRef.current?.scrollIntoView(),
                    },
                    {
                        title: "UX & UI",
                        to: () => UXUIRef.current?.scrollIntoView(),
                    },
                    {
                        title: "design",
                        to: () => designRef.current?.scrollIntoView(),
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
                />
                <Image
                    src="/assets/img/logos/awer-logo.png"
                    alt="logo da Awer"
                    h={16}
                    position="absolute"
                    right={24}
                    bottom={16}
                    opacity={0.04}
                    animation={`${opacity.transparent} 2s ease`}
                />
            </Main>
            <Wrapper sectionRef={aboutRef}>
                <About />
            </Wrapper>
            <Wrapper sectionRef={techRef}>
                <Tech />
            </Wrapper>
            <Wrapper sectionRef={UXUIRef}>
                <UXUI />
            </Wrapper>
            <Wrapper sectionRef={designRef}>
                <Design />
            </Wrapper>
            <Footer />
        </>
    );
}

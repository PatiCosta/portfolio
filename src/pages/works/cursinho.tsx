import { Footer } from "@/components/Footer";
import { Wrapper } from "@/components/Section/Wrapper";
import { About } from "@/containers/Cursinho/About";
import { System } from "@/containers/Cursinho/System";
import { Website } from "@/containers/Cursinho/Website";
import { Main } from "@/layouts/Main";
import { opacity } from "@/styles/animations";
import { Box, Image } from "@chakra-ui/react";
import { useRef } from "react";

export default function Awer() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const systemRef = useRef<HTMLDivElement>(null);
    const websiteRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Main
                subtitle="Cursinho FEAUSP"
                title={{
                    first: "A system to",
                    second: "manage students &",
                    third: "a new website",
                }}
                variant="back"
                links={[
                    {
                        title: "about",
                        to: () => aboutRef.current?.scrollIntoView(),
                    },
                    {
                        title: "management system",
                        to: () => systemRef.current?.scrollIntoView(),
                    },
                    {
                        title: "website",
                        to: () => websiteRef.current?.scrollIntoView(),
                    },
                ]}
            >
                <Box
                    h="80vh"
                    w="80vh"
                    borderRadius="full"
                    position="absolute"
                    right="25vh"
                    bottom={16}
                    bg="gradients.medium.radial"
                    animation={`${opacity.appear} 2s ease`}
                />
                <Image
                    src="/assets/img/mockups/main-cursinho.png"
                    alt="página inicial do sistema do cursinho"
                    position="absolute"
                    right={0}
                    h="50vh"
                    animation={`${opacity.appear} 2s ease`}
                />
            </Main>
            <Wrapper sectionRef={aboutRef}>
                <About />
            </Wrapper>
            <Wrapper sectionRef={systemRef}>
                <System />
            </Wrapper>
            <Wrapper sectionRef={websiteRef}>
                <Website />
            </Wrapper>
            <Footer />
        </>
    );
}

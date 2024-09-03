import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { RefObject, useLayoutEffect, useRef, useState } from "react";
import { SectionTitle } from "@/components/Section/SectionTitle";
import { slide } from "@/styles/animations";
import { HighlightLine } from "@/components/HighlightLine";
import { getTopPosition } from "@/utils/getTopPosition";

export function Skills({
    skillsRef,
}: {
    skillsRef: RefObject<HTMLDivElement>;
}) {
    const [animateContent, setAnimateContent] = useState(false);

    const contentRef = useRef(document.createElement("div"));

    useLayoutEffect(() => {
        const contentTopPosition = getTopPosition(contentRef.current);

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;

            if (contentTopPosition < scrollPos) {
                setAnimateContent(true);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    });

    return (
        <Box px={24} py={16} ref={skillsRef}>
            <SectionTitle
                subtitle="My main skills"
                title="Skills developed over the years & techs that I like"
            />
            <Flex
                alignItems="start"
                mt={16}
                gap={20}
                ref={contentRef}
                animation={animateContent ? `${slide.up.sm} 2s ease` : "none"}
            >
                <Flex alignItems="start" gap={6}>
                    <HighlightLine mt={4} variant="vertical" />
                    <Box>
                        <Text
                            fontWeight="700"
                            fontSize={24}
                            letterSpacing="0.4px"
                        >
                            Design
                        </Text>
                        <Text
                            color="medium"
                            fontWeight="200"
                            letterSpacing="0.6px"
                        >
                            2+ years
                        </Text>
                        <Flex direction="column" gap={0.5} mt={4}>
                            <Text>UI Design</Text>
                            <Text>UX Design</Text>
                            <Text>Digital Design</Text>
                            <Text>Presentations formatting</Text>
                            <Text>Books formatting</Text>
                            <Text>Infographics</Text>
                        </Flex>
                    </Box>
                </Flex>
                <Flex alignItems="start" gap={6}>
                    <HighlightLine mt={4} variant="vertical" />
                    <Box>
                        <Text
                            fontWeight="700"
                            fontSize={24}
                            letterSpacing="0.4px"
                        >
                            Development
                        </Text>
                        <Text
                            color="medium"
                            fontWeight="200"
                            letterSpacing="0.6px"
                        >
                            4+ years
                        </Text>
                        <Flex direction="column" gap={0.5} mt={4}>
                            <Text>ReactJS</Text>
                            <Text>NextJS</Text>
                            <Text>Typescript</Text>
                            <Text>TailwindCSS</Text>
                            <Text>Redux</Text>
                            <Text>NodeJS</Text>
                            <Text>Tests implementation</Text>
                            <Text>SCRUM & Kanban</Text>
                            <Text>Usage of component libraries</Text>
                        </Flex>
                    </Box>
                </Flex>
                <Grid flex="1" templateColumns="1fr 1fr" gap={2}>
                    <Flex
                        px={6}
                        py={4}
                        bgColor="transparent"
                        borderRadius="md"
                        alignItems="center"
                        gap={6}
                    >
                        <Image
                            src="/assets/img/logos/figma-logo.svg"
                            alt="logo do figma"
                            w={5}
                        />
                        <Box>
                            <Text fontWeight="500" letterSpacing="0.6px">
                                Figma
                            </Text>
                            <Text fontWeight="200" letterSpacing="0.6px">
                                Where I imagine stuff
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        px={6}
                        py={4}
                        bgColor="transparent"
                        borderRadius="md"
                        alignItems="center"
                        gap={6}
                    >
                        <Image
                            src="/assets/img/logos/canva-icon.svg"
                            alt="logo do canva"
                            w={6}
                        />
                        <Box>
                            <Text fontWeight="500" letterSpacing="0.6px">
                                Canva
                            </Text>
                            <Text fontWeight="200" letterSpacing="0.6px">
                                Where I put ideas
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        px={6}
                        py={4}
                        bgColor="transparent"
                        borderRadius="md"
                        alignItems="center"
                        gap={6}
                    >
                        <Image
                            src="/assets/img/logos/react-logo.svg"
                            alt="logo do react"
                            w={6}
                        />
                        <Box>
                            <Text fontWeight="500" letterSpacing="0.6px">
                                React
                            </Text>
                            <Text fontWeight="200" letterSpacing="0.6px">
                                How I like to code
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        px={6}
                        py={4}
                        bgColor="transparent"
                        borderRadius="md"
                        alignItems="center"
                        gap={6}
                    >
                        <Image
                            src="/assets/img/logos/tailwind-logo.svg"
                            alt="logo do tailwindCSS"
                            w={6}
                        />
                        <Box>
                            <Text fontWeight="500" letterSpacing="0.6px">
                                TailwindCSS
                            </Text>
                            <Text fontWeight="200" letterSpacing="0.6px">
                                How I shape things
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        px={6}
                        py={4}
                        bgColor="transparent"
                        borderRadius="md"
                        alignItems="center"
                        gap={6}
                    >
                        <Image
                            src="/assets/img/logos/typescript-logo.svg"
                            alt="logo do typescript"
                            w={6}
                        />
                        <Box>
                            <Text fontWeight="500" letterSpacing="0.6px">
                                Typescript
                            </Text>
                            <Text fontWeight="200" letterSpacing="0.6px">
                                To improve things up
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        px={6}
                        py={4}
                        bgColor="transparent"
                        borderRadius="md"
                        alignItems="center"
                        gap={6}
                    >
                        <Image
                            src="/assets/img/logos/native-logo.svg"
                            alt="logo do React Native"
                            w={6}
                        />
                        <Box>
                            <Text fontWeight="500" letterSpacing="0.6px">
                                React Native
                            </Text>
                            <Text fontWeight="200" letterSpacing="0.6px">
                                To go mobile
                            </Text>
                        </Box>
                    </Flex>
                </Grid>
            </Flex>
        </Box>
    );
}

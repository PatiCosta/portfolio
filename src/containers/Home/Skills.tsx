import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useLayoutEffect, useRef, useState } from "react";
import { SectionTitle } from "@/layouts/Section/SectionTitle";
import { slide } from "@/styles/animations";
import { HighlightLine } from "@/components/HighlightLine";
import { getTopPosition } from "@/utils/getTopPosition";

export function Skills() {
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
        <>
            <SectionTitle
                subtitle="My main skills"
                title="Skills developed over the years & techs that I like"
            />
            <Flex
                alignItems="start"
                mt={{ base: 16, "2xl": 24 }}
                gap={{ base: 20, "2xl": 32 }}
                ref={contentRef}
                animation={animateContent ? `${slide.up.sm} 2s ease` : "none"}
            >
                <Flex alignItems="start" gap={6}>
                    <HighlightLine
                        mt={{ base: 4, "2xl": 6 }}
                        variant="vertical"
                    />
                    <Box>
                        <Text
                            fontWeight="700"
                            fontSize={{ base: 24, "2xl": 32 }}
                            letterSpacing="0.4px"
                        >
                            Design
                        </Text>
                        <Text
                            color="medium"
                            fontWeight="200"
                            letterSpacing="0.6px"
                            fontSize={{ base: "md", "2xl": "lg" }}
                        >
                            2+ years
                        </Text>
                        <Flex
                            direction="column"
                            gap={0.5}
                            mt={{ base: 4, "2xl": 8 }}
                            fontSize={{ base: "md", "2xl": "lg" }}
                        >
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
                    <HighlightLine
                        mt={{ base: 4, "2xl": 6 }}
                        variant="vertical"
                    />
                    <Box>
                        <Text
                            fontWeight="700"
                            fontSize={{ base: 24, "2xl": 32 }}
                            letterSpacing="0.4px"
                        >
                            Development
                        </Text>
                        <Text
                            color="medium"
                            fontWeight="200"
                            letterSpacing="0.6px"
                            fontSize={{ base: "md", "2xl": "lg" }}
                        >
                            4+ years
                        </Text>
                        <Flex
                            direction="column"
                            gap={0.5}
                            mt={{ base: 4, "2xl": 8 }}
                            fontSize={{ base: "md", "2xl": "lg" }}
                        >
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
                        px={{ base: 6, "2xl": 12 }}
                        py={{ base: 4, "2xl": 6 }}
                        bgColor="transparent"
                        borderRadius="md"
                        alignItems="center"
                        gap={{ base: 6, "2xl": 8 }}
                    >
                        <Image
                            src="/assets/img/logos/figma-logo.svg"
                            alt="logo do figma"
                            w={{ base: 5, "2xl": 6 }}
                        />
                        <Box>
                            <Text
                                fontWeight="500"
                                letterSpacing="0.6px"
                                fontSize={{ base: "md", "2xl": "lg" }}
                            >
                                Figma
                            </Text>
                            <Text
                                fontWeight="200"
                                letterSpacing="0.6px"
                                fontSize={{ base: "md", "2xl": "lg" }}
                            >
                                Where I imagine stuff
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        px={{ base: 6, "2xl": 12 }}
                        py={{ base: 4, "2xl": 6 }}
                        bgColor="transparent"
                        borderRadius="md"
                        alignItems="center"
                        gap={{ base: 6, "2xl": 8 }}
                    >
                        <Image
                            src="/assets/img/logos/canva-icon.svg"
                            alt="logo do canva"
                            w={{ base: 6, "2xl": 8 }}
                        />
                        <Box>
                            <Text
                                fontWeight="500"
                                letterSpacing="0.6px"
                                fontSize={{ base: "md", "2xl": "lg" }}
                            >
                                Canva
                            </Text>
                            <Text
                                fontWeight="200"
                                letterSpacing="0.6px"
                                fontSize={{ base: "md", "2xl": "lg" }}
                            >
                                Where I put ideas
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        px={{ base: 6, "2xl": 12 }}
                        py={{ base: 4, "2xl": 6 }}
                        bgColor="transparent"
                        borderRadius="md"
                        alignItems="center"
                        gap={{ base: 6, "2xl": 8 }}
                    >
                        <Image
                            src="/assets/img/logos/react-logo.svg"
                            alt="logo do react"
                            w={{ base: 6, "2xl": 8 }}
                        />
                        <Box>
                            <Text
                                fontWeight="500"
                                letterSpacing="0.6px"
                                fontSize={{ base: "md", "2xl": "lg" }}
                            >
                                React
                            </Text>
                            <Text
                                fontWeight="200"
                                letterSpacing="0.6px"
                                fontSize={{ base: "md", "2xl": "lg" }}
                            >
                                How I like to code
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        px={{ base: 6, "2xl": 12 }}
                        py={{ base: 4, "2xl": 6 }}
                        bgColor="transparent"
                        borderRadius="md"
                        alignItems="center"
                        gap={{ base: 6, "2xl": 8 }}
                    >
                        <Image
                            src="/assets/img/logos/tailwind-logo.svg"
                            alt="logo do tailwindCSS"
                            w={{ base: 6, "2xl": 8 }}
                        />
                        <Box>
                            <Text
                                fontWeight="500"
                                letterSpacing="0.6px"
                                fontSize={{ base: "md", "2xl": "lg" }}
                            >
                                TailwindCSS
                            </Text>
                            <Text
                                fontWeight="200"
                                letterSpacing="0.6px"
                                fontSize={{ base: "md", "2xl": "lg" }}
                            >
                                How I shape things
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        px={{ base: 6, "2xl": 12 }}
                        py={{ base: 4, "2xl": 6 }}
                        bgColor="transparent"
                        borderRadius="md"
                        alignItems="center"
                        gap={{ base: 6, "2xl": 8 }}
                    >
                        <Image
                            src="/assets/img/logos/typescript-logo.svg"
                            alt="logo do typescript"
                            w={{ base: 6, "2xl": 8 }}
                        />
                        <Box>
                            <Text
                                fontWeight="500"
                                letterSpacing="0.6px"
                                fontSize={{ base: "md", "2xl": "lg" }}
                            >
                                Typescript
                            </Text>
                            <Text
                                fontWeight="200"
                                letterSpacing="0.6px"
                                fontSize={{ base: "md", "2xl": "lg" }}
                            >
                                To improve things up
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        px={{ base: 6, "2xl": 12 }}
                        py={{ base: 4, "2xl": 6 }}
                        bgColor="transparent"
                        borderRadius="md"
                        alignItems="center"
                        gap={{ base: 6, "2xl": 8 }}
                    >
                        <Image
                            src="/assets/img/logos/native-logo.svg"
                            alt="logo do React Native"
                            w={{ base: 6, "2xl": 8 }}
                        />
                        <Box>
                            <Text
                                fontWeight="500"
                                letterSpacing="0.6px"
                                fontSize={{ base: "md", "2xl": "lg" }}
                            >
                                React Native
                            </Text>
                            <Text
                                fontWeight="200"
                                letterSpacing="0.6px"
                                fontSize={{ base: "md", "2xl": "lg" }}
                            >
                                To go mobile
                            </Text>
                        </Box>
                    </Flex>
                </Grid>
            </Flex>
        </>
    );
}

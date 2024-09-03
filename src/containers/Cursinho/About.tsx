import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { RefObject, useLayoutEffect, useRef, useState } from "react";
import { bounce, scale, slide } from "@/styles/animations";
import { SectionTitle } from "@/components/Section/SectionTitle";
import { HighlightLine } from "@/components/HighlightLine";
import { getTopPosition } from "@/utils/getTopPosition";

export function About({ aboutRef }: { aboutRef: RefObject<HTMLDivElement> }) {
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
        <Flex
            px={24}
            py={16}
            justifyContent="space-between"
            ref={aboutRef}
            alignItems="end"
        >
            <Box>
                <SectionTitle
                    subtitle="The project"
                    title="A new way to gather and manage the students"
                />
                <Flex maxW="600px" h="inherit" direction="column" mt={16}>
                    <Text color="medium" fontSize="1.25rem">
                        The FEAUSP Prep Course is a popular preparatory program
                        for college entrance exams that prepares its students to
                        enter the best university in Latin America: USP. They
                        contacted me in order to redesign their website, making
                        it more visually appealing and attractive to new
                        applicants, with a strong focus on digital marketing.
                        They were also interested in developing a new payment
                        and management system to help them manage the
                        inscriptions more efficiently, as they were currently
                        handling everything manually.
                    </Text>
                    <HighlightLine mt={14} variant="horizontal" />
                </Flex>
            </Box>
            <Box
                mt={16}
                ref={contentRef}
                animation={animateContent ? `${slide.up.sm} 2s ease` : "none"}
            >
                <Grid w="100%" templateColumns="1fr" gap={2} mt={16}>
                    <Flex
                        px={8}
                        py={4}
                        bgColor="transparent"
                        borderRadius="md"
                        alignItems="center"
                        gap={8}
                    >
                        <Box
                            w={6}
                            h={6}
                            borderRadius="full"
                            border="1px solid"
                            borderColor="light"
                            position="relative"
                        >
                            <Box
                                w="100%"
                                h="100%"
                                border="1px solid"
                                borderColor="medium"
                                borderRadius="full"
                                position="absolute"
                                opacity={0.6}
                                animation={`${bounce.up} 6s ease infinite`}
                            />
                            <Box
                                w="100%"
                                h="100%"
                                border="1px solid"
                                borderColor="medium"
                                borderRadius="full"
                                position="absolute"
                                opacity={0.6}
                                animation={`${bounce.down} 6s ease infinite`}
                            />
                        </Box>
                        <Box>
                            <Text fontWeight="500" letterSpacing="0.6px">
                                When
                            </Text>
                            <Text fontWeight="200" letterSpacing="0.6px">
                                2022
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        px={8}
                        py={4}
                        bgColor="transparent"
                        borderRadius="md"
                        alignItems="center"
                        gap={8}
                    >
                        <Box w={5} h={5} position="relative">
                            <Box
                                w="100%"
                                h="100%"
                                position="absolute"
                                animation={`${bounce.left} 6s ease infinite`}
                            >
                                <Box
                                    w="100%"
                                    h="100%"
                                    border="1px solid"
                                    borderColor="light"
                                    opacity={0.6}
                                    transform="rotate(45deg)"
                                />
                            </Box>
                            <Box
                                w="100%"
                                h="100%"
                                position="absolute"
                                animation={`${bounce.right} 6s ease infinite`}
                            >
                                <Box
                                    w="100%"
                                    h="100%"
                                    border="1px solid"
                                    borderColor="medium"
                                    opacity={0.6}
                                    transform="rotate(45deg)"
                                />
                            </Box>
                        </Box>
                        <Box>
                            <Text fontWeight="500" letterSpacing="0.6px">
                                Main role
                            </Text>
                            <Text fontWeight="200" letterSpacing="0.6px">
                                UX/UI Designer and Front-end developer
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        px={8}
                        py={4}
                        bgColor="transparent"
                        borderRadius="md"
                        alignItems="center"
                        gap={8}
                    >
                        <Box
                            w={6}
                            h={6}
                            border="1px solid"
                            borderColor="light"
                            position="relative"
                        >
                            <Box
                                w="100%"
                                h="100%"
                                border="1px solid"
                                borderColor="medium"
                                position="absolute"
                                left={0}
                                right={0}
                                mx="auto"
                                opacity={0.6}
                                animation={`${scale.up} 6s ease infinite`}
                            />
                            <Box
                                w="100%"
                                h="100%"
                                border="1px solid"
                                borderColor="medium"
                                left={0}
                                right={0}
                                mx="auto"
                                position="absolute"
                                opacity={0.6}
                                animation={`${scale.down} 6s ease infinite`}
                            />
                        </Box>
                        <Box>
                            <Text fontWeight="500" letterSpacing="0.6px">
                                Deliverables
                            </Text>
                            <Text fontWeight="200" letterSpacing="0.6px">
                                Management system and redesigned website
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        px={8}
                        py={4}
                        bgColor="transparent"
                        borderRadius="md"
                        alignItems="center"
                        gap={8}
                    >
                        <Box
                            w={6}
                            h={6}
                            border="1px solid"
                            borderColor="light"
                            position="relative"
                            borderRadius="full"
                        >
                            <Box
                                w="100%"
                                h="100%"
                                border="1px solid"
                                borderColor="medium"
                                position="absolute"
                                borderRadius="full"
                                left={0}
                                right={0}
                                mx="auto"
                                opacity={0.6}
                                animation={`${scale.up} 6s ease infinite`}
                            />
                            <Box
                                w="100%"
                                h="100%"
                                border="1px solid"
                                borderColor="medium"
                                borderRadius="full"
                                left={0}
                                right={0}
                                mx="auto"
                                position="absolute"
                                opacity={0.6}
                                animation={`${scale.down} 6s ease infinite`}
                            />
                        </Box>
                        <Box>
                            <Text fontWeight="500" letterSpacing="0.6px">
                                Client
                            </Text>
                            <Text fontWeight="200" letterSpacing="0.6px">
                                Cursinho FEAUSP
                            </Text>
                        </Box>
                    </Flex>
                </Grid>
            </Box>
        </Flex>
    );
}

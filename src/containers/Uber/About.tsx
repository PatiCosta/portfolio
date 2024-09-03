import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { RefObject, useLayoutEffect, useRef, useState } from "react";
import { SectionTitle } from "@/components/Section/SectionTitle";
import { bounce, scale, slide } from "@/styles/animations";
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
                    subtitle="About the partnership"
                    title="Helping to increase the visibility of the team"
                />
                <Flex maxW="600px" h="inherit" direction="column" mt={16}>
                    <Text color="medium" fontSize="1.25rem">
                        In early 2024 Uber’s legal team contacted me to enhance
                        their materials in terms of design and layout. Since
                        then, their meetings have featured beautiful, concise,
                        and easy-to-understand playbooks and presentations, as
                        well as their documents have gained greater visibility.
                    </Text>

                    <Text mt={8} color="medium" fontSize="14px">
                        *All information regarding the designs presented on this
                        page has been altered to protect the confidentiality of
                        all related documents.
                    </Text>
                    <HighlightLine mt={14} variant="horizontal" />
                </Flex>
            </Box>
            <Box
                mt={16}
                ref={contentRef}
                animation={animateContent ? `${slide.up.sm} 2s ease` : "none"}
            >
                <Image
                    src="/assets/img/logos/uber-logo.svg"
                    alt="Logo da Uber"
                    h={10}
                />
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
                                Since
                            </Text>
                            <Text fontWeight="200" letterSpacing="0.6px">
                                Early 2024
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
                                Graphic & Digital Designer
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
                                Infographics, playbooks and presentations
                            </Text>
                        </Box>
                    </Flex>
                </Grid>
            </Box>
        </Flex>
    );
}

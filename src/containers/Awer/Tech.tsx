import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { RefObject, useLayoutEffect, useRef, useState } from "react";
import { slide } from "@/styles/animations";
import { SectionTitle } from "@/components/Section/SectionTitle";
import { BadgeGroup } from "@/components/Badges/BadgeGroup";
import { Badge } from "@/components/Badges/Badge";
import { HighlightLine } from "@/components/HighlightLine";
import { getTopPosition } from "@/utils/getTopPosition";

export function Tech({ techRef }: { techRef: RefObject<HTMLDivElement> }) {
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
        <Box px={24} py={16} ref={techRef}>
            <SectionTitle
                subtitle="For the tech"
                title="Helping companies to maximize their efficiency"
            />
            <Flex
                my={16}
                gap={12}
                alignItems="end"
                ref={contentRef}
                animation={animateContent ? `${slide.up.sm} 1s ease` : "none"}
            >
                <Box borderRadius="md">
                    <Image
                        src="/assets/img/mockups/tech-awer-mockup.png"
                        alt="Mockup for the example of one tech made for awer"
                        h="40vh"
                        borderRadius="md"
                    />
                </Box>
                <Box flex="1" h="100%">
                    <Text fontWeight="700" fontSize={32}>
                        Front-end development
                    </Text>
                    <BadgeGroup mt={2}>
                        <Badge text="Systems" />
                        <Badge text="Websites" />
                        <Badge text="Landing Pages" />
                    </BadgeGroup>
                    <Text mt={12} color="medium" fontSize="1.25rem">
                        I&apos;ve created numerous landing pages and websites
                        aimed at optimizing companies&apos; SEO, and I&apos;ve
                        developed custom systems with various functionalities. I
                        began this journey as a full stack developer, later
                        transitioning to front-end development.
                    </Text>
                    <HighlightLine mt={12} variant="horizontal" />
                </Box>
            </Flex>
            <Box w="100%" overflow="hidden">
                <Image
                    src="/assets/img/banners/tech-awer-banner.png"
                    alt="banner da awer"
                    w="100%"
                />
            </Box>
        </Box>
    );
}

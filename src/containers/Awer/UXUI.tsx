import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { RefObject, useLayoutEffect, useRef, useState } from "react";
import { slide } from "@/styles/animations";
import { SectionTitle } from "@/components/Section/SectionTitle";
import { BadgeGroup } from "@/components/Badges/BadgeGroup";
import { Badge } from "@/components/Badges/Badge";
import { HighlightLine } from "@/components/HighlightLine";
import { getTopPosition } from "@/utils/getTopPosition";

export function UXUI({ UXUIRef }: { UXUIRef: RefObject<HTMLDivElement> }) {
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
        <Box px={24} py={16} ref={UXUIRef}>
            <SectionTitle
                subtitle="For the experience"
                title="Every interaction is a seamless journey"
            />
            <Flex
                my={16}
                gap={12}
                alignItems="end"
                ref={contentRef}
                animation={animateContent ? `${slide.up.sm} 1s ease` : "none"}
            >
                <Box flex="1" h="100%">
                    <Text fontWeight="700" fontSize={32}>
                        User experience & interface
                    </Text>
                    <BadgeGroup mt={2}>
                        <Badge text="Research" />
                        <Badge text="Interfaces" />
                    </BadgeGroup>
                    <Text mt={12} color="medium" fontSize="1.25rem">
                        By realizing the need to elevate my front-end to the
                        next level, I began to delve into UX/UI and fell in love
                        with it. I have developed various interfaces for clients
                        across different industries, each with its own unique
                        visuals.
                    </Text>
                    <HighlightLine mt={12} variant="horizontal" />
                </Box>
                <Box borderRadius="md">
                    <Image
                        src="/assets/img/mockups/uxui-awer-mockup.png"
                        alt="Mockup for the example of one presentation made for uber"
                        h="40vh"
                        borderRadius="md"
                    />
                </Box>
            </Flex>
            <Box w="100%" overflow="hidden" borderRadius="md">
                <Image
                    src="/assets/img/banners/uxui-awer-banner.png"
                    alt="banner da awer"
                    w="100%"
                />
            </Box>
        </Box>
    );
}

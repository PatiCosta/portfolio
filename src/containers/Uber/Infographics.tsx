import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { RefObject, useLayoutEffect, useRef, useState } from "react";
import { SectionTitle } from "@/components/Section/SectionTitle";
import { BadgeGroup } from "@/components/Badges/BadgeGroup";
import { Badge } from "@/components/Badges/Badge";
import { slide } from "@/styles/animations";
import { HighlightLine } from "@/components/HighlightLine";
import { getTopPosition } from "@/utils/getTopPosition";

export function Infographics({
    infographicsRef,
}: {
    infographicsRef: RefObject<HTMLDivElement>;
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
        <Box px={24} py={16} ref={infographicsRef}>
            <SectionTitle
                subtitle="For the infos"
                title="From complex information to crystal-clear visual"
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
                        src="/assets/img/mockups/infographic-uber-mockup.png"
                        alt="Mockup for the example of one infographic made for uber"
                        h="40vh"
                        borderRadius="md"
                    />
                </Box>
                <Box flex="1" h="100%">
                    <Text fontWeight="700" fontSize={32}>
                        Infographics
                    </Text>
                    <BadgeGroup mt={2}>
                        <Badge text="Digital" />
                        <Badge text="Printed" />
                    </BadgeGroup>
                    <Text mt={12} color="medium" fontSize="1.25rem">
                        A real blend of art and science. By adhering to
                        Uber&apos;s design system guidelines, I focus on
                        creating a clear layout that guides the viewer&apos;s
                        eyes, prioritizing simplicity and enhancing overall
                        clarity.
                    </Text>
                    <HighlightLine mt={12} variant="horizontal" />
                </Box>
            </Flex>
            <Box w="100%" overflow="hidden" borderRadius="md">
                <Image
                    src="/assets/img/banners/banner-infografico2.png"
                    alt="banner da uber"
                    w="100%"
                />
            </Box>
        </Box>
    );
}

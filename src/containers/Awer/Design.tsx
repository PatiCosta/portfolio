import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { RefObject, useLayoutEffect, useRef, useState } from "react";
import { slide } from "@/styles/animations";
import { SectionTitle } from "@/components/Section/SectionTitle";
import { BadgeGroup } from "@/components/Badges/BadgeGroup";
import { Badge } from "@/components/Badges/Badge";
import { HighlightLine } from "@/components/HighlightLine";
import { getTopPosition } from "@/utils/getTopPosition";

export function Design({
    designRef,
}: {
    designRef: RefObject<HTMLDivElement>;
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
        <Box px={24} pb={16} ref={designRef}>
            <SectionTitle
                subtitle="For the eyes"
                title="Speaking volumes without a single word"
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
                        src="/assets/img/mockups/design-awer-mockup.png"
                        alt="Mockup for the example of one proposal made for awer"
                        h="40vh"
                        borderRadius="md"
                    />
                </Box>
                <Box flex="1" h="100%">
                    <Text fontWeight="700" fontSize={32}>
                        Graphic Design
                    </Text>
                    <BadgeGroup mt={2}>
                        <Badge text="Digital" />
                        <Badge text="Printed" />
                    </BadgeGroup>
                    <Text mt={12} color="medium" fontSize="1.25rem">
                        After gaining experience in UX/UI, I discovered a hidden
                        talent for design within myself. Since then, I have
                        created and reimagined presentations, proposals, social
                        media posts, banners, catalogs, and much more.
                    </Text>
                    <HighlightLine mt={12} variant="horizontal" />
                </Box>
            </Flex>
            <Box w="100%" overflow="hidden" borderRadius="md">
                <Image
                    src="/assets/img/banners/banner-awer-design.png"
                    alt="banner da awer"
                    w="100%"
                />
            </Box>
        </Box>
    );
}

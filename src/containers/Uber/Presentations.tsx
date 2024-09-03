import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { RefObject, useLayoutEffect, useRef, useState } from "react";
import { SectionTitle } from "@/components/Section/SectionTitle";
import { BadgeGroup } from "@/components/Badges/BadgeGroup";
import { Badge } from "@/components/Badges/Badge";
import { slide } from "@/styles/animations";
import { HighlightLine } from "@/components/HighlightLine";
import { getTopPosition } from "@/utils/getTopPosition";

export function Presentations({
    presentationsRef,
}: {
    presentationsRef: RefObject<HTMLDivElement>;
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
        <Box px={24} py={16} ref={presentationsRef}>
            <SectionTitle
                subtitle="For the meetings"
                title="Communicating ideas and sparking interest"
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
                        Presentations
                    </Text>
                    <BadgeGroup mt={2}>
                        <Badge text="Digital" />
                    </BadgeGroup>
                    <Text mt={12} color="medium" fontSize="1.25rem">
                        Striking a balance between aesthetics and clarity. By
                        combining compelling visuals with succinct content, the
                        presentations capture attention and leave a lasting
                        impression.
                    </Text>
                    <HighlightLine mt={12} variant="horizontal" />
                </Box>
                <Box borderRadius="md">
                    <Image
                        src="/assets/img/banners/presentations-uber-gif.gif"
                        alt="Mockup for the example of one presentation made for uber"
                        h="48vh"
                        borderRadius="md"
                    />
                </Box>
            </Flex>
        </Box>
    );
}

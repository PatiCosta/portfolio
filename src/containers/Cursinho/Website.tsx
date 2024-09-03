import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { RefObject, useLayoutEffect, useRef, useState } from "react";
import { slide } from "@/styles/animations";
import { SectionTitle } from "@/components/Section/SectionTitle";
import { Badge } from "@/components/Badges/Badge";
import { BadgeGroup } from "@/components/Badges/BadgeGroup";
import { HighlightLine } from "@/components/HighlightLine";
import { getTopPosition } from "@/utils/getTopPosition";

export function Website({
    websiteRef,
}: {
    websiteRef: RefObject<HTMLDivElement>;
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
        <Box px={24} py={16} ref={websiteRef}>
            <SectionTitle
                subtitle="For the marketing"
                title="Attracting new subscribers and donors"
            />
            <Flex
                mt={16}
                gap={12}
                alignItems="end"
                ref={contentRef}
                animation={animateContent ? `${slide.up} 1s ease` : "none"}
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
                        Re-imagined website
                    </Text>
                    <Flex
                        gap={4}
                        letterSpacing="0.6px"
                        alignItems="center"
                        fontWeight="200"
                    >
                        <Text color="medium">UX & UI Design</Text>
                        <Text color="highlight">|</Text>
                        <Text color="medium">Front-end development</Text>
                    </Flex>
                    <Text mt={8} color="medium" fontSize="1.25rem">
                        I redesigned the website layout, making it more
                        appealing to the target audience with a younger and
                        informal approach. I optimized the SEO to improve the
                        ranking on search engines and aligned it with the
                        proposed digital marketing strategies.
                    </Text>
                    <HighlightLine mt={12} variant="horizontal" />
                </Box>
            </Flex>
            <BadgeGroup mt={12} mb={16}>
                <Badge text="Figma" />
                <Badge text="Wireframes design" />
                <Badge text="React" />
                <Badge text="NextJS" />
                <Badge text="Typescript" />
                <Badge text="Context API" />
                <Badge text="Chakra UI" />
                <Badge text="Stripe" />
                <Badge text="Phosphor Icons" />
                <Badge text="Lottie" />
                <Badge text="React Hook Form" />
                <Badge text="Testing Library" />
            </BadgeGroup>
        </Box>
    );
}

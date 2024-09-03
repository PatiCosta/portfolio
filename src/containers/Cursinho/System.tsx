import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { RefObject, useLayoutEffect, useRef, useState } from "react";
import { slide } from "@/styles/animations";
import { SectionTitle } from "@/components/Section/SectionTitle";
import { BadgeGroup } from "@/components/Badges/BadgeGroup";
import { Badge } from "@/components/Badges/Badge";
import { HighlightLine } from "@/components/HighlightLine";
import { getTopPosition } from "@/utils/getTopPosition";

export function System({
    systemRef,
}: {
    systemRef: RefObject<HTMLDivElement>;
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
        <Box px={24} py={16} ref={systemRef}>
            <SectionTitle
                subtitle="For the donations and inscriptions"
                title="Making the whole process much easier"
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
                        src="/assets/img/mockups/design-awer-mockup.png"
                        alt="Mockup for the example of one proposal made for awer"
                        h="40vh"
                        borderRadius="md"
                    />
                </Box>
                <Box flex="1" h="100%">
                    <Text fontWeight="700" fontSize={32}>
                        The payments & management system
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
                        I designed all the interfaces and carried out all the
                        front-end development of the system, which had the focus
                        to manage the registrations received through the
                        website, from payment to the selection process, as well
                        as the donations they receive.
                    </Text>
                    <HighlightLine mt={12} variant="horizontal" />
                </Box>
            </Flex>
            <BadgeGroup mt={12} mb={16}>
                <Badge text="Figma" />
                <Badge text="User journey" />
                <Badge text="Wireframes design" />
                <Badge text="React" />
                <Badge text="Typescript" />
                <Badge text="Context API" />
                <Badge text="Chakra UI" />
                <Badge text="Stripe" />
                <Badge text="Phosphor Icons" />
                <Badge text="Axios" />
                <Badge text="JWT Auth" />
                <Badge text="React Hook Form" />
                <Badge text="Testing Library" />
                <Badge text="NodeJS" />
                <Badge text="Express" />
                <Badge text="MongoDB" />
                <Badge text="Prisma" />
                <Badge text="SOLID" />
            </BadgeGroup>
        </Box>
    );
}

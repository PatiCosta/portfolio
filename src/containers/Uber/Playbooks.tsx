import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { RefObject, useLayoutEffect, useRef, useState } from "react";
import { SectionTitle } from "@/components/Section/SectionTitle";
import { BadgeGroup } from "@/components/Badges/BadgeGroup";
import { Badge } from "@/components/Badges/Badge";
import { slide } from "@/styles/animations";
import { HighlightLine } from "@/components/HighlightLine";
import { getTopPosition } from "@/utils/getTopPosition";

export function Playbooks({
    playbooksRef,
}: {
    playbooksRef: RefObject<HTMLDivElement>;
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
        <Box px={24} pb={16} ref={playbooksRef}>
            <SectionTitle
                subtitle="For the team"
                title="Empowering teams to achieve their goals"
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
                        src="/assets/img/mockups/playbook-uber-mockup.png"
                        alt="Mockup for the example of one playbook made for uber"
                        h="40vh"
                        borderRadius="md"
                    />
                </Box>
                <Box flex="1" h="100%">
                    <Text fontWeight="700" fontSize={32}>
                        Playbooks
                    </Text>
                    <BadgeGroup mt={2}>
                        <Badge text="Digital" />
                        <Badge text="Printed" />
                    </BadgeGroup>
                    <Text mt={12} color="medium" fontSize="1.25rem">
                        It is like mapping a journey. Creating a structured
                        framework that breaks down strategies into actionable
                        steps, making it easy for team members to follow.
                    </Text>
                    <HighlightLine mt={12} variant="horizontal" />
                </Box>
            </Flex>
            <Box w="100%" overflow="hidden" borderRadius="md">
                <Image
                    src="/assets/img/banners/banner-playbook-uber.png"
                    alt="banner da uber"
                    w="100%"
                />
            </Box>
        </Box>
    );
}

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { BadgeGroup } from "../Badges/BadgeGroup";
import { Badge } from "../Badges/Badge";
import { HighlightLine } from "../HighlightLine";
import { useLayoutEffect, useRef, useState } from "react";
import { getTopPosition } from "@/utils/getTopPosition";
import { slide } from "@/styles/animations";

interface ContentProps {
    variant: "normal" | "inverted";
    img: string;
    title: string;
    description: string;
    badges: string[];
    badgeType: "fineline" | "tag";
}

export function Content({
    variant,
    img,
    title,
    description,
    badges,
    badgeType,
}: ContentProps) {
    const [animate, setAnimate] = useState(false);

    const contentRef = useRef(document.createElement("div"));

    useLayoutEffect(() => {
        const cardTopPosition = getTopPosition(contentRef.current);

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;

            if (cardTopPosition < scrollPos) {
                setAnimate(true);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    });

    return (
        <Flex
            my={16}
            gap={12}
            alignItems="end"
            ref={contentRef}
            animation={animate ? `${slide.up.sm} 1s ease` : "none"}
            direction={variant === "normal" ? "row" : "row-reverse"}
        >
            <Box borderRadius="md">
                <Image
                    src={img}
                    alt="Mockup for section"
                    h="40vh"
                    borderRadius="md"
                />
            </Box>
            <Box flex="1" h="100%">
                <Text fontWeight="700" fontSize={32}>
                    {title}
                </Text>
                {badgeType === "tag" && (
                    <BadgeGroup mt={2}>
                        {badges.map((badge) => (
                            <Badge key={badge} text={badge} />
                        ))}
                    </BadgeGroup>
                )}
                {badgeType === "fineline" && (
                    <Flex
                        gap={4}
                        letterSpacing="0.6px"
                        alignItems="center"
                        fontWeight="200"
                    >
                        {badges.map((badge, index) => {
                            return (
                                <Flex key={badge} gap={4}>
                                    <Text color="medium">{badge}</Text>

                                    {index < badges.length - 1 && (
                                        <Text color="highlight">|</Text>
                                    )}
                                </Flex>
                            );
                        })}
                    </Flex>
                )}
                <Text mt={8} color="medium" fontSize="1.25rem">
                    {description}
                </Text>
                <HighlightLine mt={12} variant="horizontal" />
            </Box>
        </Flex>
    );
}
